import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";


const Fresh=()=>{
    
    const { data } = useContext(ZeptoContext);

    const img1 = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-88,pr-true,f-auto,q-80/inventory/banner/b11ca9ae-7168-4564-aeb2-2e59c1d49cb9.png';
    const img2 = 'https://cdn.zeptonow.com/production/tr:w-1080,ar-1080-651,pr-true,f-auto,q-80/inventory/banner/c9e1d9fb-80aa-4f86-a26f-177a296c3f3f.png';

    return(
        <div>
            
           <div className="container-fluid">
                <img src={img1} alt="" />
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

           <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <h3 style={{marginLeft:'50px'}}>Freshest Veggies</h3>
                    <h4 style={{color:'red', marginRight:'50px'}}>See more</h4>
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

           <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <h3 style={{marginLeft:'50px'}}>Juiciest Fruits</h3>
                    <h4 style={{color:'red', marginRight:'50px'}}>See more</h4>
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

           <div className="container-fluid">
            <img src={img2} style={{width:'1280px', height:'500px'}} alt="" />
           </div>

            
        </div>
    )
}
export default Fresh;