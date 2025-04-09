import React, { useContext } from "react";
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link } from "react-router-dom";


const Fashion = () => {

    const { data } = useContext(ZeptoContext);

    const loved = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-289,pr-true,f-auto,q-80/inventory/banner/c6c13dab-e4d8-429a-8d74-077fe30250c4.png';
    const ketch = 'https://cdn.zeptonow.com/production/tr:w-160,ar-392-560,pr-true,f-auto,q-80/inventory/banner/d5681f38-5884-4ae6-bc9c-f562f129ea64.png';
    const puma = 'https://cdn.zeptonow.com/production/tr:w-160,ar-392-560,pr-true,f-auto,q-80/inventory/banner/cf5f5641-d845-4564-acb1-442db9d93d17.png';
    const march = 'https://cdn.zeptonow.com/production/tr:w-160,ar-392-560,pr-true,f-auto,q-80/inventory/banner/775bc213-4745-47a5-aa55-d0b55b08f917.png';
    const palmona = 'https://cdn.zeptonow.com/production/tr:w-160,ar-392-560,pr-true,f-auto,q-80/inventory/banner/ee2129b8-5a8c-433d-93ec-7b11d48d5e2d.png';
    const jisora = 'https://cdn.zeptonow.com/production/tr:w-160,ar-392-560,pr-true,f-auto,q-80/inventory/banner/65f9a2ea-eb83-4d23-be54-6457afc15221.png';
    const libas = 'https://cdn.zeptonow.com/production/tr:w-160,ar-392-560,pr-true,f-auto,q-80/inventory/banner/f1d60a4a-0ef5-4db6-9475-de3d870239a4.png';

    const curted ='https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-320,pr-true,f-auto,q-80/inventory/banner/8d161403-aac4-4444-9391-540c8f734e06.png';

    const work = 'https://cdn.zeptonow.com/production/tr:w-300,ar-632-480,pr-true,f-auto,q-80/inventory/banner/db0f1654-301f-4a6f-9d9a-0cab9606456a.png';
    const office = 'https://cdn.zeptonow.com/production/tr:w-300,ar-632-480,pr-true,f-auto,q-80/inventory/banner/3c03c8f5-064e-4490-bcf9-b1ac66b3625e.png';
    const fitness = 'https://cdn.zeptonow.com/production/tr:w-300,ar-632-480,pr-true,f-auto,q-80/inventory/banner/3a7fdc0f-909c-4d32-a2a2-1581dc27007a.png';
    const date = 'https://cdn.zeptonow.com/production/tr:w-300,ar-632-480,pr-true,f-auto,q-80/inventory/banner/7dc1c0c0-0813-4cf2-94cb-4ae4727faddf.png';

    const multiple = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-1277,pr-true,f-auto,q-80/inventory/banner/6bfd5932-f828-423f-8314-739a03faeca3.png';
    return (
        <div>

            <div className="container-fluid">
                <img src={loved} alt="" />
                <div className="container d-flex gap-4">
                    <img src={ketch} alt="" />
                    <img src={puma} alt="" />
                    <img src={march} alt="" />
                    <img src={palmona} alt="" />
                    <img src={jisora} alt="" />
                    <img src={libas} alt="" />

                </div>
            </div>

            <div className="container-fluid">
                <img src={curted} alt="" />
                <div className="container d-flex gap-3 ">
                    <img style={{height:'200px'}} src={work} alt="" />
                    <img style={{height:'200px'}} src={office} alt="" />
                    <img style={{height:'200px'}} src={fitness} alt="" />
                    <img style={{height:'200px'}} src={date} alt="" />
                    

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
                <img src={multiple} alt="" />
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
    )
}
export default Fashion;