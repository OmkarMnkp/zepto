import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";

const Baby = () => {
    const { data } = useContext(ZeptoContext);

    const img1 = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-248,pr-true,f-auto,q-80/inventory/banner/bf3b5f65-b059-4e1f-84f2-ed34b8fd17d4.png';
    const img2 = 'https://cdn.zeptonow.com/production/tr:w-1080,ar-1080-210,pr-true,f-auto,q-80/inventory/banner/8ecd8d1d-8fac-4627-b404-64f7f19ad2f8.png';
    const img3 = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-280,pr-true,f-auto,q-80/inventory/banner/d2ba23bb-6182-4913-bd33-dc59364e04b1.png';
    const img4 = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-280,pr-true,f-auto,q-80/inventory/banner/2a8d938e-ce30-447a-bcd9-47fd994a2668.png';

    const dipers = 'https://cdn.zeptonow.com/production/tr:w-120,ar-400-416,pr-true,f-auto,q-80/inventory/banner/c2044413-33c4-4478-80ba-fb9fc4c74504.png';
    const wipers = 'https://cdn.zeptonow.com/production/tr:w-120,ar-400-416,pr-true,f-auto,q-80/inventory/banner/4191375a-4227-4982-8fa3-d89e25242f02.png';
    const bath = 'https://cdn.zeptonow.com/production/tr:w-120,ar-400-416,pr-true,f-auto,q-80/inventory/banner/3b1a47d0-0990-48f7-88a7-ba141f005f1f.png';
    const oral = 'https://cdn.zeptonow.com/production/tr:w-120,ar-400-416,pr-true,f-auto,q-80/inventory/banner/caa5bda8-b746-4ad7-bc79-1f93f938e539.png';
    const food = 'https://cdn.zeptonow.com/production/tr:w-120,ar-400-416,pr-true,f-auto,q-80/inventory/banner/cca8a707-b046-429c-b003-f14987bbd298.png';
    const baby = 'https://cdn.zeptonow.com/production/tr:w-120,ar-400-416,pr-true,f-auto,q-80/inventory/banner/3730d406-32cd-47c6-8036-a762210ce54a.png';
    const clean = 'https://cdn.zeptonow.com/production/tr:w-120,ar-400-416,pr-true,f-auto,q-80/inventory/banner/649755a1-a39d-4828-ba1a-7b2b57da0b08.png';
    const feed = 'https://cdn.zeptonow.com/production/tr:w-120,ar-400-416,pr-true,f-auto,q-80/inventory/banner/3faf0015-3163-46cd-93f2-d2cf883dc871.png';

    return (
        <div>
            <div className="container-fluid">
                <img src={img1} alt="" />
                <div className="container d-flex gap-3">
                    <img src={dipers} alt="" />
                    <img src={wipers} alt="" />
                    <img src={bath} alt="" />
                    <img src={oral} alt="" />
                    <img src={food} alt="" />
                    <img src={baby} alt="" />
                    <img src={feed} alt="" />
                    <img src={clean} alt="" />
                </div>
            </div>

            <div className="container-fluid">
                <img style={{ marginLeft: '100px' }} src={img2} alt="" />
                <div className="product-container">
                    {data.length > 0 ? (
                        data.slice(0, 6).map((item) => (
                            <div key={item.id} className="card">
                                <span className="off">80% Off</span>
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.category}</p>
                                    <div className="price d-flex gap-5">
                                        <div>
                                            <p className="card-text">₹{item.discountedPrice}</p>
                                            <p className="dis card-text">₹{item.discount}</p>
                                        </div>
                                        <Link to={`/detail/${item.id}`} className="btn btn-outline-danger" style={{ width: '70px' }}>
                                            Add
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            </div>

            <div className="container-fluid">
                <img src={img4} alt="" />
                <div className="container d-flex gap-3">
                    <img src={dipers} alt="" />
                    <img src={wipers} alt="" />
                    <img src={bath} alt="" />
                    <img src={oral} alt="" />
                    <img src={food} alt="" />
                    <img src={baby} alt="" />
                    <img src={feed} alt="" />
                    <img src={clean} alt="" />
                </div>
            </div>

            <div className="container-fluid">
                <img style={{ marginLeft: '10px' }} src={img3} alt="" />
                <div className="product-container">
                    {data.length > 0 ? (
                        data.slice(0, 6).map((item) => (
                            <div key={item.id} className="card">
                                <span className="off">80% Off</span>
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.category}</p>
                                    <div className="price d-flex gap-5">
                                        <div>
                                            <p className="card-text">₹{item.discountedPrice}</p>
                                            <p className="dis card-text">₹{item.discount}</p>
                                        </div>
                                        <Link to={`/detail/${item.id}`} className="btn btn-outline-danger" style={{ width: '70px' }}>
                                            Add
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Baby;
