import { productItemsMock } from '../../../mock/productsMockData';
import { ProductItem } from '../productItem/ProductItem';

export const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-8 xl:px-44">
      {productItemsMock.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
};
