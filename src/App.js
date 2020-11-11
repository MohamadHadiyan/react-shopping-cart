// feature 1
// test 1
import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';

//import costom component
import data from './data.json'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: ""
    }
  }

  //Add to Cart method
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

  }


  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice()

    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id)
    })
  }


  // Sort products method

  sortProducts = (event) => {
    //impl
    const sort = event.target.value
    console.log(sort)

    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === "lowest" ? ((a.price > b.price) ? 1 : -1) :
          sort === "highest" ? ((a.price < b.price) ? 1 : -1) :
            ((a._id > b._id) ? 1 : -1)
      ))
    }))
  }

  // Filter products method

  filterProducts = (event) => {
    //impl
    console.log(event.target.value)

    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products })
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          product => product.availableSizes.indexOf(event.target.value) >= 0)
      })
    }
  }


  render() {
    return (
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
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products} addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
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
    );
  }
}

export default App;
