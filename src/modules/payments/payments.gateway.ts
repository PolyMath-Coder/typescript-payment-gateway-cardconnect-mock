import { AuthorizePaymentInput, PaymentResult } from "./payment.types";

export interface PaymentGateway {
  authorize(input: AuthorizePaymentInput): Promise<PaymentResult>;
  capture(transactionId: string): Promise<PaymentResult>;
  refund(transactionId: string): Promise<PaymentResult>;
}
