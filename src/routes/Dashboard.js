import "./style.css";
import "../Components/navbar.css"
import Navbar from '../Components/Navbar.js'
import fam from "../family2.png"
import high from "../highfive2.png"
import sit from "../sitting.png"
import phone from "../phone.png"
import whatsapp from "../whatsapp.png"
import messenger from "../message.png"
import handshake from "../handshake.png"
import star from "../star.png"

import Footer from "./footer.js"


function Dashboard (){
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
                                    <img src={fam} alt= "dfgitm"></img>
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
            <section className="grid grid-cols-1 md:grid-cols-2 box gap-12 mt-3 md:mt-12  p-3 md:p-8 pt-4">
                <div className="text-center relate A">  
                    <img src={phone} alt= "dfam" className = " w-full h-full " />
                         
                        <div className="w-32 h-32 border-2 rounded-full bg-white col-span-2 text-black text-center align-center justify-items-center justify-center white abso">
                                
                                 
                                 <img src={messenger}  className ="mt-4 ml-7 w-16"alt= "dfam"></img>
                                   
                        </div>
                        <div className=" w-32 h-32 rounded-tl-full rounded-br-full rounded-tr-full green col-span-2 white abso2 ">

                        </div>
                        <div className="w-24 h-24    rounded-tl-full rounded-br-full rounded-tr-full side1-col col-span-2 white abso3 ">

                        </div>
                        <div className=" w-32 h-32 text-center rounded-full green col-span-2 white abso4 ">
                        <img src={whatsapp}  className ="mt-4 ml-6 w-20" alt= "dfam"></img>
                            
                        </div>

                </div>
                <div className="grid B">
                    <h5 className = "text-5xl m-2">The <b className = "text-gre ">All-in-One</b> Solution for conventional AI</h5>
                    <div className = "bg-white mt-4 rounded md:p-3 p-4 grid  grid-cols-1 justify-center md:grid-cols-5 text-black">
                        <div className = "col-span-4"><h2 className ="my-3 text-2xl"><b>Lorem80ajdsjkasjd js</b></h2>
                            <h3 className = "font-serif">Consider this simplified example involving two threads, Thread 1 and Thread 2, accessing a shared variable :</h3>                    
    
                        </div>
                        <div className = "hidden md:grid green m-2 p-2 rounded"><img src={handshake} alt = "hand" className =" text-white w-24"alt= "dfam"></img></div>
                    </div>
                    <div className = "">
                    <div className ="bg-gray-700 p-3 mt-3 w-full rounded"><h3>Multi-Channel Support</h3></div>
                    <div className ="bg-gray-700 p-3 mt-3 rounded"><h3>AI-Powered Assistant</h3></div>
                    <div className ="bg-gray-700 p-3 mt-3 rounded"><h3>Easy to Use</h3></div>
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
export default Dashboard;