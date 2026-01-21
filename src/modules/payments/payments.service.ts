import { PaymentGateway } from "./payments.gateway";
import { AuthorizePaymentInput } from "../payments/payment.types";
import { MockCardConnectGateway } from "../payments/cardconnect.mock";

export class PaymentService {
  private gateway: PaymentGateway;

  constructor(gateway: PaymentGateway = new MockCardConnectGateway()) {
    this.gateway = gateway;
  }

  authorize(input: AuthorizePaymentInput) {
    return this.gateway.authorize(input);
  }

  capture(transactionId: string) {
    return this.gateway.capture(transactionId);
  }

  refund(transactionId: string) {
    return this.gateway.refund(transactionId);
  }
}
