export interface ICatalogCards {
  items: ICard[],
  isLoading: boolean,
  isDisable: boolean,
  error?: Error | null,
}

export interface ICard {
  id: number,
  title: string,
  price: number,
  description: string,
  images: string[],
  categoryImage: string;
  category: { id: number, name: string, image: string }
}
