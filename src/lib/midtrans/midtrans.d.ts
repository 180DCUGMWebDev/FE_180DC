export type MidtransErrorDetail = {
  message: string;
  status_code: string;
  error_messages?: string[];
};

export type MidtransTransactionResultBase = {
  order_id: string;
  transaction_status:
    | "settlement"
    | "pending"
    | "deny"
    | "expire"
    | "cancel"
    | "failure"
    | "refund"
    | "partial_refund";
  transaction_id: string;
  payment_type: string;
  gross_amount: string;
  fraud_status: "accept" | "deny" | "challenge";
  status_message: string;
  status_code: string;
};

export interface MidtransCallbacks {
  onSuccess: (result: MidtransTransactionResultBase) => void;
  onPending: (result: MidtransTransactionResultBase) => void;
  onError: (error: MidtransErrorDetail | Error | unknown) => void;
  onClose: () => void;
}

export type PendingTransactionResponseItem = {
  snap_token: string;
  order_id: string;
};
