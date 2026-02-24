import { faFacebook, faInstagram, faSquareLinkedin, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image';
export default function Footer() {
    return (
        <div>
            <section className="flex flex-col bg-[#f3f4f6] dark:bg-[#1e2939] items-center justify-center mt-400 md:mt-50 -10 lg:gap-20 px-6 md:px-12 lg:px-28 py-16 lg:py-24">
           <Image
                      src="/footer-img.jpg"
                      alt="footer"
                      width={1000}
                      height={250}
                      className=" w-64 sm:w-80 md:w-[250px] lg:w-[500px] object-cover hover:scale-105 transition-transform duration-500 shadow-2xl"
                    />
            <div className=" text-black dark:text-white text-center p-5 rounded-2xl mt-5 shadow-lg  bg- dark:bg-[#31314f] transition-transform duration-500">
                <a href="https://www.facebook.com" target='/blank'>    <FontAwesomeIcon icon={faFacebook} className="text-[40px]" />       </a> 
                <a href="https://www.youtube.com" target='/blank'>    <FontAwesomeIcon icon={faYoutube} className="text-[40px]" />        </a>          
                <a href="https://www.instagram.com"target='/blank'>    <FontAwesomeIcon icon={faInstagram} className="text-[40px]" />      </a>            
                <a href="https://www.linkedin.com"target='/blank'>    <FontAwesomeIcon icon={faSquareLinkedin} className="text-[40px]" /> </a>                 
                <a href="https://www.x.com" target='/blank'>    <FontAwesomeIcon icon={faXTwitter} className="text-[40px]" /> <br /></a>                 
                </div>
            <div className=" mt-10 md:mt-0 p-5 text-black dark:text-white text-center rounded-2xl  shadow-lg  transition-transform duration-500">
<p className="text-[15px] md:text-[25px] " dir="rtl">
  جميع الحقوق محفوظة  Branding Media  <span className='text-[40px]'>&copy;</span>
</p>
                </div>
            </section>

        </div>
    );
};
