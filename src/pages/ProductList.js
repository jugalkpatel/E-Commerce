import React, { useReducer, useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { ProductCard } from "../components/ProductCard";
import filterIcon from "../assets/svgs/filter.svg";
import { productsData } from "../services/ProductData.js";
import "./ProductList.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { first } from "lodash";
import { label } from "../utils/labels";



const ProductList = () => {

    const localProductData = productsData;
    const [visibility, setVisibility] = useState("hidden");


    const filterReducer = (state, { type, payload }) => {
        switch (type) {
            case label.LOW_TO_HIGH:
                return { ...state, byLowest: payload.flag, byHighest: "" };
            case label.HIGH_TO_LOW:
                return { ...state, byLowest: "", byHighest: payload.flag };
            case label.EXCLUDE_OUT_OF_STOCK:
                return { ...state, byAvailability: state.byAvailability ? "" : payload.flag };
            case label.RESET_FILTERS:
                return { ...state, byLowest: "", byHighest: "", byAvailability: "" };
            default:
                throw new Error("Action is not available");
                break;
        }
        return state;
    }


    const [filter, dispatchFilter] = useReducer(filterReducer, {
        byLowest: "",
        byHighest: "",
        byAvailability: "",
    });

    const getSortedProducts = (list, filterFlags) => {
        const filteredList = Object.keys(filterFlags).reduce((acc, item) => {
            switch (filterFlags[item]) {
                case label.LOW_TO_HIGH:
                    return acc.sort((firstItem, secondItem) => {
                        return parseInt(firstItem.price) - parseInt(secondItem.price)
                    });
                case label.HIGH_TO_LOW:
                    return acc.sort((firstItem, secondItem) => {
                        return parseInt(secondItem.price) - parseInt(firstItem.price)
                    });
                case label.EXCLUDE_OUT_OF_STOCK:
                    return acc.filter((item) => item.availability);
                default:
                    return acc;
            }
        }, list);
        return filteredList;
    }

    const filteredProducts = getSortedProducts(localProductData, filter);

    console.log({ filter });
    return (
        <div className="product-list__container">
            <div className="product-list">

                <FilterBar setFilter={dispatchFilter} />
                <span className="product-list__results">{filteredProducts.length} results found</span>
                {
                    filteredProducts.map((product) => {
                        return <ProductCard {...product} key={product.id} />
                    })
                }
            </div>
            <Sidebar status={{ visibility, setVisibility }} setFilter={dispatchFilter} />
            <button className="product-list__filterbtn"
                onClick={() => setVisibility((prevStatus) => {
                    return prevStatus === "hidden" ? "visible" : "hidden";
                })}
                style={{ visibility: visibility === "hidden" ? "visible" : "hidden" }}
            >
                <span className="product-list__filterbtn__icon">
                    <img src={filterIcon} alt="filter icon" />
                </span>
                <span className="product-list__filterbtn__text">
                    FILTER
                </span>
            </button>
        </div>
    )
}
export { ProductList };