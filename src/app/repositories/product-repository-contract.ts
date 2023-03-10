import { Product } from "../entities/product.entity";

export abstract class ProductRepositoryContract {
    abstract findMany(): Promise<Product[]>
    abstract create(product: Product): Promise<Product>
    abstract update(id: number, product: Partial<Product>): Promise<Product>;
    abstract findOne(id: number): Promise<Product>;
    abstract delete(id: number): Promise<void>;
}