// feature 1
// test 1
import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';

//import costom component
import data from './data.json'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }

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
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              Cart Items
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
