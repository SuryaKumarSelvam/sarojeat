import React, { useState } from "react";
import "./Product.css";
import { productsList } from "../../data";
import { Link } from "react-router-dom";
import {TextField,FormControl,InputLabel ,Select ,MenuItem,Box } from '@mui/material';

const Product = ({ enableFilter = false, enablePagination = false, isHomePage = false }) => {
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("az");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 


  const filteredProducts = productsList
    .filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

  
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "az") return a.name.localeCompare(b.name);
    if (sortOrder === "za") return b.name.localeCompare(a.name);
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

 
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = enablePagination
    ? sortedProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : sortedProducts;

  return (
    <div className="full-width section-with-padding background-base">
      <div className="max-width">
        {/* Heading */}
        <div className="heading">
          <div>
            <h2>{isHomePage ? "Featured Products" : "Our Products"}</h2>
          </div>
          {isHomePage && (
            <div>
              <a href="#">
                <Link to='/products'><span className="underline-animation">View all</span></Link>
              </a>
            </div>
          )}
        </div>

        {!isHomePage && enableFilter && (
          <div className="filter-section">
            <div className="price-filter">
              <label>Price Range:</label>
              <input
                type="number"
                placeholder="Min"
                // value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
              />
              <input
                type="number"
                placeholder="Max"
                // value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
              />
            </div>

            {/* Search Input (Center) */}
           <div className="filter-input-container">
          <TextField
            type="text"
            variant="outlined"
            label="Search for a product..."
            size="small"
            placeholder="Search for a product..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            fullWidth
          />
        </div>

            {/* Sort By Dropdown (Right) */}
           <div className="filter-select-container">
                <FormControl variant="outlined" size="small" style={{ minWidth: 150 }}>
                  <InputLabel id="sort-select-label">Sort by</InputLabel>
                  <Select
                    labelId="sort-select-label"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    label="Sort by"
                  >
                    <MenuItem value="az">A-Z</MenuItem>
                    <MenuItem value="za">Z-A</MenuItem>
                    <MenuItem value="low-high">Price (Low-High)</MenuItem>
                    <MenuItem value="high-low">Price (High-Low)</MenuItem>
                  </Select>
                </FormControl>
              </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="section-grid with-heading">
        <div className="grid grid-bottom-large">
          {paginatedProducts.map((product, index) => {
            const productClass = isHomePage
              ? Math.random() > 0.5
                ? "large"
                : "normal"
              : "normal";

            return (
              <Link
                to={`/product/${product.id}/${product.name}`}
                className={`block block-product ${productClass}`}
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
                </div>
                <div className="block-bottom flex flex-v-top">
                  <div className="block-text">
                    <h3 className="barracuda">
                      <span className="product-name underline-animation">
                        {product.name}
                      </span>
                    </h3>
                    <div className="block-price">
                      <p className="price">₹ {product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      {!isHomePage && enablePagination && totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
