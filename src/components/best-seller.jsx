import React from 'react'
import "./best-seller.css"


export const Bestseller = () => {
    return (
        <section className="best-sellers-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-heading text-center mb-5">Best Sellers</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="https://via.placeholder.com/300x200" alt="Product 1" className="img-fluid" />
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">Product Title</h3>
                                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="https://via.placeholder.com/300x200" alt="Product 1" className="img-fluid" />
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">Product Title</h3>
                                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="https://via.placeholder.com/300x200" alt="Product 1" className="img-fluid" />
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">Product Title</h3>
                                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="https://via.placeholder.com/300x200" alt="Product 1" className="img-fluid" />
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">Product Title</h3>
                                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="https://via.placeholder.com/300x200" alt="Product 1" className="img-fluid" />
                            </div>
                            <div className="product-details">
                                <h3 className="product-title">Product Title</h3>
                                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    {/* Add more product cards */}
                </div>
            </div>
        </section>
    )
}
