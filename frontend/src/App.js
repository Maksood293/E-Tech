import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              E-Tech
            </a>
          </div>
          <div>
            <a href="/Cart">Cart</a>
            <a href="/SignIn">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" exact component={ProductScreen}></Route>
          <Route path="/" exact component={HomeScreen}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
