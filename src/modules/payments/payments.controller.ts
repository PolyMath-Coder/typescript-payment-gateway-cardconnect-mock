import { Request, Response } from "express";
import { PaymentService } from "./payments.service";

export class PaymentController {
  private service = new PaymentService();

  authorize = async (req: Request, res: Response) => {
    const result = await this.service.authorize(req.body);
    res.json(result);
  };

  capture = async (req: Request, res: Response) => {
    const result = await this.service.capture(req.body.transactionId);
    res.json(result);
  };

  refund = async (req: Request, res: Response) => {
    const result = await this.service.refund(req.body.transactionId);
    res.json(result);
  };
}
