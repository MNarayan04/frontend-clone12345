import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import {faXTwitter,faFacebook,faPinterest,faWhatsapp,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
const Front=()=> {
    useEffect(()=>{
        AOS.init({
            offset:200,
            duration:1000
    });
    })
    return(
        <main>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img className="logo" src="./image/logo.png" alt="logo" data-aos="slide-right"></img>

      <form class="d-flex" role="search">
        <button class="Contact" type="contact" data-aos="zoom-in-right">Contact us</button>
      </form>
    </div>
</nav>
    <div className="text text-center" data-aos="zoom-in">
         <h2 className="heading" >Elevate <span class="text-primary">Real Estate Success</span> with<br/>Osumare's Digital Expertise</h2>
         <p className="para1">Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
         <button className="getstart bg-primary mb-5">Get started</button>
    </div>
    <div>
        <img className="imagehome mx-auto d-block my-5 " src="./image/Header image.png" data-aos="flip-down"></img>
        <h3 className="imagedata"><b>Real Estate-Focused Digital Mastery</b></h3>
    </div>
    <div className="container1 row-cols-my-2 m-5">
        <div className="cuate">
            <img src="./image/cuate.png" data-aos="slide-right"></img>
        </div>
        <div className="subcontainer1">
        <h3 className="imagedata mt-1" data-aos="flip-left"><b>Unlock the Potential of Digital Real Estate Excellence</b></h3>
        <p className="para2 ms-5"  data-aos="flip-left">At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
        <button  class="Contact text-light bg-primary fs-5 btn-center ms-5">Get started</button>
        </div>
    </div>
    <div>
        <div className="serviceoffer" data-aos="flip-down">
        <h3 className="imagedata mt-1" ><b>Our Service Offerings</b></h3>
        <p className="para1 text-center"> Strategies that Drive Property Market Excellence</p>
        </div>
        <div className="row row-cols-md-4 m-5 g-5 text-center">
           <card  data-aos="flip-down">
               <img src="./image/card1.png" ></img>
               <div>
               <b>Automotive SEO</b>
               <p class="justify">Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/card2.png"></img>
               <div>
               <b>PPC Precision</b>
               <p class="justify">Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/card3.png"></img>
               <div>
               <b>Social Acceleration</b>
               <p class="justify">Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/card4.png"></img>
               <div>
               <b>Content Excellence</b>
               <p class="justify">Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/card5.png"></img>
               <div>
               <b>Web Design</b>
               <p class="justify">Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/card6.png"></img>
               <div>
               <b>Data-Driven Insights</b>
               <p class="justify">Leverage data to refine your strategies, making informed decisions that drive revenue growth.</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/card7.png"></img>
               <div>
               <b>End-to-End Solutions</b>
               <p class="justify">From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/card8.png"></img>
               <div>
               <b>Video marketing</b>
               <p class="justify">Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories</p>
               </div>
           </card>
        </div>
         <div className="text text-center" data-aos="flip-down">
            <button className="Contact text-light bg-primary fs-5 btn-center">Get started</button>
         </div>
    </div>
    <div className="serviceoffer" data-aos="flip-down">
        <h4 className="imagedata mt-1"><b>Navigating Real Estate's Digital Landscape</b></h4>
        <p className="para1 text-center">Insights for Real Estate Marketing Advantage</p>
    </div>
    <div className="container1 m-5">
        <div className="subcontainer1">
        <card className="group m-5 " data-aos="flip-down">
            <div className="me-3">
               <img src="./image/group1.png"></img>
            </div>
               <div>
               <h4><b>Market Trends Analysis</b></h4>
               <p>Predictive insights to guide real estate strategies</p>
               </div>
           </card>
           <card className="group m-5 " data-aos="flip-down">
            <div className="me-3">
               <img src="./image/group2.png"></img>
            </div>
               <div>
               <h4><b>Targeted Buyer Persona</b></h4>
               <p>Understand and connect with your ideal property buyers.</p>
               </div>
           </card>
           <card className="group m-5 " data-aos="flip-down">
            <div className="me-3">
               <img src="./image/group3.png"></img>
            </div>
               <div>
               <h4><b>Competitor Insights</b></h4>
               <p>Stand out in the property market with informed strategies</p>
               </div>
           </card>
           <card className="group m-5 " data-aos="flip-down">
            <div className="me-3">
               <img src="./image/group4.png"></img>
            </div>
               <div>
               <h4><b>Visual Content Appeal</b></h4>
               <p>Captivate buyers with appealing visuals and immersive experiences.</p>
               </div>
           </card>
        </div>
        <div className="cuate">
            <img src="./image/rafiki.png"></img>
        </div>
    </div>
    <div className="serviceoffer" data-aos="flip-down">
        <h3 className="imagedata mt-1"><b>Driving Property Inquiries to Conversions</b></h3>
        <p className="para1 text-center">Streamlined Strategies for Real Estate Success</p>
    </div>
    <div className="container1 m-5">
        <div className="cuate me-5" data-aos="flip-down">
            <img src="./image/serachHouse.png"></img>
        </div>
        <div className="subcontainer1" data-aos="flip-down">
        <h3 className="imagedata mt-1"><b>Optimized Path to Property Purchas</b></h3>
        <p className="para2 ms-5">In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
        <button  class="Contact text-light bg-primary fs-5 btn-center mx-5" >Get started</button>
        </div>
    </div>
    <div className="serviceoffer" data-aos="flip-down">
        <h4 className="imagedata mt-1"><b>Driving Property Inquiries to Conversions</b></h4>
        <p className="para1 text-center"></p>
        </div>
        <div className="row row-cols-md-2 m-5 g-5 text-center">
           <card data-aos="flip-down">
               <img src="./image/icon1.png"></img>
               <div>
               <h4><b>Call-to-Action Optimization</b></h4>
               <p class="justify">Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
               </div>
           </card >
           <card data-aos="flip-down">
               <img src="./image/icon2.png"></img>
               <div>
               <h4><b>Landing Page Efficiency</b></h4>
               <p class="justify">Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/icon3.png"></img>
               <div>
               <h4><b>Social Proof Utilization</b></h4>
               <p class="justify">Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/icon4.png"></img>
               <div>
               <h4><b>Mobile-Friendly Experience</b></h4>
               <p class="justify">With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
               </div>
           </card>
           </div>
           <div className="serviceoffer">
        <h4 className="imagedata mt-1"><b>Our Expertise in Action</b></h4>
        <p className="para1 text-center"></p>
        </div>
        <div className="row row-cols-md-2 m-5 g-5 text-center">
           <card data-aos="flip-down">
               <img src="./image/icon5.png"></img>
               <div>
               <h4><b>Effective CTAs</b></h4>
               <p class="justify p-4"> See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/icon6.png"></img>
               <div>
              <h4><b>Conversion-Optimized Landing Pages</b></h4>
               <p class="justify p-4">Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/icon7.png"></img>
               <div>
              <h4><b>Trust Building with Social Proof</b></h4>
               <p class="justify p-4">Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
               </div>
           </card>
           <card data-aos="flip-down">
               <img src="./image/icon8.png"></img>
               <div>
               <h4><b>Mobile-First Success:</b></h4>
               <p class="justify p-4"> Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
               </div>
           </card>
           </div>
           <div className="serviceoffer1 text-center" >
        <h4 className="imagedata mt-5" data-aos="flip-down"><b>Your Peace of Mind</b></h4>
        <p className="justify" data-aos="flip-down">Through our conversion-focused strategies, we ensure that property<br/> seekers are not just visitors, but engaged prospects ready to make<br/> their next move in the real estate market</p>
        <button  class="Contact text-light bg-primary fs-5 btn-center ms-5 my-5" data-aos="flip-down">Get started</button>
    </div>
    <div className="serviceoffer">
        <h3 className="imagedata mt-1" ><b>What Our Pharma Partners Say</b></h3>
        <p className="para1 text-center">Driving Transformations, One Brand at a Time</p>
    </div>



<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" height="50px">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src="./image/Testimonial card.png" className="d-block" width="100%" height="700px" alt="..."/>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
          <video className="d-block" width="100%" height="700px" controls src="./image/Osumare-Office-Party-at-K9-The-Coast-Line.mp4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
</div>





<div className="serviceoffer">
        <h3 className="imagedata mt-1" data-aos="flip-down"><b>Frequently Asked Questions</b></h3>
        <p className="para1 text-center"data-aos="flip-down">Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>
        <div class="box"data-aos="flip-down">
   <div class="faqs">
      <details>
        <summary className="summary fs-5">1. How does Osumare measure campaign success?</summary>
         <p class="text mt-5 fs-6">We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</p>
      </details>
      <details>
         <summary className="summary fs-5">2. How does Osumare measure campaign success?</summary>
         <p class="text mt-5 fs-6">We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</p>
         </details>
      <details>
         <summary className="summary fs-5">3. How does Osumare measure campaign success?</summary>
         <p class="text mt-5 fs-6 ">We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</p>
      </details>
   </div>
</div>
    </div>
    <div className="circle">
    <div className="serviceoffer1">
        <h3 className="imagedata mt-1" data-aos="flip-down"><b>Connect with Our Digital Marketing Experts</b></h3>
        <p className="para1 text-center" data-aos="flip-down">Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</p>
    </div>
    <div className="msgcontainer">
        <form className="form d-flex" data-aos="flip-down">
            <div class="form1 mt-5">
              <label><b>Name</b></label><br/>
              <input type="text" placeholder="Enter your name"></input><br/><br/>
              <label><b>Phone</b></label><br/>
              <input type="number" placeholder="Enter your Number"></input><br/><br/>
              <label><b>Email</b></label><br/>
              <input type="mail" placeholder="Enter your Total No of Vehicles"></input><br/><br/>
            </div>
            <div class="form2 mt-5">
            <label><b>Message</b></label><br/>
              <textarea class="textarea" type="mail" placeholder="Enter your Message"></textarea><br/><br/>
            </div>
        </form>
        <div class="text-center">
           <button  class="Contact text-light bg-primary fs-5 my-5" >Get started</button>
        </div>
        </div>
    </div>
    <footer>
        
        <div className="containerfooter d-flex ">
            <div className="details" data-aos="flip-down">
               <img className="logo" src="./image/logo.png"></img>
               <p>The best digital marketing agency in Pune with a<br/>proven track record of consistently delivering<br/>quality service.</p>
            
                <h5><b>Address</b></h5>
                <p>Survey No. 43, Pathare<br/>Thube Nagar, Nagar<br/>Road, Kharadi, Pune-14,<br/>Maharastra, India.</p>
            
                <h4><b>Contacts</b></h4>
                <p><FontAwesomeIcon icon={faEnvelope}/> hello@sumare.in</p>
                <p><FontAwesomeIcon icon={faPhone} /> +91 8459 8762 26</p>    
            </div>
    
        <div className="menu" data-aos="flip-down">
             <dl>
                <h4><b>Menu</b></h4>
                <dd>Home</dd>
                <dd>About</dd>
                <dd>Services</dd>
                <dd>Work</dd>
                <dd>Work</dd>
                <dd>Blog</dd>
                <dd>Career</dd>
             </dl>
        </div>
        <div className="media d-flex" data-aos="flip-down">
             <h4><b>Social</b></h4>
             <div class="media2 d-flex mt-5">
             <p className="media1 d-flex"><FontAwesomeIcon icon={faXTwitter}/></p>
             <p className="media1 d-flex"><FontAwesomeIcon icon={faFacebook}/></p>
             <p className="media1 d-flex"><FontAwesomeIcon icon={faYoutube} /></p>
             <p className="media1 d-flex"><FontAwesomeIcon icon={faPinterest}/></p>
             <p className="media1 d-flex"><FontAwesomeIcon icon={faWhatsapp} /></p>
             <p className="media1 d-flex"><FontAwesomeIcon icon={faInstagram} /></p>
             </div>
        </div>
      </div>
    </footer>
    <footer class="text-center">© 2023 Osumare. All rights reserved.</footer>
    </main>
    );
}

export default Front;