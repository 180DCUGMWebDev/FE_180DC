import type { AxiosInstance } from "axios";
import { MidtransCallbacks } from "./midtrans";

declare global {
  interface Window {
    axios: AxiosInstance;
    snap?: {
      pay: (snapToken: string, callbacks: MidtransCallbacks) => void;
    };
  }
}

export {};
