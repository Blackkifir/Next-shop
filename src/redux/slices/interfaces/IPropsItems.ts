export interface IPropsAll {
  isLoading: boolean,
  error: Error | null,
}

export interface IPropsItems {
  id: number,
  title: string,
  price: number,
  description: string,
  images: string[],
  category: { id: number, name: string, image: string, }
}
