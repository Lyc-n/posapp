export type ID = string;

export interface Money {
  amount: number;
  currency: string;
}

export interface Product {
  id: ID;
  name: string;
  price: Money;
}
