import { FaInstagram, FaYoutube } from "react-icons/fa"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const Footer = () => {
    const handleClick = () =>{
        const email = 'prateekvarshney1224@gmail.com';
        const subject = 'Hello!';
        const body = 'Lets Transform';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

    return (
        <footer id="Contact" className="bg-black text-foreground py-8 mt-10 pb-20">
            <div className="container mx-auto flex sm:justify-between justify-center flex-wrap">
                <div className="flex flex-col gap-10">
                    <div className="w-full sm:w-1/3 text-center sm:text-left  mb-2 sm:mb-0">
                        <h4 className="text-lg font-semibold mb-2">FITNESS</h4>
                        <ul className="space-y-2">
                            <li><div className="flex flex-col sm:flex-row gap-2 text-sm sm:text-md">Website: <a href="https://www.prateekvarshney.com" target="_blank" className="text-gray-200 hover:text-primary">https://www.prateekvarshney.com</a></div></li>
                            <li><div className="flex flex-col sm:flex-row gap-2 text-sm sm:text-md">Youtube: <a href="https://www.youtube.com/@thisisvarshney" target="_blank" className="text-gray-200 hover:text-primary">https://www.youtube.com/@thisisvarshney</a></div></li>
                            <li><div className="flex flex-col sm:flex-row gap-2 text-sm sm:text-md">Instagram: <a href="https://www.instagram.com/this_is_varshney" target="_blank" className="text-gray-200 hover:text-primary">https://www.instagram.com/this_is_varshney</a></div></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
                        <h4 className="text-lg font-semibold mb-2">FINANCE</h4>
                        <ul className="space-y-2">
                            <li><div className="flex flex-col sm:flex-row gap-2 text-sm sm:text-md">Website: <a href="https://www.optiontradingonly.in" target="_blank" className="text-gray-200 hover:text-primary">https://www.optiontradingonly.in</a></div></li>
                            <li><div className="flex flex-col sm:flex-row gap-2 text-sm sm:text-md">Youtube: <a href="https://www.youtube.com/@OptionTradingOnly" target="_blank" className="text-gray-200 hover:text-primary">https://www.youtube.com/@OptionTradingOnly</a></div></li>
                            <li><div className="flex flex-col sm:flex-row gap-2 text-sm sm:text-md">Instagram: <a href="https://www.instagram.com/optiontradingonly" target="_blank" className="text-gray-200 hover:text-primary">https://www.instagram.com/optiontradingonly</a></div></li>
                        </ul>
                    </div>
                    {/* <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
                        <h4 className="text-lg font-semibold mb-2">QUICK LINKS</h4>
                        <ul className="space-y-2">
                            <li><a href="#Home" className="text-sm sm:text-lg hover:text-primary">Home</a></li>
                            <li><a href="#Features" className="text-sm sm:text-lg hover:text-primary">Feature</a></li>
                            <li><a href="#Training" className="text-sm sm:text-lg hover:text-primary">Courses</a></li>
                            <li><a href="#Why Join Us?" className="text-sm sm:text-lg hover:text-primary">Why Join Us?</a></li>
                            <li><a href="#Contact" className="text-sm sm:text-lg hover:text-primary">About Us</a></li>
                            <li><a href="#Finance" className="text-sm sm:text-lg hover:text-primary">Finance</a></li>
                        </ul>
                    </div> */}
                </div>
                <div className="flex flex-col gap-12 sm:gap-14 sm:mt-0 mt-4">
                    <div className="w-full  text-center space-y-2">
                        <h4 className="mt-5 text-lg font-semibold mb-2">CONTACT US</h4>
                        <p className="cursor-pointer" onClick={handleClick}>Email: prateekvarshney1224@gmail.com</p>
                        <p>Instagram: <a href="https://www.instagram.com/this_is_varshney" target="_blank" className="text-gray-200 hover:text-primary">https://www.instagram.com/this_is_varshney</a></p>
                        {/* <p>Address: 123 Example St, City, Country</p> */}
                    </div>    
                    <div className="w-full text-center mb-4 sm:mb-0">
                        <h4 className="text-lg font-semibold mb-2">FOLLOW US</h4>
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.instagram.com/this_is_varshney" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-primary h-6 w-6" />
                            </a>
                            <a href="https://www.youtube.com/@thisisvarshney" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="hover:text-primary h-6 w-6" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <CiMail className="hover:text-primary h-6 w-6 font-bold" onClick={handleClick} />
                            </a>
                            <a href="https://www.youtube.com/@OptionTradingOnly" target="_blank" rel="noopener noreferrer">
                                <FaIndianRupeeSign className="hover:text-primary h-6 w-6" />
                            </a>
                        </div>
                        <div className="mt-5 text-center text-sm">
                            &copy; {new Date().getFullYear()} Prateek Varshney. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
