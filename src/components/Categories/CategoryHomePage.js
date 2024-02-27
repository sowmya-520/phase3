import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchListOfCategories } from "./CategorySlice.jsx";
import { useSelector } from "react-redux";
import "./CategoryHomePage.css";

const CategoryHomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(fetchListOfCategories());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="heading">Browse By Category</h1>
      <div className="grid">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/${category.type}`}
            className="category-link"
          >
            <div key={category.id} className="category-container">
              <img
                src={category.imageurl}
                alt={category.type}
                className="category-image"
              />
              <p className="category-name">{category.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryHomePage;
