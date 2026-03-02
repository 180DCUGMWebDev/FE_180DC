export const connectSS = async (data, target, flush) => {
  await fetch("/api/website/submissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data, target: target }),
  });
  flush();
};
