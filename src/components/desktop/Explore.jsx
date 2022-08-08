import React from 'react';
import './styles/Explore.css'
import explorebackground from '../../images/explorebackground.png'
import Header from './Header';
import leed from '../../images/leedsproperty.png'
import Footer from './Footer';
import houserent from '../../images/houserent.jpg'
import undraw from '../../images/undraw.png'


const Explore = () => {
return (
<>
    <Header page='explore' />
    <>

        <div className='explore-container1'>
            <div className='explore-content1'>
                <div className='explore-text1'>
                    <h1 className='explore-h1'>Explore <br /> more about ONsell</h1>
                    <span className='explore-span'> At ONsell , we offer you the ground to Buy and Sell Properties that
                        is more of quality which suite your taste around Nigeria.</span>
                    <p className='explore-p'>The properties deliver on quality ensuring you great returns in a short
                        time. Find all the details you need and take the next steps below.</p>
                </div>
                <div className='explore-immage'><img src='' alt="" /></div>
            </div>
        </div>
        <div className="plan-section2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gXW6BYWtUfw"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div className="container-left2">
                <button className="btn-btn2"><i class="fa-solid fa-angle-right"></i>Watch More</button>
                <div className="btn-container2">
                    <a href="">Learn more</a>
                </div>

            </div>
        </div>
        <div className="item-container">
            <div className="item-image">
            </div>
            <div className="item-discription">
                <h1></h1>

            </div>

        </div>
        <div className="explore-value2">
            <div className="value-text">
                <h1>Lead with Empathy</h1>
                <q>We are leaders in a new and complex industry that is profoundly changing how brands engage their most
                    dedicated consumers. Empathy and compassion for clients, creators, and colleagues is what makes us
                    true leaders.</q>
            </div>
            <div className="value-text">
                <h1>Break Down Walls</h1>
                <q>We're at the forefront of our industry and paving the way with new technology. We embrace the unknown
                    every day, and challenge the status quo in the name of progress and innovation.</q>
            </div>
            <div className="value-text">
                <h1>Welcome Challenges</h1>
                <q>New challenges excite us and push us to be better. We're open to opinions from anyone with the voice
                    to share them, regardless of background, identity, or seniority.</q>
            </div>
        </div>
        <Footer />
    </>

</>
);
}

export default Explore;