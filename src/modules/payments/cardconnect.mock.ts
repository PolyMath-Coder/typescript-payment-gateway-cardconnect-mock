import { PaymentGateway } from "../payments/payments.gateway";
import {
  AuthorizePaymentInput,
  PaymentResult,
} from "../payments/payment.types";
import { randomUUID } from "crypto";

export class MockCardConnectGateway implements PaymentGateway {
  async authorize(_: AuthorizePaymentInput): Promise<PaymentResult> {
    return { status: "AUTHORIZED", transactionId: randomUUID() };
  }

  async capture(_: string): Promise<PaymentResult> {
    return { status: "CAPTURED", transactionId: randomUUID() };
  }

  async refund(_: string): Promise<PaymentResult> {
    return { status: "REFUNDED", transactionId: randomUUID() };
  }
}
