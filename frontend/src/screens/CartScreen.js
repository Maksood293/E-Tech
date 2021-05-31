import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

function CartScreen(props) {
  const productId = props.match.params.id;
  //  to find qty of the given url pass by add to cart Function
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1> Cart Screen</h1>
      <p>
        ADD TO CART : ProductId: {productId} Qty:{qty}{" "}
      </p>
    </div>
  );
}

export default CartScreen;
