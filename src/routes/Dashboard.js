import "./style.css";
import "../Components/navbar.css"
import Navbar from '../Components/Navbar.js'
import fam from "../family2.png"
import high from "../highfive2.png"
import sit from "../sitting.png"
import phone from "../phone.png"




function Dashboard (){
    return(
        <>
    <Navbar />
    <section className = " mx-28">
            <section className= " grid  w-6/6   grid-cols-1 md:grid-cols-2 gap-12 mt-3 md:mt-12 p-4 pt-4">
                    <div className=" text-white  mb-5">
                       <h1 className=" text-5xl md:text-7xl md:font-bold">Bring the Power of AI to your conversation</h1> 

                        <h3 className="md:text-4xl text-3xl mt-4">Work Faster, Smarter and Better Together</h3>
                        <h5 className="md:text-2xl  mt-4">Experience the power of AI models with OmniGPT, Our chat platdorm provide seemless communication across multiple channels</h5>
                    
                        <h3 className="text-2xl mt-8">Try OmniGPT for free, 15-day trial, no credit card required</h3>
                        <button className="btn w-full md:w-2/6 p-2 mt-3 green text-white  text-2ml md:text-1xl">Start your free trial.</button>
                    </div>
                   
                    <div className="ml-0 md:ml-12">
                        <div  className="text-gray-500  text-center grid grid-cols-3 gap-4 text-lg">
                            <div className="p-8 col-span-2 w-full  b-2 rounded-tl-full rounded-bl-full rounded-br-full side1-col relative">
                            <div class="absolute bottom-0 left-7 right-4 md:left-10">
                                    <img src={fam} alt= "dfgitm"></img>
                                </div>
                            </div>

                            <div
                                class="md:w-24 md:h-24 w-20 h-20 rounded-full 
                                inline-flex items-center side2-col justify-center 
                                ">
                                <i className =" text-7xl fa fa-arrow-left  rotate-45 text-white   "></i>
                         </div>
                        </div>

                        
                        <div  className="text-gray-500 hidden md:grid mt-5 gap-4 grid-cols-3 text-lg">
                                <div
                                        class="md:w-24 md:h-24 w-18 h-18 col-span-1 rounded-full 
                                        inline-flex items-center green justify-center 
                                        font-bold">
                                        <i className =" text-7xl fa fa-arrow-up  rotate-45 text-white"></i>
                                </div>
                                <div className="p-8 ml-0 rounded-full col-span-2 inline-flex bg-gray-100 relative">
                                <div class="absolute bottom-0 left-7 right-4 md:left-10">
                                    <img src={high} alt= "dfam"></img>
                                </div>
                                </div>
                        </div>

                        <div  className="text-gray-500 hidden md:grid  mt-5 grid grid-cols-1 text-lg">
                            <div className="p-8  rounded-tl-full rounded-tr-full rounded-br-full  text-center side2-col "> </div>   
                        </div>

                        <div  className="text-gray-500 hidden md:grid mt-5 grid grid-cols-3 gap-3 text-lg ">
                            <div className="p-8  rounded-tl-full rounded-bl-full rounded-br-full col-span-2 green relative">
                                <div class="absolute bottom-0  left-7 right-4 md:left-10">
                                    <img src={sit} alt= "dfam"></img>
                                </div></div>
                            <div
                                class="md:w-24 md:h-24 w-18 h-18 rounded-tl-full rounded-tr-full side1-col rounded-br-full 
                                inline-flex items-center  justify-center 
                                 ">
                              
                         </div>
                        </div>

                    </div>
            </section>
            <section className="  grid grid-cols-1 md:grid-cols-2 gap-12 mt-3 md:mt-12 p-4 pt-4">
                <div className="text-center relate">  
                    <img src={phone} alt= "dfam" className="w-full h-full m-12 ">
                        
                    </img> 
                    <div className="md:w-24 md:h-24 w-18 h-18 rounded-full bg-white col-span-2 white abso">
                        </div>
                        <div className="md:w-24 md:h-24 w-18 h-18   rounded-full bg-white col-span-2 white abso2 ">
                        </div>
                        <div className="md:w-24 md:h-24 w-18 h-18   rounded-full bg-white col-span-2 white abso3 ">
                        </div>
                        <div className=" md:w-24 md:h-24 w-18 h-18 rounded-full col-span-2 green abso4 ">
                        </div>
                </div>
                <div className="text-center">ssfs</div>
            </section>
            </section>
        </>
    );
}
export default Dashboard;