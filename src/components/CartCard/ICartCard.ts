import { ICard } from '@/redux/slices/interfaces/ICatalogCards';

export interface ICartCard {
  id: number,
  cartImage: string,
  title: string,
  price: number,
  cartName: string,
  card: ICard,
  quantity: number,

  onClickDeleteCartCards: (basket: ICard) => void;
  onClickCartMinus: (id: number) => void;
  onClickCartPlus: (id: number) => void;
}
