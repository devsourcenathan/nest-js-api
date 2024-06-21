import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductService } from 'src/services/ProductService';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() productData: { name: string; price: number }) {
    const product = await this.productService.createProduct(productData);
    return product;
  }

  @Get()
  async getAllProducts() {
    const products = await this.productService.getAllProducts();
    return products;
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    const product = await this.productService.getProductById(id);
    return product;
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() productData: { name: string; price: number },
  ) {
    const updatedProduct = await this.productService.updateProduct(
      id,
      productData,
    );
    return updatedProduct;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    await this.productService.deleteProduct(id);
    return { message: 'Product deleted successfully' };
  }
}
