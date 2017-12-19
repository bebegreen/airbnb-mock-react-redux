import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './bookingForm.css';

const Summary = props => {
  const { price, nights } = props.children;
  return (
    <div styleName="price-totals">
      <table>
        <tbody>
          <tr styleName="item-row">
            <td>
              ${price} X {nights} night
            </td>
            <td styleName="price-totals-table-right">${price * nights}</td>
          </tr>

          <tr styleName="price-totals-total">
            <td>Total</td>
            <td styleName="price-totals-table-right">${price * nights}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CSSModules(Summary, styles);
