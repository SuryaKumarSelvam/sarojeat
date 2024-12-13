import React from 'react'
import './Product.css';
import { productsList } from '../../data';


const Product = () => {
  const products = productsList
  return (
<>
    <div
      className="full-width section-with-padding background-base"
      data-background="base"
    >
      <div className="max-width">
        <div className="heading">
          <div>
            <h2>Our Products</h2>
          </div>
          <div>
            <a href="#">
              <span className="underline-animation">View all</span>
            </a>
          </div>
        </div>
      </div>
      <div className="section-grid with-heading">
        <div className="grid grid-bottom-large">
          {
            products.map((product, index) => {
   
            const randomClass = Math.random() > 0.5 ? 'large' : 'normal';

             return (
                    <a
                    href="#"
                    className={`block block-product ${randomClass}`}
                    style={{ order: 0 }}
                    key={index}
                    >
                      <div className="block-top has-secondary-image">
                        <img
                          src={product.imgSrc}
                          alt={product.name}
                          width={840}
                          height={1075}
                          data-srcfull={product.imgSrc}
                          loading="lazy"
                        />
                        <img
                          src={product.secondaryImage}
                          alt={product.name}
                          width={840}
                          height={1018}
                          data-srcfull={product.secondaryImage}
                          loading="lazy"
                        />
                        <div className="block-icon"></div>
                      </div>
                      <div className="block-bottom flex flex-v-top">
                        <div className="block-text">
                          <h3 className="barracuda">
                            <span className="product-name underline-animation">
                              {product.name}
                            </span>
                          </h3>
                          <div className="block-price">
                            <p className="price">
                              <span className="visually-hidden visually-hidden--inline">
                                Regular price
                              </span>
                              <span className="price-regular font-demibold">
                                {product.price}
                              </span>
                              <span className="visually-hidden visually-hidden--inline">
                                Sale price
                              </span>
                              <span className="price-sale">
                                <s />
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="block-icon">
                          <span
                            className="icon icon-small-plus icon-add-to-cart use-product-lightbox"
                            title="Open quick view"
                            tabIndex={-1}
                            role="button"
                            data-product="orange-nankhatai"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-plus"
                            >
                              <line x1={12} y1={5} x2={12} y2={19} />
                              <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                      );
                    })
                  }
                          </div>
                        </div>
                      </div>
                  </>
  
                    )
                  }

export default Product