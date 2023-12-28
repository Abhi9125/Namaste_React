import { CDN_URL } from "../utility/constant";
// Import the useDispatch to write(Update) the store.
import { useDispatch } from "react-redux";
// Import the addItem where we store the items.
import { addItem } from "../utility/cartSlice";

// This component use for show all items in each category.
const ItemList = ({ itemsMenu }) => {
  console.log(itemsMenu);

  // Calling dispatch
  const dispatch = useDispatch();
  const handleAddItems = (addItemInCart) => {
    // console.log(addItemInCart);
    // Dispatch the action and update the slice with fix item "pizza"
    // dispatch(addItem("Pizza"));
    dispatch(addItem(addItemInCart));
  };

  return (
    <div>
      {itemsMenu.map((item) => {
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
                // we are calling the handleAddItems(item) here `item` is a object.
                onClick={() => handleAddItems(item)}
              >
                Add+
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
  );
};

export default ItemList;
