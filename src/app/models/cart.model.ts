export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  products: {
    readonly productId: number;
    readonly quantity: number;
  }[];
}
