import React, { Component } from 'react'

// import format currency sign $ before price
import FormatCurrency from '../Util'

// import fade animation for porducts
import Fade from 'react-reveal/Fade'

// import react-modal for modal view product
import Modal from 'react-modal'

// import Zoom animation for modal
import Zoom from 'react-reveal/Zoom'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '30%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null
        }
    }


    openModal = (product) => {
        this.setState({ product })
    }

    closeModal = () => {
        this.setState({ product: null })
    }

    render(props) {
        const { product } = this.state
        return (
            <div>
                <Fade bottom cascade>
                    <ul className="products">
                        {this.props.products.map(product => (
                            <li key={product._id}>
                                <div className="product">
                                    <a className="product-links" onClick={() => this.openModal(product)} href={"#" + product._id}>
                                        <img src={product.image} alt={product.title} />
                                        <p>{product.title}</p>
                                    </a>
                                    <div className="product-price">
                                        <div>{FormatCurrency(product.price)}</div>
                                        <button onClick={() => this.props.addToCart(product)} className="button primary">Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
                {product && (
                    <Modal
                        isOpen={true}
                        onRequestClose={this.closeModal} style={customStyles} >
                        <Zoom>
                            <button className="close-modal" onClick={this.closeModal}>x</button>
                            <div className="product-details">
                                <img src={product.image} alt={product.title} />
                                <div className="product-details-description">
                                    <h1>{product.title}</h1>
                                    <p>{product.description}</p>
                                    <p>Available Sizes {" "}
                                        {product.availableSizes.map(x => (
                                            <span>{" "}
                                                <button className="button">{x}</button>
                                            </span>
                                        ))}
                                    </p>
                                    <div className="product-price">
                                        <div>
                                            {FormatCurrency(product.price)}
                                        </div>
                                        <button className="button primary" onClick={() => {
                                            this.props.addToCart(product)
                                            this.closeModal()
                                        }}>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )}
            </div>
        )
    }
}
