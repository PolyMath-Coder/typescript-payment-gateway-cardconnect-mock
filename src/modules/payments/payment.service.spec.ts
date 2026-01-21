import { PaymentService } from "./payments.service";

describe("PaymentService", () => {
  it("authorizes a payment", async () => {
    const service = new PaymentService();
    const result = await service.authorize({
      amount: 1000,
      currency: "USD",
      cardToken: "tok_test",
    });

    expect(result.status).toBe("AUTHORIZED");
  });
});
