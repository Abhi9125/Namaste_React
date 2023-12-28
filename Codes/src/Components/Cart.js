import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utility/cartSlice";
// import { CDN_URL } from "../utility/constant";
import { CDN_URL } from "../utility/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  /***
   * The difference between these two ways of using useSelector is that the
   *  first one returns only the cart items from the store, while the second
   *  one returns the whole store object and then accesses the cart items as
   *  a property. The first one is more efficient and specific, as it only
   * re-renders the component when the cart items change. The second one re-renders
   * the component whenever any part of the store changes, which might be unnecessary
   *  and costly.
   *
   * const store = useSelector((store) => store)
   * const cartItems = store.cart.items
   *
   */
  const dispatch = useDispatch();
  const handleClearCart = () => {
    // useDispatch(clearCart);
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      <div className="m-2 p-2 text-center">
        <h1 className="font-bold">Cart</h1>
        <button
          className="m-2 p-1 text-center font-bold bg-black text-white rounded-md"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 text-md  mx-auto my-2 bg-gray-200 shadow-md rounded-md">
        {cartItems.map((item) => {
          return (
            <div className="flex justify-between" key={item?.card?.info?.id}>
              <div className="w-9/12 px-2 py-2 border-b-2  border-gray-300 ">
                <div className="flex">
                  <span className="font-semibold text-base">
                    {item?.card?.info?.name}
                  </span>
                  <span className="pl-2 font-semibold">
                    {item?.card?.info?.price
                      ? item?.card?.info?.price / 100
                      : item?.card?.info?.defaultPrice / 100}
                  </span>
                  ₹
                </div>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div>
              <div className="w-2/12 m-1 border-b-2  border-gray-300">
                <button
                  className="absolute bg-black text-white rounded-md ml-1 "
                  /**when we click on the add+ button it call the handleAddItem that add the item in the slick by using appStore. */
                  onClick={() => handleRemoveItem(item.card.info.id)}
                >
                  Remove-
                </button>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="rounded-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
