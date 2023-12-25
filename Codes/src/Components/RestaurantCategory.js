import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";

// This component use for showing all the category of the restaurant.
// Inisialy it is uncontrolled component but know it controlled by its parent.
const RestaurantCategory = ({ data, showAccordion, setShowIndex }) => {
  const toggleAccordian = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Accordian Items Header */}
      <div className="text-md  mx-1 my-2 bg-gray-200 shadow-md rounded-md">
        {/* When we click the Accordian heading it will call the setShowIndex and update the index and again rerender it */}
        <div className="flex justify-between" onClick={toggleAccordian}>
          <span className="font-bold px-1 py-2">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="px-1 py-2">
            <FontAwesomeIcon icon={faAnglesDown} />
          </span>
        </div>
        {/* Accordian Items Body */}
        {/* Calling ItemList component for showing all the item in each category */}
        {showAccordion && <ItemList itemsMenu={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;

/****
 * Logic how uplifting work
 * 1. we remove the child state
 * 2. We pass state of accordion from parent
 * 3. Inisialty we pass showAccordion as `0` index
 * 4. Also pass setShowIndex as a props
 * 5. when we click on Accordion heading it call the setShowIndex and update the index of showIndex and rerender it category again with new showIndex.
 *
 */
