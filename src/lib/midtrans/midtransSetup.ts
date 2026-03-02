import { MidtransCallbacks } from "./midtrans";

interface CallbackInterface {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showLoading: (message: string) => void;
  dismissLoading: () => void;
}

const createCallbacks = ({ showSuccess, showError }: CallbackInterface): MidtransCallbacks => ({
  onSuccess: () => {
    window.location.reload();
  },
  onPending: () => {
    showSuccess("Payment initiated. Please complete it to finalize your registration.");
    window.location.reload();
  },
  onError: () => {
    showError("Payment failed or was cancelled. Please try again.");
  },
  onClose: () => {
    showError("Payment popup closed. No transaction was made.");
    window.location.reload();
  },
});

export const initiatePayment = ({
  token,
  snapInitialized,
  callbacks,
}: {
  token: string;
  snapInitialized: boolean;
  callbacks: CallbackInterface;
}) => {
  callbacks.dismissLoading();
  if (!window.snap || !snapInitialized) {
    callbacks.showError("Snap not ready");
    return;
  }
  window.snap.pay(token, createCallbacks(callbacks));
};
