import { FaTelegram } from "react-icons/fa";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import { images } from "@/constants";
import img3 from "/prateek-intro-3.jpg";

const My = () => {

    return (
        <div id="Home" className="h-full w-full">
            <Navbar />

            <div className="flex items-center justify-center sm:pt-20 pt-12">
                <div className="h-72 w-full mx-6 mb-4 rounded-md flex items-center justify-center">
                    <ImagesSlider className="max-h-[20rem] rounded-md" images={images}>
                        <motion.div
                            initial={{
                            opacity: 0,
                            y: -80,
                            }}
                            animate={{
                            opacity: 1,
                            y: 0,
                            }}
                            transition={{
                            duration: 0.6,
                            }}
                            className="z-50 flex flex-col justify-center items-center"
                        >
                            <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                                Transform Your Fitness Journey with <span className="text-primary">Prateek's</span> Expert Coaching <br /> Personalized Plans, Proven Results!
                            </motion.p>
                            <a href="#Courses">
                                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-foreground mx-auto text-center rounded-full relative mt-4">
                                    <span> <a href="#Training">Transform Yourself →</a></span>
                                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                                </button>
                            </a>
                        </motion.div>
                    </ImagesSlider>
                </div>
            </div>

            <div className="my-4 mx-4 md:mx-8 flex flex-col items-center justify-center space-y-2">
                {/* <h1 className="text-2xl text-primary text-center flex items-center justify-center max-w-prose gap-2">
                    Join Our Telegram Community for best fitness advice and courses
                    
                </h1> */}
                <p className="text-md text-center max-w-prose text-muted-foreground flex items-center justify-center">
                    *We do not offer medical advice, please consult your health professional if needed
                </p>
            </div>

            <div className="py-12 my-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-6">
                        <div className="w-full md:w-7/12 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Know Your Trainer</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                            Meet Prateek, a dedicated fitness coach with over 5 years of experience in helping clients achieve their health and fitness goals. Prateek specializes in personalized workout plans and nutritional guidance tailored to your unique needs. His approach is not just about physical transformation but also fostering a positive and sustainable lifestyle change.
                            </p>
                            <p className="text-lg text-muted-foreground">
                            Whether you're a beginner or an experienced athlete, Prateek's expert coaching will help you unlock your full potential. Join his personal training program today and take the first step towards a healthier, happier you.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-5/12 h-64 rounded-full overflow-hidden">
                            <img className="w-full h-full object-cover" src={img3} alt="Prateek" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default My;