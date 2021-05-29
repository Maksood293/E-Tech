import data from "./data";
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">
            E-Tech
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <div className="card" key={product._id}>
                <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href="product.html">
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      {" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>
                    <span>
                      {" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>
                    <span>
                      {" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>
                    <span>
                      {" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>
                    <span>
                      {" "}
                      <i className="fa fa-star"></i>{" "}
                    </span>
                  </div>
                  <div className="price">$120</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
