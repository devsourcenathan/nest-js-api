import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createProduct(productData: { name: string; price: number }) {
    return await this.prisma.product.create({
      data: productData,
    });
  }

  async getAllProducts() {
    return await this.prisma.product.findMany();
  }

  async getProductById(id: number) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async updateProduct(
    id: number,
    productData: { name: string; price: number },
  ) {
    return await this.prisma.product.update({
      where: { id },
      data: productData,
    });
  }

  async deleteProduct(id: number) {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
