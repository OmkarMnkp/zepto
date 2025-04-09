
import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";

const Cards = () => {

    // zepro useContext
    const { data } = useContext(ZeptoContext);

    // // navigate
    // const navigate = useNavigate();


    // const HandleDetail=()=>{
    //     navigate('/detail')
    // }

    return (
        <div className="container-fluid">

            <div className="product-container">
                {
                    data.length > 0 ? (
                        data.slice(0, 12).map((item, index) => (
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
export default Cards;