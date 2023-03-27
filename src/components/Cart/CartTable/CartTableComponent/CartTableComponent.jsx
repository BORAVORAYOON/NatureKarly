import ListArrow from '../../../../assets/icons/Icon/common/Direction=Down.svg';

import classes from './CartTableComponent.module.css';
import { AdditionalInput } from '@/components/Input/Checkbox/AdditionalInput';
import CartProductList from '../../CartProductList/CartProductList';

export const CartTableCheckbox = function () {
  return (
    <div className={classes.CartTableCheckbox}>
      <AdditionalInput id={'allCheck'} type={'checkbox'} />
      <label htmlFor={'allCheck'}>전체선택(3/3)</label>
      <button>선택삭제</button>
    </div>
  );
};

export const CartTableListItem = function ({ children }) {
  
  return (
    <ul className={classes.CartTableList}>
      <li className={classes.CartTableListItem}>
        {children}
        <img alt="" className={classes.ListArrow} src={ListArrow} />
      </li>
      <li>
        <CartProductList price={5000}/>
      </li>
    </ul>
  );
};
