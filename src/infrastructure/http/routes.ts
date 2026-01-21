import { Express } from "express";
import { PaymentController } from "../../modules/payments/payments.controller";

export function registerRoutes(app: Express) {
  const controller = new PaymentController();

  app.post("/payments/authorize", controller.authorize);
  app.post("/payments/capture", controller.capture);
  app.post("/payments/refund", controller.refund);
}
