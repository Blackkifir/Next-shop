export interface IPropsAll {
  items: IPropsItems[],
  isLoading: boolean,
  isDisable: boolean,
  error?: Error | null,
}

export interface IPropsItems {
  id: number,
  title: string,
  price: number,
  description: string,
  images: string[],
  categoryImage: string;
  category: { id: number, name: string, image: string, }
}
