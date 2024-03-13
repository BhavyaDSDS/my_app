import React, { useState } from "react";
import { ITEMS, ITEM_TYPES, SEARCH_DATA } from "../JsonData";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import Subpage from "./Subpage";

function MainOnline({ setData }) {
  const [showItems, setShowItems] = useState("Bags");
  const [showCardItem, setShowCardItem] = useState("All Bags");
  const [itemCount, setItemCount] = useState(null);
  const [itemBackgroundColor, setItemBackgroundColor] = useState("Bags");
  const [itemUnderline, setItemUndeline] = useState("All Bags");
  const [addCartItem, setAddCartItem] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [dropDownData, setDropDownData] = useState("");
  const navigate = useNavigate();
  // console.log("ITEMSITEMSITEMS", ITEMS.Bags.navData);

  // console.log("showCardItemshowCardItem", showCardItem, showItems);

  function Scopevariable() {
    let present = true;

    if (present) {
      var numberVariable = 3;
      const stringVariable = "String";
      console.log("numberVariable", numberVariable);
      console.log("stringVariable", stringVariable);
    }
  }
  // console.log("datadatadata", SEARCH_DATA)

  console.log("itemCountitemCount", addCartItem);

  // Scopevariable();
  const handleClickTitle = (titleData) => {
    console.log("Clicked title:", titleData); // Check if title is received correctly

    setDropDownData(titleData);
    setSearchData(titleData);
  };
  return (
    // <div className="main">
    //   <div className="text_color_white">TANN TRIM</div>
    //   <div className="items_align">
    //     {Object.keys(ITEMS).map((item) => {
    //       return (
    //         <div
    //           className="text_color_white cursore_pointer"
    //           onClick={() => setShowItems(item)}
    //         >
    //           {item}
    //         </div>
    //       );
    //     })}
    //   </div>

    //   <div className="items_align">
    //     {ITEMS[showItems]?.map((itemsArray) => {
    //       console.log("itemsArrayitemsArray", itemsArray);
    //       return (
    //         <div className="items_align">
    //           <div>
    //             <Icon
    //               icon={itemsArray.icon}
    //               width="50"
    //               height="50"
    //               style={{ color: "white" }}
    //             />
    //             <div className="text_color_white">{itemsArray.item}</div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="main">
      {/* <Link to={"/subpage"} element={<Subpage addCartItem={addCartItem}/>}> */}
      <div
        style={{ width: "100%" }}
        onClick={() => {
          navigate("/subpage");
        }}
      >
        {itemCount >= 1 && (
          <div className="cart_badge">{`${itemCount}Items added`}</div>
        )}
      </div>
      {/* </Link> */}
      <div className="items_align" style={{ marginBottom: "50px" }}>
        {Object.keys(ITEMS).map((item) => {
          // console.log("itemitemitemitem", itemBackgroundColor, item, itemBackgroundColor == item);
          // console.log("itemitemitemitem", item)
          return (
            <div
              className="text_color_white cursore_pointer "
              style={{
                backgroundColor:
                  itemBackgroundColor === item ? "blueviolet" : "",
              }}
              onClick={() => {
                setItemBackgroundColor(item);

                setShowItems(item);
                if (item == "Bags") {
                  setShowCardItem("All Bags");
                  setItemUndeline("All Bags");
                }
                if (item == "Travel") {
                  setShowCardItem("Travel1");
                  setItemUndeline("Travel1");
                }
                if (item == "Accesories") {
                  setShowCardItem("Accesories1");
                  setItemUndeline("Accesories1");
                }
                if (item == "Gifting") {
                  setShowCardItem("Gifting1");
                  setItemUndeline("Gifting1");
                }
                if (item == "Jewelery") {
                  setShowCardItem("Jewelery1");
                  setItemUndeline("Jewelery1");
                }
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="items_align" style={{ marginBottom: "50px" }}>
        {ITEMS[showItems].navData.map((itemData) => {
          return (
            <>
              <div
                className="cursore_pointer align_center"
                style={{
                  textDecoration:
                    itemUnderline === itemData.item ? "underline white" : null,
                }}
                onClick={() => {
                  setShowCardItem(itemData.item);
                  setItemUndeline(itemData.item);
                  console.log(
                    "showItemsshowItemsshowItems",
                    itemData.item,
                    itemUnderline,
                    itemUnderline == itemData.item
                  );
                }}
              >
                <Icon
                  icon={itemData.icon}
                  width="32"
                  height="32"
                  style={{ color: "white" }}
                />
                <div className="text_color_white">{itemData.item}</div>
              </div>
            </>
          );
        })}
      </div>

      <div className="items_align">
        {ITEMS[showItems].dataDetail[showCardItem].map((item) => {
          console.log("itemrouter", item);
          return (
            <>
              <div
                className="show_item_card cursore_pointer"
                onClick={() => {
                  setItemCount(itemCount + 1);
                  setData((prevItems) => [...prevItems, item]);
                }}
              >
                {" "}
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={item.img}
                  alt={item.alternativeName}
                />
                <div>{item.itemName}</div>
              </div>
            </>
          );
        })}
      </div>

      <div>
        <input
          id="searchInput"
          placeholder="Search here......"
          type="text"
          onChange={(event) => {
            setDropDownData(event.target.value);
            setSearchData(event.target.value);
          }}
        />
      </div>
      <div className="template_card">
        {SEARCH_DATA.filter((data) => {
          if (searchData === "") {
            return data;
            console.log("datadata", data.title);
          } else if (
            data.title.toLowerCase().includes(searchData.toLowerCase())
          ) {
            return data;
            // console.log("datadata", data.title)
          }
        }).map((data) => {
          return (
            <div
              className="cursore_pointer"
              onClick={() => handleClickTitle(data.title)}
            >
              {data.title}
            </div>
          );
        })}
        {}
      </div>
    </div>
  );
}
export default MainOnline;
