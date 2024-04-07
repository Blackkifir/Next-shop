export interface ICatalogCards {
  items: ICard[],
  searchValue: string,
  isLoading: boolean,
  isDisable: boolean,
  error?: null | Error,
}

export interface ICard {
  id: number,
  title: string,
  price: number,
  description: string,
  images: string[],
  categoryImage: string;
  category: { id: number, name: string, image: string },
  quantity: number,
  basePrice: number,
  isDisable: boolean,
}
