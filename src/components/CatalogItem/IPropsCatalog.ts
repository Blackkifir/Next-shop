import { IPropsItems } from '@/redux/slices/interfaces/IPropsItems';

export interface IPropsCatalog {
  id: number,
  title: string,
  price: number,
  categoryName: string,
  categoryImage: string,
  item: IPropsItems,

  onClickAddCart: (cart: IPropsItems) => void;
}
