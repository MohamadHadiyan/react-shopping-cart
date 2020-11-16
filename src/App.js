import React from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store'
import { Provider } from 'react-redux';
class App extends React.Component {

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
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
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
