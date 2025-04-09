import React from "react";
import enjoy from '../../assets/enjoy.svg';
import place from '../../assets/place.svg';
import order from '../../assets/place-order.svg';
const ThreeCard =()=>{
    return(
        <div class="container-fluid card-container mt-5" >
                <h3 className="text-center">How It Works</h3>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div className="card foot-card shadow-sm text-center">
                            <img src={order} alt="" />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h3 className="text-center">Open in app</h3>
                                <p className="card-text">
                                    Choose from over 7000 products across groceries, fresh fruits & veggies,
                                    meat, pet care, beauty items & more.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card foot-card shadow-sm text-center">
                            <img src={place} alt="" />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h3 className="text-center">Place an order</h3>
                                <p className="card-text">
                                    Add your favourite items to the cart & avail the best offers
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card foot-card shadow-sm text-center">
                            <img src={enjoy} alt="" />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h3 className="text-center">Get Free Delivery</h3>
                                <p className="card-text">
                                    Experience lighting-fast speed & get all your items delivered in 10 minutes
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}
export default ThreeCard;