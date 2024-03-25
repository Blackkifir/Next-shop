import { ICard } from '@/redux/slices/interfaces/ICatalogCards';

export interface ICartCard {
  id: number,
  cartImage: string,
  title: string,
  price: number,
  cartName: string,
  card: ICard,

  onClickDeleteCartCards: (basket: ICard) => void;
}
