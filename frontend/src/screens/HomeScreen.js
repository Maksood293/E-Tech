import React from "react";
import Product from "../components/Product";
import data from "../data";

function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
