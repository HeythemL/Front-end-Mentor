

const Hero = () => {

    return(
        <div className="flex flex-col items-center mt-16 text-white">
            <h1 className="text-6xl font-overpass font-semibold my-4">
                A modern publishing platform
            </h1>
            <h2 className="mb-10">
                Grow your audience and build your online brand
            </h2>
            <div className="font-bold text-sm my-5">
                <button className="py-3 px-5 mx-2 rounded-full bg-white text-orange-500">
                    Start for FREE
                </button>
                <button className="py-3 px-6 mx-2 rounded-full border-2 border-white ">
                    Learn More
                </button>
            </div>
        </div>
    )
} 

export default Hero