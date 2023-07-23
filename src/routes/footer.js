import "./style.css";
import "./footer.css";


function Footer (){
    return(
        <>   
        
            <section className= "    w-6/6 box bg-black footer gap-3 pb-12 mt-44   p-3  md:p-8 pt-12">
                <div className = "footer-child p-10 md:p-20 w-92  md:mx-28 mx-6 rounded grid grid-cols-1  md:text-left text-center md:grid-cols-5">
                    <div className ="col-span-4">
                    <h4 className = "text-black text-3xl font-bold">Join the OmniGPT</h4>
                    <h4 className = "text-white text-3xl font-bold"><span className = "text-black text-3xl font-bold bg-transparent">community</span> and transform the way you collaborate</h4>
                    </div>
                    <div>
                        <button className = "bg-black text-white p-3 m-4 col-span-1 btn">Get Started Now</button>
                    </div>
                
                </div>

                <div className = " container py-12 grid grid-cols-2 mt-44 md:grid-cols-4 md:px-0 px-10" >
                  <div className ="col-span-4  md:my-0 mt-28 mb-4 md:col-span-1">
                    <h2 className="footer-logo">
                    omnigpt<i className="fa fa-arrow-up arrow" ></i> 
                    </h2>
                </div>
                  <div className = "col-span-2 md:col-span-1">
                    <h4 className = "pb-4">Lorem ispur</h4>
                    <h4 className = "pb-4">Lorem ispur</h4>
                    <h4 className = "pb-4">Lorem ispur</h4>
                    <h4 className = "pb-4">Lorem ispur</h4>
                    <h4 className = "pb-4">Lorem ispur</h4>
                  
                  </div>
                  <div>
                  <h4 className = "pb-4 text-gre">LOREM ISPUR DOLAR</h4>
                  <h4 className = "pb-4">Lorem ispur</h4>
                  <h4 className = "pb-4">Lorem ispur</h4>
                  <h4 className = "pb-4">Lorem ispur</h4>

                  </div>
                  <div className ="hidden md:grid">
                    <h4 className = "pb-4 ">Join our newsletter</h4>
                    <input type = "email" placeholder ="email" />
                </div>
            </div>
            </section>
           
         
        </>
    );
}

export default Footer;