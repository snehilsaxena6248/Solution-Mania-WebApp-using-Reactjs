import React from 'react'
import vg from "../assets/2.webp"

import {AiFillGoogleCircle, AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (<>
    <div className='home' id="home">
        <main>
            <h1>Solution Mania</h1>
            <p>Solution To All Your Problems</p>
        </main>

    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ipsa, necessitatibus nobis praesentium numquam eaque repellendus illum aliquid a alias aspernatur quaerat itaque quod ad! Incidunt molestias doloribus corporis eaque.</p>

        </div>
    </div>
    <div className="home3" id="about">
        <div>
        <h1>Who we are?
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero laudantium neque repudiandae quis natus animi quibusdam quae culpa delectus. Obcaecati, perspiciatis beatae. Eos officiis quia velit error cum magnam temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veritatis inventore optio et, consequuntur enim! Amet cum perferendis corrupti id enim at quo neque vero accusantium. Ipsum magnam quos repellat.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem minus voluptatem blanditiis ab dolorem expedita facere quam sed, itaque saepe quod deserunt porro sit ut veritatis repellendus? Dolore, error?</p>
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
        <AiFillInstagram/>
        <p>Instagram</p>
        </div>
        <div style={{
            animationDelay: "1s",
        }}>
        <AiFillYoutube/>
        <p>Youtube</p>
        </div>
    </article>
</div>

    </div>
    </>
  )
}

export default Home