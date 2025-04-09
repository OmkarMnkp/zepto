import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";


const Toys = () => {

    const { data } = useContext(ZeptoContext);

    const img1 = 'https://cdn.zeptonow.com/production/tr:w-721,ar-721-86,pr-true,f-auto,q-80/inventory/banner/2149b1b4-1ccf-4878-9a80-26196d8f703f.png';
    const img2 = 'https://cdn.zeptonow.com/production/tr:w-720,ar-720-150,pr-true,f-auto,q-80/inventory/banner/35ea9df5-9b5b-4b3e-85ba-8eb29ba187f6.png';
    const img3 = 'https://cdn.zeptonow.com/production/tr:w-720,ar-720-86,pr-true,f-auto,q-80/inventory/banner/19ca38fe-4b17-4f4f-980f-cbccf0182fef.png';
    const img4 = 'https://cdn.zeptonow.com/production/tr:w-1080,ar-1080-540,pr-true,f-auto,q-80/inventory/banner/9043872f-3cc1-4f8f-b049-24b32ad45b10.png';
    const cricket = 'https://cdn.zeptonow.com/production/tr:w-120,ar-208-245,pr-true,f-auto,q-80/inventory/banner/9920872a-636a-491f-965e-3f6ab0c38fd2.png';
    const badmintion = 'https://cdn.zeptonow.com/production/tr:w-120,ar-208-245,pr-true,f-auto,q-80/inventory/banner/bd85d33e-2746-4f93-917f-1ec1338f6ab1.png';
    const football = 'https://cdn.zeptonow.com/production/tr:w-120,ar-208-245,pr-true,f-auto,q-80/inventory/banner/267034d0-9903-4254-a728-2448b4eba164.png';
    const gym = 'https://cdn.zeptonow.com/production/tr:w-120,ar-208-245,pr-true,f-auto,q-80/inventory/banner/68a5a3e8-904a-4b2f-a27e-d373ad4b9ed1.png';
    const swim = 'https://cdn.zeptonow.com/production/tr:w-120,ar-208-245,pr-true,f-auto,q-80/inventory/banner/4b166003-014e-490d-a7d4-888cd3a706fa.png';
    const indoor = 'https://cdn.zeptonow.com/production/tr:w-120,ar-208-245,pr-true,f-auto,q-80/inventory/banner/0d5892b8-8154-4918-aed8-439fdb9674db.png';

    return (
        <div>


            <div className="container-fluid " >
                <img src={img1} alt="" />
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

            <div className="container-fluid " >
                <img src={img2} alt="" />
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
            <div className="container-fluid " >
                <img src={img3} alt="" />
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

            <div>
                <div className="container-fluid d-flex gap-4">
                    <img src={cricket} alt="" />
                    <img src={badmintion} alt="" />
                    <img src={gym} alt="" />
                    <img src={swim} alt="" />
                    <img src={football} alt="" />
                    <img src={indoor} alt="" />
                </div>
                <div className="product-container">
                {
                    data.length > 0 ? (
                        data.slice(0,6).map((item, index) => (
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

            <div className="container-fluid" >
                <img src={img4} style={{ width: '1200px', marginLeft: '20px' }} alt="" />

            </div>
        </div>
    )
}
export default Toys;