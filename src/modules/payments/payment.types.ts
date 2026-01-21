export interface AuthorizePaymentInput {
  amount: number;
  currency: string;
  cardToken: string;
}

export interface PaymentResult {
  status: "AUTHORIZED" | "CAPTURED" | "REFUNDED";
  transactionId: string;
}
