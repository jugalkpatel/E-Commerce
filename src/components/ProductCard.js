import React from "react";
import "./ProductCard.css";
import closeBtn from "../assets/svgs/close-btn.svg";
import bookmark from "../assets/svgs/bookmark.svg";
import rating from "../assets/svgs/rating.svg";
import arrow from "../assets/svgs/right-arrow.svg";
const ProductCard = () => {
    const products = [
        {
            id: 1,
            name: "NVIDIA GEFORCE RTX 3060 Ti",
            imageUrl: "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3060-ti.png",
            specifications: {
                cooling_system: "fan",
                clock_speed: 1.67,
                memory_size: 8
            },
            price: 800
        },
        {
            id: 2,
            name: "NVIDIA GEFORCE RTX 3060 Ti",
            imageUrl: "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3060-ti.png",
            specifications: {
                cooling_system: "fan",
                clock_speed: 1.67,
                memory_size: 8
            },
            price: 800
        },
        {
            id: 3,
            name: "NVIDIA GEFORCE RTX 3060 Ti",
            imageUrl: "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3060-ti.png",
            specifications: {
                cooling_system: "fan",
                clock_speed: 1.67,
                memory_size: 8
            },
            price: 800
        },
        {
            id: 4,
            name: "NVIDIA GEFORCE RTX 3060 Ti",
            imageUrl: "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3060-ti.png",
            specifications: {
                cooling_system: "fan",
                clock_speed: 1.67,
                memory_size: 8
            },
            price: 800
        }


    ]
    return (
        <div class="product-container">
            <a href="#" class="product-info">
                <span class="product__img__container">
                    <button class="close-btn">
                        <img src={closeBtn} alt="close_btn" />
                    </button>
                    <img
                        class="product-img product-info__img"
                        src="https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3060-ti.png"
                        alt="product"
                    />
                    <button class="wish-btn">
                        <img src={bookmark} alt="wish_btn" />
                    </button>
                </span>
                <span class="product-info__text">
                    NVIDIA GEFORCE RTX 3060 Ti
                </span>
                <span class="product-info__specifications">
                    <ul className="specifications__list">
                        <li className="specifications__list__item">
                            <img className="specifications__arrow" src={arrow} alt="right_arrow" />
                            Cooling System: Fan
                        </li>
                        <li className="specifications__list__item">
                            <img className="specifications__arrow" src={arrow} alt="right_arrow" />
                            Boost Clock Speed: 1.67 GHz
                        </li>
                        <li className="specifications__list__item">
                            <img className="specifications__arrow" src={arrow} alt="right_arrow" />
                            GPU Memory Size: 8GB
                        </li>
                    </ul>
                </span>

                <span class="price-tag">Rs. 250</span>
            </a>
            <button class="primary-btn">ADD TO CART</button>
            {/* <div class="overlay-div">
               <button class="close-btn">
                   <img src={closeBtn} alt="close-btn" />
               </button>
               <span class="overlay-text"> OUT OF STOCK </span>
           </div>  */}
        </div>
    )
}

export { ProductCard }