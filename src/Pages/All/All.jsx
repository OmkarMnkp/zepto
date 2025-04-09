import React, { useContext, useEffect, useState } from "react";
import './All.css';
import heroimg from '../../assets/hero.webp';
import hero21 from '../../assets/hero21.webp';
import hero22 from '../../assets/hero22.webp';
import { ZeptoContext } from "../../context/ZeptoContext";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../../components/Cards/Cards";



const All = () => {
    const img1 = 'https://cdn.zeptonow.com/production/cms/category/38047553-95f3-47c6-a1ff-4794e1227d3a.png';
    const img2 = 'https://cdn.zeptonow.com/production/cms/category/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.png';
    const img3 = 'https://cdn.zeptonow.com/production/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png';
    const img4 = 'https://cdn.zeptonow.com/production/cms/category/031c2a24-d40f-4272-8c71-8a566252495e.png';
    const img5 = 'https://cdn.zeptonow.com/production/cms/category/8d4fb022-bae0-432d-92c8-2b12d97ee6cc.png';
    const img6 = 'https://cdn.zeptonow.com/production/cms/category/498eea73-358c-42c1-b482-158e80669be9.png';
    const img7 = 'https://cdn.zeptonow.com/production/cms/category/20d9687b-58a4-4bf7-a561-99198b4d5ca1.png';
    const img8 = 'https://cdn.zeptonow.com/production/cms/category/366e5b7d-2028-4935-b9f1-75bfa085c3d7.png';
    const img9 = 'https://cdn.zeptonow.com/production/cms/category/db346f5e-644f-426a-85af-92d707e086ac.png';
    const img10 = 'https://cdn.zeptonow.com/production/cms/category/47b3a34d-8f9f-42fe-97a0-4d8350748924.png';
    const img11 = 'https://cdn.zeptonow.com/production/cms/category/474e6e58-1894-4378-86f1-168cc7266d1a.png';
    const img12 = 'https://cdn.zeptonow.com/production/cms/category/90b2faee-1461-465a-a8c6-8c84716dd7dc.png';
    const img13 = 'https://cdn.zeptonow.com/production/cms/category/1237afd6-40bf-4942-a266-25f23025e86c.png';
    const img14 = 'https://cdn.zeptonow.com/production/cms/category/eb6fe22a-f8b8-4189-8d9a-deb32ff659c9.png';
    const img15 = 'https://cdn.zeptonow.com/production/cms/category/b322b3db-e75e-45e5-a11d-7ee37561c426.png';
    const img16 = 'https://cdn.zeptonow.com/production/cms/category/b5cfc944-9611-4f08-b4f9-a071d07b1aad.png';
    const img17 = 'https://cdn.zeptonow.com/production/cms/category/c42610fc-a94c-40f6-9e74-d30c4a1f5895.png';
    const img18 = 'https://cdn.zeptonow.com/production/cms/category/c084c75c-82ca-497f-857c-5069c6723194.png';
    const img19 = 'https://cdn.zeptonow.com/production/cms/category/a4d7f18e-3a58-4c85-b912-f15f0be533ab.png';
    const img20 = 'https://cdn.zeptonow.com/production/cms/category/2b267097-f22b-4269-be34-1ea534ced3d4.png';

    const mobile = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/36505655-0b0e-4b7c-abdc-92c7a230c267.png';
    const iron = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/f87c5de9-c5d1-4bc4-8c5f-fd8342f8dde2.png';
    const eye = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/b230aa9e-39d2-48cf-b70b-62b7345af476.png';

    const blocks = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/690d68be-0302-4138-b48a-b2d2141c092a.png';
    const bags = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/be289cce-726b-4263-82a3-01c04168467a.png';
    const pet = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/22ecab4a-1793-4b4c-a125-ba3dd2869398.png';
    const speaker = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/5c143c45-988e-4eb3-a7f8-90245c6d5e12.png';
    const battery = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/2a1050dd-b821-480a-8661-205fbeecaff9.png';
    const craft = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/86abb79d-0f88-47c7-814a-4f363d6f780f.png';
    const kitchen = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/8a2b7d4f-8e95-4f2e-9007-e65cdaafde88.png';
    const card = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/11cbcab8-f25e-49dd-92ba-62de2f8ad7b9.png';
    const earbuds = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/609cfe73-8f8d-4700-bb5b-afd4c0851b7e.png';
    const msg = 'https://cdn.zeptonow.com/production/tr:w-336,ar-336-496,pr-true,f-auto,q-80/inventory/banner/ef68d97b-5786-434b-a554-562be8b5877e.png';

    const hero = 'https://cdn.zeptonow.com/production/tr:w-1280,ar-3…y/banner/4ea3de05-f469-4df2-9548-db9c9863dfdf.png';

    const { data } = useContext(ZeptoContext);


    return (
        <>
            <div id="carouselExampleControls" className=" container-fluid carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex gap-2" >
                            <img src={img1} alt="Slide 1" />
                            <img src={img2} alt="Slide 2" />
                            <img src={img3} alt="Slide 3" />
                            <img src={img4} alt="Slide 4" />
                            <img src={img5} alt="Slide 5" />
                            <img src={img6} alt="Slide 6" />
                            <img src={img7} alt="Slide 7" />
                            <img src={img8} alt="Slide 8" />
                            <img src={img9} alt="Slide 9" />
                            <img src={img10} alt="Slide 10" />

                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-flex">

                            {/* <img src={img11} alt="Slide 11" />
                        <img src={img12} alt="Slide 12" />
                        <img src={img13} alt="Slide 13" />
                        <img src={img14} alt="Slide 14" />
                        <img src={img15} alt="Slide 15" />
                        <img src={img16} alt="Slide 16" />
                        <img src={img17} alt="Slide 17" />
                        <img src={img18} alt="Slide 18" />
                        <img src={img19} alt="Slide 19" />
                        <img src={img20} alt="Slide 20" /> */}
                        </div>
                    </div>
                    <div className="carousel-item">
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

            <div className="container-fluid hero">
                <img src={heroimg} alt="" />
            </div>

            <div className="container-fluid hero-2">
                <div className="d-flex gap-2 col imgcont">
                    <img src={hero21} alt="" />
                    <img src={hero22} alt="" />
                </div>

            </div>

            {/* renders cards componets */}
            <Cards/>

            <div className="container-fluid d-flex caro-container ">
                <div className="one">
                    <h4>COFFEE LOVERS</h4>
                    <h2>Dive into the world of fresh brew</h2>
                    <button type="button" class="btn ">More Items</button>

                </div>
                <div className="two d-flex align-items-center justify-content-center">
                    {

                        data.slice(0, 5).map((item, index) => (
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

                    }
                </div>
                
            </div>

            <div className="container-fluid">
                <h3>Elevate Yourself</h3>
                
                <Cards/>
            </div>

            <div className="container-fluid d-flex justify-content-between align-items-start caro-container p-4" style={{ backgroundColor: '#e2ffe9' }}>

                
                <div className="one text-start" style={{ color: 'green', maxWidth: '30%' }}>
                    <h4>MORE TO LOVE</h4>
                    <h2>Explore more and uncover hidden gems</h2>
                </div>

                
                <div className="twoo d-flex flex-wrap justify-content-center align-items-end" style={{ maxWidth: '60%' }}>
                    <div className="d-flex flex-wrap">
                        <img src={mobile} alt="" className="m-2 " />
                        <img src={iron} alt="" className="m-2 " />
                        <img src={eye} alt="" className="m-2 " />
                        <img src={blocks} alt="" className="m-2 " />
                        <img src={bags} alt="" className="m-2 " />
                        <img src={card} alt="" className="m-2 " />
                    </div>

                    <div className="d-flex flex-wrap">
                        <img src={pet} alt="" className="m-2 " />
                        <img src={speaker} alt="" className="m-2 " />
                        <img src={battery} alt="" className="m-2 " />
                        <img src={craft} alt="" className="m-2 " />
                        <img src={kitchen} alt="" className="m-2 " />
                        <img src={earbuds} alt="" className="m-2 " />
                    </div>
                </div>

            </div>


        </>

    );

};

export default All;
