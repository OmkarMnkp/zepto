import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import '../../App.css';
import { Link } from "react-router-dom";

const Cafe = () => {
    const { data } = useContext(ZeptoContext);

    const coffee = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/a9a4e615-c8aa-42c9-bf08-f4c8614168b3.png';
    const breakfast = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/21062416-36f9-450d-aad0-dee47154fccc.png';
    const chai = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/e8009b77-79cf-4801-9ef3-de5b5cb6af1f.png';
    const Sandwitch = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/dc161f7f-5018-4ab5-a6d1-4f92e89e9654.png';
    const dessert = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/6998d6df-bfc1-4506-978c-58104395cabf.png';
    const desi = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/9de2fb1d-1063-49c9-a180-7f0fff25508c.png';
    const samosa = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/c798236e-cdf5-43bd-a32d-8f9b03a5e0a6.png';
    const pizza = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/9ad41396-ad0e-4b90-9b28-c6dcba9a94c1.png';
    const snack = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/53be9bb7-e6ad-4365-ab17-381ec1243159.png';
    const basked = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/0ae43cb2-ea63-4b09-8286-ffe6c7db2fa7.png';
    const meals = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/01c1836a-8317-40c0-a93d-e8f73e7c77bc.png';
    const bread = 'https://cdn.zeptonow.com/production/tr:w-160,ar-332-412,pr-true,f-auto,q-80/inventory/banner/cab8374a-78a2-4e3e-9149-94ff8e21b485.png';
    const pop = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-184,pr-true,f-auto,q-80/inventory/banner/440c0a7c-3ad5-4300-8197-d99666da4861.png';
    const breakf = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-192,pr-true,f-auto,q-80/inventory/banner/40f06f20-0b9e-4160-ba3e-f4ca6c011fe6.png';
    const treat = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-192,pr-true,f-auto,q-80/inventory/banner/7382f643-09b2-47eb-b2fc-1c558c755d6d.png';
    const chaii = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-200,pr-true,f-auto,q-80/inventory/banner/86314c1e-582b-4f1a-bf23-2db5fce947f5.png';
    return (
        <div>
            <div className="container-fluid">
                <h1 className="" style={{ fontSize: '60px' }}>What's On My Mind?</h1>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="best d-flex gap-2 flex-wrap justify-content-center">
                                <img src={coffee} alt="Slide 1" className="img-fluid " style={{ height: '230px', width: '200px' }} />
                                <img src={breakfast} alt="Slide 2" className="img-fluid" style={{ height: '230px', width: '200px' }} />
                                <img src={chai} alt="Slide 3" className="img-fluid" style={{ height: '230px', width: '200px' }} />
                                <img src={Sandwitch} alt="Slide 4" className="img-fluid" style={{ height: '230px', width: '200px' }} />
                                <img src={dessert} alt="Slide 5" className="img-fluid" style={{ height: '230px', width: '200px' }} />
                                <img src={desi} alt="Slide 6" className="img-fluid" style={{ height: '230px', width: '200px' }} />
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex best">
                                {/* <img src={samosa} alt="Slide 7" />
                                <img src={pizza} alt="Slide 8" />
                                <img src={snack} alt="Slide 9" />
                                <img src={basked} alt="Slide 10" />
                                <img src={meals} alt="Slide 11" />
                                <img src={bread} alt="Slide 12" /> */}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container-fluid">
                <img src={pop} alt="" />
                <div className="d-flex justify-content-evenly flex-wrap">
                    {data.length > 0 ? (
                        data.slice(0, 6).map((item, index) => (
                            <div key={index} className="card col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{width:'190px'}}>
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
                                        <Link to={`/detail/${item.id}`} type="button" style={{ width: '70px' }} class="btn btn-outline-danger" >
                                            Add
                                        </Link>                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            </div>

            <div className="container-fluid">
                <img src={breakf} alt="" />
                <div className="d-flex justify-content-evenly flex-wrap">
                    {data.length > 0 ? (
                        data.slice(0, 6).map((item, index) => (
                            <div key={index} className="card col-12 col-sm-6 col-md-4 col-lg-3 mb-4"style={{width:'190px'}}>
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
                                        <Link to={`/detail/${item.id}`} type="button" style={{ width: '70px' }} class="btn btn-outline-danger" >
                                            Add
                                        </Link>                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            </div>

            <div className="container-fluid">
                <img src={treat} alt="" />
                <div className="d-flex justify-content-evenly flex-wrap">
                    {data.length > 0 ? (
                        data.slice(0, 6).map((item, index) => (
                            <div key={index} className="card col-12 col-sm-6 col-md-4 col-lg-3 mb-4"style={{width:'190px'}}>
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
                                        <Link to={`/detail/${item.id}`} type="button" style={{ width: '70px' }} class="btn btn-outline-danger" >
                                            Add
                                        </Link>                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            </div>

            <div className="container-fluid">
                <img src={chaii} alt="" />
                <div className="d-flex justify-content-evenly flex-wrap">
                    {data.length > 0 ? (
                        data.slice(0, 6).map((item, index) => (
                            <div key={index} className="card col-12 col-sm-6 col-md-4 col-lg-3 mb-4"style={{width:'190px'}}>
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
                                        <Link to={`/detail/${item.id}`} type="button" style={{ width: '70px' }} class="btn btn-outline-danger" >
                                            Add
                                        </Link>                                    </div>
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

export default Cafe;
