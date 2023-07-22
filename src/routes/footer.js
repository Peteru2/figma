import "./style.css";
import "./footer.css";









function Footer (){
    return(
        <>   
        
            <section className= "    w-6/6 box bg-black  gap-3 pb-12 mt-20 md:mt-12 p-3 md:p-8 pt-12">
                <div className = " container py-12 grid grid-cols-2 md:grid-cols-4" >
                  <div className ="col-span-4  mb-3 md:col-span-1">
                    <h2 className="footer-logo">
                    omnigpt<i className="fa fa-arrow-up arrow" ></i> 
                    </h2>
                </div>
                  <div>
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