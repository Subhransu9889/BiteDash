import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {BrandData} from "../assets/frontend_assets/assets.js";


function Brands() {
    const [brands, setBrand] = useState([]);

    useEffect(() => {
        setBrand(BrandData);
        AOS.init({ duration: 1000, once: true }); // Initialize AOS
    }, []);


    return (
        <>
            {/* Brands Section with Scroll Animation */}
            <div className="brand-display">
                <div className="p-6 bg-gray-100 min-h-content">
                    <h2 className="brand-heading" data-aos="fade-down">
                        Popular Brands For You
                    </h2>
                    <div className="brands-list-display">
                        {brands.map((brand, index) => (
                            <div
                                key={brand.id}
                                className="brands-list-item"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100} // Delay each brand
                            >
                                <img src={brand.logo} alt={brand.name} className="h-20 w-20 object-contain mb-3" />
                                <h3 className="text-lg font-semibold">{brand.name}</h3>
                                <p className="text-gray-600 text-sm text-center">{brand.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands