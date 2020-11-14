// feature 1
// test 1
import React from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';

import store from './store'
import { Provider } from 'react-redux';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cartItems: localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems"))
        : [],
    }
  }

  //Add product to Cart method
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice()

    let alreadyInCart = false

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++
        alreadyInCart = true
      }
    })

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }

    this.setState({ cartItems })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

  }

  // remove product from cart
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice()

    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id)
    })

    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)))
  }

  // create order object method
  createOrder = (order) => {
    alert("Need To Save Order For " + order.name)
  }

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">

          {/* ====================== Start header area ====================== */}
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          {/* ====================== End header area ====================== */}


          {/* ====================== Start Main area ====================== */}
          <main>
            <div className="content">
              <div className="main">
                <Filter></Filter>
                <Products addToCart={this.addToCart} />
              </div>
              <div className="sidebar">
                <Cart cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder} />
              </div>
            </div>
          </main>
          {/* ====================== End Main area ====================== */}


          {/* ====================== Start footer area ====================== */}
          <footer>
            All Right is reserved.
        </footer>
          {/* ====================== End footer area ====================== */}

        </div>
      </Provider>
    );
  }
}

export default App;
