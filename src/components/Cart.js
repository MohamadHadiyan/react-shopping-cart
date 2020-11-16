import React, { Component } from 'react'
import FormatCurrency from '../Util'
// import fade animation for add product to Cart
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckOut: false
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createOrder = (e) => {
        e.preventDefault()

        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
        }

        this.props.createOrder(order)
    }

    render() {

        const { cartItems } = this.props

        return (
            <div>
                {
                    cartItems.length === 0 ? (
                        <div className="cart cart-header">Cart Is Empty</div>
                    )
                        :
                        (
                            <div className="cart cart-header">
                                You have {cartItems.length} product in the cart {" "}
                            </div>
                        )
                }
                <div className="cart">
                    <Fade left cascade={true}>
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {FormatCurrency(item.price)} X {item.count}{" "}
                                            <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !== 0 && (
                    <div>
                        <div className="cart">
                            <Fade top cascade={true}>
                                <div className="total">
                                    <div>
                                        Total: {" "}
                                        {FormatCurrency(
                                            cartItems.reduce((a, c) => a + (c.price * c.count), 0))
                                        }
                                    </div>
                                    <button
                                        onClick={() => {
                                            this.setState({ showCheckOut: true })
                                        }}
                                        className="button primary">proceed</button>
                                </div>
                            </Fade>
                        </div>
                        {/* Checkout form */}
                        {this.state.showCheckOut && (
                            <Fade right cascade={true}>
                                <div className="cart">
                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <label>Name</label>
                                                <input type="text" name="name"
                                                    required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                                <label>Email</label>
                                                <input type="email" name="email"
                                                    required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input type="text" name="address"
                                                    required onChange={this.handleInput} />
                                            </li>
                                            <li>
                                                <button className="button">Checkout</button>
                                            </li>

                                        </ul>

                                    </form>
                                </div>
                            </Fade>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default connect((state) => ({
    cartItems: state.cart.cartItems
}),
    { removeFromCart }
)(Cart)
