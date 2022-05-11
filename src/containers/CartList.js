import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { minus, selectCart, clear } from "../store/cartSlice";
import Cart from "../components/Cart";

function CartList(props) {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  const keysGoods = Object.keys(cart);

  let clickChanges = (event) => {
    event.preventDefault();
    let cl = event.target;
    if (cl.classList.contains("button-d"))
      dispatch(clear(cl.getAttribute("as")));
    if (cl.classList.contains("button-m"))
      dispatch(minus(cl.getAttribute("as")));
  };

  let aught = (function finSum(sum = [0]) {
    keysGoods.map((item) => sum.push(cart[item] * goodsObj[item]["cost"]));
    if (!sum) {
      return "zero";
    } else return sum.reduce((item, ind) => item + ind);
  })();

  return (
    <div onClick={clickChanges}>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>amount</th>
            <th>sum</th>
            <th colSpan="2">PRESSBUTTON</th>
          </tr>
          {keysGoods.map((item) => (
            <Cart
              title={goodsObj[item]["title"]}
              cost={goodsObj[item]["cost"]}
              amount={cart[item]}
              img={goodsObj[item]["image"]}
              key={goodsObj[item]["title"]}
              articul={goodsObj[item]["articul"]}
            />
          ))}
        </tbody>
      </table>
      <h5>
        TOTAL:{aught}
        {}
      </h5>
    </div>
  );
}

export default CartList;
