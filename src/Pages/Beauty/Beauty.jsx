import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";


const Beauty = () => {

    const { data } = useContext(ZeptoContext);
    const unbeat = 'https://cdn.zeptonow.com/production/tr:w-720,ar-720-140,pr-true,f-auto,q-80/inventory/banner/cc1440ec-4e2c-4e31-9f1c-18e61bfd759f.png';
    const shop = 'https://cdn.zeptonow.com/production/tr:w-720,ar-720-100,pr-true,f-auto,q-80/inventory/banner/54aa8d12-2e1f-4e26-8a26-30c80b5b325b.png';
    const copy = 'https://cdn.zeptonow.com/production/tr:w-720,ar-720-140,pr-true,f-auto,q-80/inventory/banner/4b0819b8-30ab-4323-ac23-6d0dc7bea98c.png';
    const pout = 'https://cdn.zeptonow.com/production/tr:w-720,ar-720-140,pr-true,f-auto,q-80/inventory/banner/b1bc1079-3481-42ac-b62c-9ab02489dc69.png';

    const lips = 'https://cdn.zeptonow.com/production/tr:w-160,ar-192-220,pr-true,f-auto,q-80/inventory/banner/74f7420f-57dc-4802-87ff-87f834f432ee.png';
    const eyes = 'https://cdn.zeptonow.com/production/tr:w-160,ar-192-220,pr-true,f-auto,q-80/inventory/banner/429951ab-204f-4d68-8e4d-cf0bc9cc05c6.png';
    const face = 'https://cdn.zeptonow.com/production/tr:w-160,ar-192-220,pr-true,f-auto,q-80/inventory/banner/6c91c8ef-4787-4f18-bdf6-2a90f052bf74.png';
    const nails = 'https://cdn.zeptonow.com/production/tr:w-160,ar-192-220,pr-true,f-auto,q-80/inventory/banner/3e27a2b8-8773-4247-b885-eeae0faa5197.png';
    const tools = 'https://cdn.zeptonow.com/production/tr:w-160,ar-192-220,pr-true,f-auto,q-80/inventory/banner/42f6373b-19b7-4843-9a6e-daed49c8b8b7.png';
    const gift = 'https://cdn.zeptonow.com/production/tr:w-160,ar-192-220,pr-true,f-auto,q-80/inventory/banner/b80069b8-46e8-4fc4-aaec-218885a70652.png';
    return (
        <div>

            <div className="container-fluid">
                <img style={{ marginLeft: '100px', height: "200px" }} src={unbeat} alt="" />
                <div className="product-container">
                    {
                        data.length > 0 ? (
                            data.slice(0, 6).map((item, index) => (
                                <div key={index} className="card">
                                    <span className="off">80% Off</span>
                                    <img src={item.image} className="card-img-top" alt={item.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.category}</p>
                                        <div className=" price d-flex gap-5">
                                            <div>
                                                <p className="card-text">₹{item.discountedPrice}</p>

                                                <p className="dis card-text">₹{item.discount}</p>
                                            </div>
                                            <Link to={`/detail/${item.id}`} type="button" style={{ width: '70px' }} class="btn btn-outline-danger" >
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No data found</p>
                        )
                    }
                </div>
            </div>

            <div className="container">

                <img style={{marginLeft:'180px'}} src={shop} alt="" />
                <div className="d-flex gap-3 ">
                    <img src={lips} alt="" />
                    <img src={eyes} alt="" />
                    <img src={face} alt="" />
                    <img src={nails} alt="" />
                    <img src={tools} alt="" />
                    <img src={gift} alt="" />
                </div>
            </div>

            <div className="container-fluid">
                <img style={{ marginLeft: '100px', height: "200px" }} src={copy} alt="" />
                <div className="product-container">
                    {
                        data.length > 0 ? (
                            data.slice(0, 6).map((item, index) => (
                                <div key={index} className="card">
                                    <span className="off">80% Off</span>
                                    <img src={item.image} className="card-img-top" alt={item.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.category}</p>
                                        <div className=" price d-flex gap-5">
                                            <div>
                                                <p className="card-text">₹{item.discountedPrice}</p>

                                                <p className="dis card-text">₹{item.discount}</p>
                                            </div>
                                            <Link to={`/detail/${item.id}`} type="button" style={{ width: '70px' }} class="btn btn-outline-danger" >
                                                Add
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No data found</p>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
export default Beauty;