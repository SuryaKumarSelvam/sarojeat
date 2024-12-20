import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaPlus, FaMinus } from "react-icons/fa";
import './ProductDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { productsList } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../slices/cartSlice';

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({}); 
    const { id, productName } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    useEffect(() => {
        
        const data = productsList.find((item) => item.id === parseInt(id)); // Ensure `id` matches type
        if (data) {
            setProduct(data);
        } else {
            console.error('Product not found!');
        }
    }, [id]);



    const addTocart = ()=>{
        dispatch(addCart({
            id:product.id,
            name:product.name,
            quantity:quantity,
            price:product.price,
            img:product.imgSrc
        }))
      navigate('/cart');
    }




    return (
        <div className="product-page">
            {/* Left Section: Image Slider */}
            <div className="left-section">
                {product?.images?.length > 0 ? (
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="image-slider"
                    >
                        {product.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`Slide ${index}`} className="slider-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p>Loading images...</p>
                )}
            </div>

            {/* Right Section: Product Details */}
            <div className="right-section">
                <h2 className="product-title">{product?.name || 'Loading...'}</h2>
                <p className="productDetail-price">₹ {product?.price || 'N/A'}</p>
                <p className="product-description">{product?.description || 'No description available.'}</p>

                {/* Collapsible Tabs */}
                {product?.details?.length > 0 &&
                    product.details.map((detail, index) => (
                        <div key={index} className={`tab ${activeTab === index ? "open" : ""}`}>
                            <div className="tab-header" onClick={() => toggleTab(index)}>
                                <span>{detail.title}</span>
                                {activeTab === index ? <FaMinus /> : <FaPlus />}
                            </div>
                            <div className="tab-content">{detail.content}</div>
                        </div>
                    ))}

                {/* Box Selector */}
                {product?.boxSizes?.length > 0 && (
                    <div className="box-selector">
                        <label>Box Size:</label>
                        <select>
                            {product.boxSizes.map((size, index) => (
                                <option key={index} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Quantity Selector and Add to Cart */}
                <div className="cart-controls">
                    <div className="quantity-selector">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <button className="add-to-cart" onClick={addTocart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
