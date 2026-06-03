import { ProductRepository }
from "../repositories/product.repository";

export class ProductService {
  constructor(
    private productRepository =
      new ProductRepository()
  ) {}

  async getProducts() {
    return this.productRepository.findMany();
  }
}