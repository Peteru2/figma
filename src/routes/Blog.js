import "./style.css";
import "../Components/navbar.css"
import Navbar from '../Components/Navbar.js'
import fam from "../family2.png"
import high from "../highfive2.png"
import sit from "../sitting.png"
import phone from "../phone31.png"
import star from "../star.png"

import Footer from "./footer.js"


function Blog (){
    return(
        <>
    <Navbar />
    
    <section className = " container">
            <section className= " grid  w-6/6 box  grid-cols-1 md:grid-cols-2 gap-12 mt-3 md:mt-12 p-3 md:p-8 pt-4">
                    <div className=" text-white A  mb-5">
                       <h1 className=" text-4xl md:text-7xl md:font-bold">Bring the Power of AI to your conversation</h1> 

                        <h3 className="md:text-3xl text-3xl mt-4">Work Faster, Smarter and Better Together</h3>
                        <h5 className="md:text-2xl  mt-4">Experience the power of AI models with OmniGPT, Our chat platdorm provide seemless communication across multiple channels</h5>
                    
                        <h3 className="text-2xl mt-8">Try OmniGPT for free, 15-day trial, no credit card required</h3>
                        <button className="btn w-full md:w-2/6 p-2 mt-3 green text-white  text-2ml md:text-1xl">Start your free trial.</button>
                    </div>
                   
                    <div className="ml-0 md:ml-12 B w-5/6">
                        <div  className="text-gray-500  text-center grid grid-cols-5 gap-4 text-lg">
                            <div className=" col-span-4 col-start-1 w-full  b-2 rounded-tl-full rounded-bl-full rounded-br-full side1-col relative">
                            <div class="absolute bottom-0 left-7 right-4 md:left-10">
                                    <img src={fam} alt= "dfgi"></img>
                                </div>
                            </div>

                            <div
                                class="md:w-24 md:h-24 w-28 h-28  rounded-full 
                                inline-flex items-center side2-col justify-center 
                                ">
                                <i className =" text-7xl fa fa-arrow-left  rotate-45 text-white   "></i>
                         </div>
                        </div>
                        
                        <div  className="text-gray-500  hidden md:grid mt-5 gap-4 grid-cols-5 text-lg">
                                <div
                                        class="md:w-24 md:h-24 w-18 h-18  rounded-full 
                                        inline-flex items-center green justify-center 
                                        font-bold">
                                        <i className ="text-7xl fa fa-arrow-up  rotate-45 text-white"></i>
                                </div>
                                <div className="p-8 rounded-full  inline-flex col-span-4 bg-gray-100 relative">
                                <div class="absolute bottom-0 left-7 right-4 md:left-10">
                                    <img src={high} alt= "dfam"></img>
                                </div>
                                </div>
                        </div>

                        <div  className="text-gray-500 hidden md:grid  mt-5 grid grid-cols-1 text-lg">
                            <div className="p-8  rounded-tl-full rounded-tr-full rounded-br-full text-white  text-center side2-col ">
                                <h4 className = "ml-32"> <b>@OmniGPT</b> can you give us an update on the latest project status?</h4></div>   
                        </div>

                        <div  className="text-gray-500 hidden md:grid mt-5 grid grid-cols-5 gap-3 text-lg ">
                            <div className="p-8  rounded-tl-full rounded-bl-full rounded-br-full col-span-4 green relative">
                                <div class="absolute bottom-0  left-7 right-4 md:left-10">
                                    <img src={sit} alt= "dfam"></img>
                                </div>
                                </div>
                            <div
                                class="md:w-24 md:h-24 w-18 h-18 rounded-tl-full rounded-tr-full side1-col rounded-br-full 
                                inline-flex items-center  justify-center 
                                 ">
                              
                         </div>
                        </div>

                    </div>
            </section>

            <section className="grid grid-cols-1 bg-black my-5 mx-4 blog-phone justify-center align-center align-items-center rounded relate p-3 md:p-8 pt-4">
                <div className="text-center justify-center  ">  
                    <img src={phone} alt= "dfam" className = " phone-abso w- h-96 " />
                         
                <div className = "grid grid-cols-9 gap-0 w-60 md:w-3/6 bg-white p-2 text-black rounded message-abso">
                    <div className = "bg-gray-200 text-right"><i className="fa fa-upload " ></i> </div>
                    <div><i className="fa fa-microphone " ></i></div>
                    <div className = "col-span-6 text-left"><input class="border" type="text" name="first_name" placeholder = "can you help me find a restaurant nearby?" className = "w-5/6 bg-black" /></div>
                    <div className = "text-left">t</div>

                </div>
                </div>
            </section>



            <div className="grid grid-cols-5  gap-12 mt-3 md:mt-12  p-3 md:p-8 pt-4">
                <h2 className = "text-3xl md:text-6xl col-span-3 md:col-span-4"> <b>See What People Are <b className = "text-gre ">Saying About Us</b></b></h2>
                <div className ="ml-0 mt-4 rotate-45 md:mx-1 md:m-5 star"> <img src = {star} alt = "star" className = "w-full"/></div>

            </div>
            </section>
            
            <Footer />

        </>
    );
}
export default Blog;