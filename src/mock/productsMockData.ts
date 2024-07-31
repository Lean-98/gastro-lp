import type { ProductItemInferface } from '../interfaces/productItem.interface';
import image1 from '../assets/01.jpg';
import image2 from '../assets/02.jpg';
import image3 from '../assets/03.png';

export const productItemsMock: ProductItemInferface[] = [
  {
    id: 1,
    title: 'Rainbow Vegetable Sandwich',
    prepTime: '15 - 20 Minutes',
    serves: 1,
    price: 12.99,
    discountPrice: 19.99,
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Vegetarian Burger',
    prepTime: '30 - 45 Minutes',
    serves: 1,
    price: 14.99,
    discountPrice: 18.99,
    imageUrl: image2,
  },
  {
    id: 3,
    title: 'Raspberry Stuffed French Toast',
    prepTime: '10 - 15 Minutes ',
    serves: 1,
    price: 12.99,
    discountPrice: 15.99,
    imageUrl: image3,
  },
  {
    id: 4,
    title: 'Vegetarian Burger',
    prepTime: '30 - 45 Minutes',
    serves: 1,
    price: 12.99,
    discountPrice: 16.99,
    imageUrl: image2,
  },
  {
    id: 5,
    title: 'Raspberry Stuffed French Toast',
    prepTime: '10 - 15 Minutes ',
    serves: 1,
    price: 12.99,
    discountPrice: 18.99,
    imageUrl: image3,
  },
  {
    id: 6,
    title: 'Rainbow Vegetable Sandwich',
    prepTime: '15 - 20 Minutes',
    serves: 1,
    price: 11.99,
    discountPrice: 18.49,
    imageUrl: image1,
  },
];
