export interface Cart {
  items: Array<CartItem>
}

export interface CartItem {
  name: string,
  image: string,
  price: number,
  quantity: number,
  id: string,
}
