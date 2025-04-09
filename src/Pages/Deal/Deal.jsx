import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";


const Deal=()=>{

    const { data } = useContext(ZeptoContext);
    const img1 = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-880,pr-true,f-auto,q-80/inventory/banner/13d492fd-fb4b-475d-afc5-7fe407913065.png';


    return(
        <div>


            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <h3 style={{marginLeft:'50px'}}>Makeup & Beauty</h3>
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
                    <h3 style={{marginLeft:'50px'}}>Electronics & Appliances</h3>
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
            <img src={img1} style={{width:'1280px', height:'500px'}} alt="" />
           </div>

           <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <h3 style={{marginLeft:'50px'}}>Dairy, Bread & Eggs</h3>
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

            
        </div>
    )
}
export default Deal;