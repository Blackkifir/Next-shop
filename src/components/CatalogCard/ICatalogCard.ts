import { ICard } from '@/redux/slices/interfaces/ICatalogCards';

export interface ICatalogCard {
  id: number,
  title: string,
  price: number,
  categoryName: string,
  categoryImage: string,
  item: ICard,
}
