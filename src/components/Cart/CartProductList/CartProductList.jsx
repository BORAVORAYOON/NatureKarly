import { AdditionalInput } from '@/components/Input/Checkbox/AdditionalInput';
import Counter from '@/components/Counter/Counter';
import { useState } from 'react';

import classes from './CartProductList.module.css'

import TangTang from '@/assets/tangtang/detail_banner.jpg'
import { Button } from '@/components';

const CartProductList = function ({price}) {
  const [count, setCount] = useState(1);

  const onDecrease = function () {
    setCount(prevCount => prevCount - 1)
  }

  const onIncrease = function () {
    setCount(prevCount => prevCount + 1)
  }
  const amountQuantity = price * count;
  const totalPrice = amountQuantity
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <li className={classes.CartProductList}>
      <div className={classes.ProductInfoTable}>
        <AdditionalInput />
        <img src={TangTang} alt="" className={classes.ProductImage}/>
        <p>[풀무원] 탱탱쫄면 (4개입)</p>
      </div>
      <div className={classes.ProductPriceTable}>
        <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
        <p className={classes.ProductPrice}>{totalPrice}원</p>
        <Button className={classes.DeleteButton}/>
      </div>
    </li>
  );
}

export default CartProductList;