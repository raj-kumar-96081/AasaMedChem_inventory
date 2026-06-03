import { AppError } from "./app-error";

export class InventoryError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}