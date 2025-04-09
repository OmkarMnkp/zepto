import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZeptoContext } from "../../context/ZeptoContext";
import CartContext from "../../context/CartContext";

const Detail = () => {
    const img2 = 'https://cdn.zeptonow.com/production/tr:w-64,ar-600-600,pr-true,f-auto,q-80/app/bank-icons/v2/841bec77-eb02-4a35-ba76-18ed1e6dfc85.png';
    const img3 = 'https://cdn.zeptonow.com/production/tr:w-64,ar-842-595,pr-true,f-auto,q-80/inventory/banner/c363f9b5-c88e-44a6-91f8-9aba7c338e48.png';
    const img4 = 'https://cdn.zeptonow.com/production/tr:w-64,ar-1000-1000,pr-true,f-auto,q-80/app/bank-icons/v2/a1688418-4528-491c-9636-10ac04ec15f5.png';
    const img5 = 'https://cdn.zeptonow.com/production/tr:w-64,ar-400-400,pr-true,f-auto,q-80/app/bank-icons/v2/73bb8e2e-7204-4aed-bee0-842a3e0105ef.png';

    const navigate = useNavigate();
    const { ID } = useParams();
    const { data } = useContext(ZeptoContext);

    const [productDetail, setProductDetail] = useState({});

    // usereducer

    const {cartItems , dispatch } = useContext(CartContext);

    // finditem in cart
    const cartItem = cartItems.find(item => item.id === productDetail.id);


    useEffect(() => {
        if (data.length > 0) {
            const foundProduct = data.find((pro) => pro.id == ID);
            setProductDetail(foundProduct);
        }
    }, [ID, data]);

    const HandleHome = () => {
        navigate('/home');
    };

    // add to cart

    const HandleAddToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: productDetail })
    }

    return (
        <div className="container mt-5 detail-container">
            {productDetail && Object.keys(productDetail).length > 0 ? (
                <div className="container col-xxl-8 px-4 py-5 border border-secondary rounded-3 shadow-sm">
                    <div className="row flex-lg-row-reverse align-items-center g-3 py-1">
                        <div className="col-10 col-sm-8 col-lg-6" >
                            <div style={{ marginLeft: '20px' }}>
                                <h1 className="display-5 fw-bold lh-1 mb-3">{productDetail.name}</h1>
                                <h4 className="text-success">₹{productDetail.price}</h4>
                                <p className="text-muted"><del>₹{productDetail.discount}</del></p>
                                <p className="lead">{productDetail.description}</p>
                                <p className="lead"><strong>Category:</strong> {productDetail.category}</p>

                                <div className="container-low" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <p className="fw-bold">Coupons and Offers</p>

                                    <div className="cont d-flex align-items-center gap-3 border p-2 rounded-3">
                                        <img style={{ height: '40px', width: '40px', borderRadius: '5px' }} src={img2} alt="AU Bank" />
                                        <p className="mb-0">Get 5% discount with AU Bank Credit Card</p>
                                    </div>

                                    <div className="cont d-flex align-items-center gap-3 border p-2 rounded-3">
                                        <img style={{ height: '40px', width: '40px', borderRadius: '5px' }} src={img3} alt="BHIM UPI" />
                                        <p className="mb-0">Get flat ₹25 discount with BHIM UPI</p>
                                    </div>

                                    <div className="cont d-flex align-items-center gap-3 border p-2 rounded-3">
                                        <img style={{ height: '40px', width: '40px', borderRadius: '5px' }} src={img4} alt="MobiKwik" />
                                        <p className="mb-0">Get flat ₹75 cashback using MobiKwik UPI handle</p>
                                    </div>

                                    <div className="cont d-flex align-items-center gap-3 border p-2 rounded-3">
                                        <img style={{ height: '40px', width: '40px', borderRadius: '5px' }} src={img5} alt="Amazon Pay" />
                                        <p className="mb-0">Get upto ₹25 cashback using Amazon Pay UPI</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 border rounded-3 p-3" style={{ borderColor: '#d3d3d3', height: '700px' }}>
                            <img
                                src={productDetail.image}
                                className="d-block mx-lg-auto img-fluid"
                                alt={productDetail.name}
                                width="700"
                                height="1500"
                                loading="lazy"
                            />

                            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
                                <button
                                    type="button"
                                    className="btn btn-danger me-md-2"
                                    onClick={HandleAddToCart}
                                    style={{ width: "140px", height: "40px" }}
                                >
                                    Add
                                </button>

                                <div className="px-4 py-1 me-md-2 d-flex flex-column align-items-start rounded mt-2">
                                    <h4 className="mb-1 me-2">₹{productDetail.price}</h4>
                                    <p className="text-50 grey mb-0"><del>₹{productDetail.discount}</del></p>
                                </div>
                            </div>

                            {/* Information section */}
                            <div className="mt-4 p-3 border rounded-3" style={{ backgroundColor: "#f9f9f9" }}>
                                <h5 className="fw-bold mb-3">Information</h5>

                                <div className="mb-3">
                                    <p className="text-muted fw-semibold mb-1">Disclaimer</p>
                                    <p className="mb-2" style={{ fontSize: "0.95rem" }}>
                                        All images are for representational purposes only. It is advise health and nutritional claconsl prices can be viewed on the page.
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <p className="text-muted fw-semibold mb-1">Customer Care Details</p>
                                    <p className="mb-2" style={{ fontSize: "0.95rem" }}>
                                        In case of any issue, contact us E-mail address: <a href="mailto:support@zeptonow.com">support@zeptonow.com</a>
                                    </p>
                                </div>

                                <div>
                                    <p className="text-muted fw-semibold mb-1">Seller Name</p>
                                    <p className="mb-0" style={{ fontSize: "0.95rem" }}>
                                        Geddit Convenience Private Limited
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default Detail;
