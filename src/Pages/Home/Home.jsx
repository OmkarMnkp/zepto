import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";


const Home = () => {

    const { data } = useContext(ZeptoContext);
    
    const home = 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-480,pr-true,f-auto,q-80/inventory/banner/b4e54c37-1e59-4cb8-94ed-2175bbbf44db.png';
    const bath = 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-480,pr-true,f-auto,q-80/inventory/banner/bd2df243-94b0-4acf-bf1d-c8e1cc7fe0ca.png';
    const pooja = 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-480,pr-true,f-auto,q-80/inventory/banner/3d1ab563-00d9-4dd5-8291-53f4be2692a1.png';
    const party = 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-481,pr-true,f-auto,q-80/inventory/banner/c2d16f9f-0c0a-4555-8f30-6aa4b33e46f4.png';
    const clean = 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-481,pr-true,f-auto,q-80/inventory/banner/02e568d6-e797-4681-ba9d-cb5f7b1f8b9e.png';
    const tissue = 'https://cdn.zeptonow.com/production/tr:w-120,ar-292-480,pr-true,f-auto,q-80/inventory/banner/46a16652-e572-4417-9c71-ff4fc1854cc7.png';
    const newlaunch = 'https://cdn.zeptonow.com/production/tr:w-1080,ar-1080-270,pr-true,f-auto,q-80/inventory/banner/6f373687-11fb-4074-9ef3-be480a81db48.png';
    const unbeat = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1445-361,pr-true,f-auto,q-80/inventory/banner/52f0977e-5575-4261-9685-754fc8ebcfce.png';
    const lowest = 'https://cdn.zeptonow.com/production/tr:w-720,ar-720-196,pr-true,f-auto,q-80/inventory/banner/663da9d1-f5fd-4cdb-b560-1e75e9e0bca9.png';
    const bestsellers = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1444-393,pr-true,f-auto,q-80/inventory/banner/38fa93ca-1382-48d0-ab52-e99b9c591d5f.png';


    const cleaning = 'https://cdn.zeptonow.com/production/tr:w-72,ar-96-98,pr-true,f-auto,q-80/inventory/banner/1713e98f-d08e-439e-bc4d-897d2704cbf4.png';
    const partyy = 'https://cdn.zeptonow.com/production/tr:w-72,ar-96-96,pr-true,f-auto,q-80/inventory/banner/4b5a617e-6cc9-4b61-af5c-66277ceab78e.png';
    const auto = ' https://cdn.zeptonow.com/production/tr:w-72,ar-96-96,pr-true,f-auto,q-80/inventory/banner/ad808d20-c3e7-4ed2-8c56-5e176077c194.png'
    const pooja2 = 'https://cdn.zeptonow.com/production/tr:w-72,ar-96-98,pr-true,f-auto,q-80/inventory/banner/63cdfee2-371c-473f-9ee3-353fcb2b4fc9.png';
    const tissue2 = 'https://cdn.zeptonow.com/production/tr:w-72,ar-103-103,pr-true,f-auto,q-80/inventory/banner/add3a3ba-db72-4a86-a6ed-af2a09383e4f.png';
    const home2 = 'https://cdn.zeptonow.com/production/tr:w-72,ar-96-102,pr-true,f-auto,q-80/inventory/banner/cabfd2fd-1bd7-457b-9b36-a50bf504d2bb.png';
    const festive = 'https://cdn.zeptonow.com/production/tr:w-72,ar-96-96,pr-true,f-auto,q-80/inventory/banner/9ed58876-3419-41fc-aec8-0bdf655cddaf.png';
    const bath2 = 'https://cdn.zeptonow.com/production/tr:w-72,ar-96-96,pr-true,f-auto,q-80/inventory/banner/0e100f0e-8795-41ff-9a38-c60fcb947dcb.png';
    const bend = 'https://cdn.zeptonow.com/production/tr:w-72,ar-96-96,pr-true,f-auto,q-80/inventory/banner/cb3704c3-ba22-4118-b4db-29a9f1555d3d.png';

    return (
        <div>


            <div className="container-fluid">
                <div className="d-flex gap-3">
                    <img src={home} alt="" />
                    <img src={bath} alt="" />
                    <img src={pooja} alt="" />
                    <img src={party} alt="" />
                    <img src={clean} alt="" />
                    <img src={tissue} alt="" />

                </div>
            </div>

            <div className="container-fluid card2">
                <img style={{ marginLeft: '100px' }} src={newlaunch} alt="" />
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

            <div className="container-fluid card3">
                <img src={unbeat} alt="" />
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

            <div className="container-fluid card4">
                <img style={{ marginLeft: '300px' }} src={lowest} alt="" />
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

            <div className="container-fluid card4">
                <img src={bestsellers} alt="" />
                <div className="categorie-home" style={{ display: 'flex', alignItems: 'start', gap: '13px', justifyContent: 'center' }} >
                    <div className="nav-container " style={{display:'flex', alignItems:'start'}}>

                        <Link to='/all' className="nav-item d-flex flex-column" href="./all">
                            <img src={cleaning} alt="" />
                            <span>Cleaning aid</span>
                        </Link>

                        <Link to='/cafe' className="nav-item d-flex flex-column" href="./cafe">
                            <img src={pooja2} alt="" />
                            <span>Pooja Essentials</span>
                        </Link>
                        <Link to='/home' className="nav-item d-flex flex-column" href="./home">
                            <img src={tissue2} alt="" />
                            <span>tissues</span>
                        </Link>
                        <Link to='/toys' className="nav-item d-flex flex-column" href="./toys">
                            <img src={home2} alt="" />
                            <span>Home Utility</span>
                        </Link>
                        <Link to='/fresh' className="nav-item d-flex flex-column" href="./fresh">
                            <img src={festive} alt="" />
                            <span>Festive need</span>
                        </Link>
                        <Link to='/electronics' className="nav-item d-flex flex-column" href="./electronics">
                            <img src={bath2} alt="" />
                            <span>Home Decor</span>
                        </Link>
                        <Link to='/mobile' className="nav-item d-flex flex-column" href="./mobile">
                            <img src={auto} alt="" />
                            <span>automovie and more</span>
                        </Link>
                        <Link to='/beauty' className="nav-item d-flex flex-column" href="./beauty">
                            <img src={partyy} alt="" />
                            <span>Party Needs</span>
                        </Link>
                        <Link to='/fashion' className="nav-item d-flex flex-column" href="./fashion">
                            <img src={bend} alt="" />
                            <span>Fashion</span>
                        </Link>
                        
                    </div>



                </div>
            </div>


        </div>
    )
}
export default Home;