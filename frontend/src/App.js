import { BrowserRouter, Link, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">
              E-Tech
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/product/:id" exact component={ProductScreen}></Route>
          <Route path="/cart/:id?" exact component={CartScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>

          <Route path="/" exact component={HomeScreen}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
