import AOS from 'aos';
import React, { useEffect, useState } from 'react'
import "aos/dist/aos.css";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function About() {
    const [isHome, setIsHome] = useState(false);
    const navigate = useNavigate();

    const homeHandler = () => {
        setIsHome((prev) => {
            if(!prev){
                navigate('/');
            }
            return !prev;
        })
    }


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div>
                <div>
                    {/* Navbar */}
                    <nav className="about-navbar">
                        <img src="/BiteDash.png" alt="BiteDash" className='logo'/>
                        <ul className="about-navbar-menu">
                            <li className="cursor-pointer" onClick={homeHandler}>Home</li>
                            <li className="cursor-pointer underline">Who We Are</li>
                            <li className="cursor-pointer">Work With Us</li>
                        </ul>
                    </nav>

                    {/* Hero Section */}
                    <div className="relative w-full h-screen" data-aos="fade-up">
                        <img
                            src="https://b.zmtcdn.com/web/about/48fc8d7806d6a947fd041a8a1cf83bac1563875757.png"
                            alt="Delicious Food"
                            className="w-full h-full object-cover"
                        />
                        <div className="about-head-text">
                            <h1 className="text-5xl font-bold text-white">Better Food for More People</h1>
                            <p className="text-white text-lg mt-2 animate-bounce">Scroll for more</p>
                        </div>
                    </div>

                    {/* Assortment Section */}
                    <div className="assortment-section" data-aos="fade-up">
                        <span className="assortment-section-tag">Assortment</span>
                        <h2 className="assortment-section-heading">
                            Driving the force of <span className="text-red-500">assortment</span>
                        </h2>
                        <p className="assortment-section-para">
                            For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries.
                            By putting together meticulous information for our customers, we enable them to make an informed choice.
                        </p>
                    </div>

                    {/* Blog Section */}
                    <div data-aos="fade-up" className='blog-section' id='blog'>
                        <h2 className="blog-section-heading">From Our Blog</h2>
                        <p className="blog-section-para">
                            Explore our blog for insightful articles, personal reflections, impactful resources, and ideas that inspire us at BiteDash.
                        </p>
                        <div className="blog-section-present">
                            <div className="blog-present-div" data-aos="fade-up" data-aos-delay="200">
                                <img src="/bitedash_blog_1.png" alt="Blog 1" className="blog-present-img" />
                                <h3 className="blog-present-heading">Exploring New Cuisines</h3>
                                <p className="blog-present-para">Discover how diverse flavors come together to create amazing culinary experiences.</p>
                            </div>
                            <div className="blog-present-div" data-aos="fade-up" data-aos-delay="400">
                                <img src="/bitedash_blog_2.png" alt="Blog 2" className="blog-present-img" />
                                <h3 className="blog-present-heading">Food Delivery Trends</h3>
                                <p className="blog-present-para">Stay updated with the latest trends in food delivery and online dining.</p>
                            </div>
                            <div className="blog-present-div" data-aos="fade-up" data-aos-delay="600">
                                <img src="/bitedash_blog_3.png" alt="Blog 3" className="blog-present-img" />
                                <h3 className="blog-present-heading">Behind the Scenes at BiteDash</h3>
                                <p className="blog-present-para">A look at how we work to bring the best food experiences to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About