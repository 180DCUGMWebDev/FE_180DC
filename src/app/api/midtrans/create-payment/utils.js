import { NextResponse } from "next/server";

const { snap } = require("../consts");

export const getCompetitionPrices = (competition) => {
  switch (competition) {
    case "180DC BCC":
      return 5000;
    case "Test Event":
      return 500;
    default:
      return 0;
  }
};

export const getDefaultCompetitionOrderItems = (competition) => {
  switch (competition) {
    case "180DC BCC":
      return [
        {
          id: "180_dc_bcc",
          name: "180DC BCC",
          quantity: 1,
          price: getCompetitionPrices(competition),
        },
      ];
    case "Test Event":
      return [
        {
          id: "test_event",
          name: "Test Event",
          quantity: 1,
          price: getCompetitionPrices(competition),
        },
      ];
    default:
      return [
        {
          id: "default_item",
          name: "Default Item",
          quantity: 1,
          price: 0,
        },
      ];
  }
};

const taxObjects = [
  {
    name: "Service Fee",
    percentage: 3.3,
    type: "parallel",
  },
  {
    name: "Tax",
    percentage: 0.71,
    type: "cumulative",
  },
];

export const taxCounter = (initialTotal) => {
  let runningTotal = initialTotal;
  let totalTax = 0;

  const breakdown = taxObjects.map((taxObj) => {
    const base = taxObj.type === "parallel" ? initialTotal : runningTotal;
    const taxAmount = Math.ceil((base * taxObj.percentage) / 100);

    totalTax += taxAmount;
    runningTotal += taxAmount;

    return {
      name: taxObj.name,
      type: taxObj.type,
      percentage: taxObj.percentage,
      base,
      amount: taxAmount,
    };
  });

  return {
    initialTotal,
    tax: totalTax,
    total: runningTotal,
    breakdown,
  };
};

async function createPayment(competitionName, form) {
  const { name, email, phone, order_items } = form;

  const orderId = orderIdGenerator();
  const grossAmount = order_items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const taxProps = taxCounter(grossAmount);
  const order_items_with_tax = [
    ...order_items,
    ...taxProps.breakdown.map((item) => ({
      id: item.name,
      price: item.amount,
      quantity: 1,
      name: item.name,
    })),
  ];
  const totalAmount = taxProps.total;

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: totalAmount,
    },
    customer_details: {
      first_name: name,
      email,
      phone,
    },
    item_details: order_items_with_tax,
    credit_card: {
      secure: true,
    },
  };

  let snapRes = null;
  try {
    snapRes = await snap.createTransaction(parameter);
    if (!snapRes) {
      throw new Error("Failed to create transaction.");
    }
  } catch (error) {
    throw new Error("Failed to create transaction. Error: " + error);
  }

  const snapToken = snapRes.token;

  return { snapToken, orderId, totalAmount };
}

export const orderIdGenerator = () => {
  const eventCode = process.env.EVENT_CODE || "UNK";
  const date = new Date();

  const seed = date.getTime(); // Use timestamp as seed
  const randomAlphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  // Simple seeded random number generator (LCG)
  let seedValue = seed;
  const seededRandom = () => {
    seedValue = (seedValue * 9301 + 49297) % 233280;
    return seedValue / 233280;
  };

  const randomId = Array.from({ length: 12 }, () =>
    randomAlphaNumeric.charAt(Math.floor(seededRandom() * randomAlphaNumeric.length)),
  ).join("");

  const tempTitle = `${eventCode}${randomId}`;
  const sanitizedTitle = tempTitle.replace(/[^a-zA-Z0-9]/g, "");

  return sanitizedTitle;
};

export async function requestCreatePayment(formData) {
  try {
    let competition = formData.get("competition");
    let expense = 0;

    const order_items = getDefaultCompetitionOrderItems(competition);
    for (const item of order_items) {
      expense += item.price * item.quantity;
    }

    let grossAmount = 0;
    let orderId = null;
    let snapToken = null;

    const leaderBody = formData.get("teamLeader");
    const teamLeader = JSON.parse(leaderBody);
    const { namaLengkap, email, nomorHp } = teamLeader;

    if (expense > 0) {
      try {
        const {
          totalAmount: mtGross,
          orderId: mtOrderId,
          snapToken: mtSnap,
        } = await createPayment(competition, {
          name: namaLengkap,
          email: email,
          phone: nomorHp,
          order_items,
        });
        grossAmount = mtGross;
        orderId = mtOrderId;
        snapToken = mtSnap;
      } catch (error) {
        throw new Error("Failed to create payment. Error: " + error);
      }
    }

    return NextResponse.json(
      {
        message: "Success sent!",
        order_id: orderId,
        gross_amount: grossAmount,
        snap_token: snapToken,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create payment", error: error.message },
      { status: 500 },
    );
  }
}
