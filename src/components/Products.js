import React, { Component } from 'react'
import FormatCurrency from '../Util'

export default class Products extends Component {
    render(props) {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a className="product-links" href={"#" + product._id}>
                                    <img src={product.image} alt={product.title} />
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{FormatCurrency(product.price)}</div>
                                    <button className="button primary">Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
