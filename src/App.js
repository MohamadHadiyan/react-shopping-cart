// feature 1
// test 1
import React from 'react';
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
