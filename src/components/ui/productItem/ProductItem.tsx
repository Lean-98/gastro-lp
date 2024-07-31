import React from 'react';
import { Button } from '../button/Button';
import { ProductCounterItem } from '../productCounterItem/ProductCounterItem';
import { ProductItemInferface } from '../../../interfaces/productItem.interface';

export const ProductItem: React.FC<ProductItemInferface> = ({
  id,
  discountPrice,
  imageUrl,
  prepTime,
  price,
  serves,
  title,
}) => {
  return (
    <div className="flex items-center flex-col px-10" key={id}>
      <img
        className="w-[225px] h-[225px] md:w-[350px] md:h-[350px] mb-8"
        src={imageUrl}
      />
      <h4 className="font-semibold text-orange-700">{title}</h4>
      <p className="text-slate-700">
        Time: {prepTime} | <span>Serves: {serves}</span>
      </p>
      <ProductCounterItem />
      <span className="font-semibold text-2xl text-orange-500 my-6">
        ${price}{' '}
        <del className="font-medium text-gray-400">{discountPrice}</del>
      </span>
      <Button className="w-7/12 md:w-10/12 text-center mb-8" text="Order Now" />
    </div>
  );
};
