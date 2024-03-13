import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Addproduct = () => {
  const { products } = useSelector((s) => s);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const addProduct = () => {
    let obj = {
      id: products.length ? products[products.length-1].id +1 :1,
      img,
      name,
      price,
      category,
      description,
    };
    dispatch({ type: "ADD_PRODUCT", payload: obj });
  };
  console.log(products, "pro");
  return (
    <div id="addproduct">
      <div className="container">
        <div className="addproduct">
          <input
            onChange={(e) => setImg(e.target.value)}
            type="email"
            className="email"
            placeholder="upload photo "
          />
          <div className="addproduct--nav">
            <input
              onChange={(e) => setName(e.target.value)}
              className="name"
              type="text"
              placeholder="Product name "
            />
            <div className="addproduct--nav__in">
              <input
                onChange={(e) => setCategory(e.target.value)}
                className="category"
                type="text"
                placeholder="Category"
              />
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="price"
                type="text"
                placeholder="Price"
              />
            </div>
            <div className="addproduct--nav__in--btn">
              <input
                onChange={(e) => setDescription(e.target.value)}
                className="description"
                type="text"
                placeholder="Product description..."
              />
              <button onClick={() => addProduct()}>save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
