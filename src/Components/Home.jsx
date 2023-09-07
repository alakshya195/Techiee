import React from 'react'
import vg from "../Assets/vector_image.png"
import {AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube, AiFillInstagram} from "react-icons/ai"; 


const Home = () => {
  return (
   <>
   
        <div className="home" id="home">

            <main>

            <h1> Techiee.</h1>
         
            <p>Technology is our passion, so let us be your expert guide.</p>

            </main>

        </div>

        <div className="home2">

            <img src={vg} alt="Graphics"  />

                <div>

                <p class="para">
                The latest tech news about the world's best (and sometimes worst) hardware, apps,
                and much more. From top companies like Google and Apple to tiny startups vying for your attention, 
                Verge Tech has the latest in what matters in technology daily..
               
                </p>

                
                </div>

                
        </div>


        <div className="home3" id="about">

            <div>

                <h1>Who we are?</h1>
                <p class="para2"> The Techiee. team has a life-long passion for the latest innovations  over 300 years of experience between us, in fact – and
                 we’ve made it our mission to share that combined knowledge and expertise with you.
                 Technoloy has quickly gained a reputation of being a remarkable managed IT service provider working on traditional and innovative technologies. We are constantly working  to achieve the best results for you and business. Above all, we wish to outperform ourselves each time!

                We help our customers get a sustainable advantage by providing comprehensive solutions that combine strategic advisory services, technical expertise, and the capability to implement IT recommendations.

                Reliability is our topmost priority. Our steadfast belief in the ideals of uprightness, commitment, and consistency has fueled us to help our businesses like yours leverage information and technology to become more successful.  </p>

                

            </div>

        </div>

        <div className="home4" id="brands">

            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>

                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>

                    
                    <div style={{
                        animationDelay: "0.7s",
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                     
                    <div style={{
                        animationDelay: "1s",
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                     

                </article>
            </div>


        </div>

    
   </>
  )
};

export default Home
