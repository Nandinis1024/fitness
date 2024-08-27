import { FaInstagram, FaTelegram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="Contact" className="bg-black text-foreground py-8 mt-10">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <div className="w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#Home" className="hover:text-primary">Home</a></li>
                        <li><a href="#Feature" className="hover:text-primary">Feature</a></li>
                        <li><a href="#Courses" className="hover:text-primary">Courses</a></li>
                        <li><a href="#Why Join Us" className="hover:text-primary">Why Join Us?</a></li>
                        <li><a href="#Contact" className="hover:text-primary">About Us</a></li>
                        <li><a href="#open-demo" className="hover:text-primary">Open Demo</a></li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex justify-center space-x-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-primary h-6 w-6" />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="hover:text-primary h-6 w-6" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="hover:text-primary h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-primary h-6 w-6" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-primary h-6 w-6" />
                        </a>
                    </div>
                    <div className="mt-8 text-center text-sm">
                        &copy; {new Date().getFullYear()} Prateek Varshney. All rights reserved.
                    </div>
                </div>
                <div className="w-full sm:w-1/3 text-center sm:text-right">
                    <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                    <div className="mb-4">
                        <div className="flex justify-center sm:justify-end">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-lg bg-white text-black focus:outline-none"
                            />
                            <button className="p-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark">
                                Send
                            </button>
                        </div>
                    </div>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Example St, City, Country</p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
