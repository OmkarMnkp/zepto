import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";


const Electronics=()=>{

    const { data } = useContext(ZeptoContext);
    const tablet = 'https://cdn.zeptonow.com/production/tr:w-120,ar-280-400,pr-true,f-auto,q-80/inventory/banner/dc152501-8664-4497-9102-79c3e5c01d9f.png';
    const earbuds = 'https://cdn.zeptonow.com/production/tr:w-120,ar-196-300,pr-true,f-auto,q-80/inventory/banner/60a0975a-4386-47e2-a517-a6bd11dd6590.png';
    const speakers = 'https://cdn.zeptonow.com/production/tr:w-120,ar-196-300,pr-true,f-auto,q-80/inventory/banner/759472c3-df6e-40ad-8cd2-753989df61db.png';
    const smart = 'https://cdn.zeptonow.com/production/tr:w-120,ar-196-300,pr-true,f-auto,q-80/inventory/banner/f767a0de-0557-44f4-b56e-ad9776a93367.png';
    const kitchen ='https://cdn.zeptonow.com/production/tr:w-120,ar-196-300,pr-true,f-auto,q-80/inventory/banner/8e1e4d4a-c063-4c43-a1a4-3b6946ee6cc2.png';
    const home ='https://cdn.zeptonow.com/production/tr:w-120,ar-196-300,pr-true,f-auto,q-80/inventory/banner/6d06ed59-f1f2-40ec-832a-83e97feaf509.png';
    const groming= 'https://cdn.zeptonow.com/production/tr:w-120,ar-196-300,pr-true,f-auto,q-80/inventory/banner/d322932b-a116-45d3-8820-4b9a11be617f.png';
    const bulb = 'https://cdn.zeptonow.com/production/tr:w-120,ar-195-300,pr-true,f-auto,q-80/inventory/banner/42b015ef-0f77-495e-bdb9-c39dac08a4bc.png';
    const mouse = 'https://cdn.zeptonow.com/production/tr:w-120,ar-195-300,pr-true,f-auto,q-80/inventory/banner/972f1517-b08f-4f2d-87a6-6a2ea2fedebe.png';
    const cables = 'https://cdn.zeptonow.com/production/tr:w-120,ar-195-300,pr-true,f-auto,q-80/inventory/banner/59808863-5b1e-4279-8740-a6f28cae7a84.png';
    const supersaver = 'https://cdn.zeptonow.com/production/tr:w-1080,ar-1080-271,pr-true,f-auto,q-80/inventory/banner/b686a607-cfca-4e46-b9cc-73e0019c7359.png';

    const philips = 'https://cdn.zeptonow.com/production/tr:w-160,ar-397-510,pr-true,f-auto,q-80/inventory/banner/a8db8ea7-0e4f-40b8-9712-d3a9560d7cb6.png';
    const boat = 'https://cdn.zeptonow.com/production/tr:w-160,ar-528-680,pr-true,f-auto,q-80/inventory/banner/93f40bb1-3879-4ccf-a0bb-ae4618f4744b.png';
    const life = 'https://cdn.zeptonow.com/production/tr:w-160,ar-529-680,pr-true,f-auto,q-80/inventory/banner/5ac22076-3334-4554-a79c-55c22b36234d.png';
    const ele = 'https://cdn.zeptonow.com/production/tr:w-160,ar-529-680,pr-true,f-auto,q-80/inventory/banner/0bba62c6-6fde-47cc-b688-90914328253c.png';
    const wonder = 'https://cdn.zeptonow.com/production/tr:w-160,ar-529-680,pr-true,f-auto,q-80/inventory/banner/0a9322bc-a820-4ec8-9c36-d0105ecc6e20.png';
    const maha = 'https://cdn.zeptonow.com/production/tr:w-160,ar-529-680,pr-true,f-auto,q-80/inventory/banner/35ab43e6-1caf-4a5a-ba26-eb8deec03b44.png';
    const fire = 'https://cdn.zeptonow.com/production/tr:w-160,ar-529-680,pr-true,f-auto,q-80/inventory/banner/76ea03de-a55e-41b3-8789-fb0e1147b5d1.png';

    const kitchenn = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-260,pr-true,f-auto,q-80/inventory/banner/ba492805-f93a-4bd9-a3d4-555b22e9df17.png';
    const blade = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-260,pr-true,f-auto,q-80/inventory/banner/86d755f4-cb1d-4af1-85f1-34bf0b65f36a.png';


    return(
        <div>
            
           <div className="container-fluid">
                <img src={tablet} alt="" />
                <img src={earbuds} alt="" />
                <img src={speakers} alt="" />
                <img src={smart} alt="" />
                <img src={kitchen} alt="" />
                <img src={home} alt="" />
                <img src={groming} alt="" />
                <img src={bulb} alt="" />
                <img src={mouse} alt="" />
                <img src={cables} alt="" />
                
           </div>

           <div className="container">
            <img src={supersaver} alt="" />
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

            <div className="container-fluid d-flex gap-4">
                <img src={philips} alt="" />
                <img src={boat} alt="" />
                <img src={life} alt="" />
                <img src={ele} alt="" />
                <img src={wonder} alt="" />
                <img src={maha} alt="" />
                <img src={fire} alt="" />


            </div>

            <div className="product-container">
                <img src={kitchenn} alt="" />
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

            <div className="product-container">
                <img src={blade} alt="" />
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
    )
}
export default Electronics;