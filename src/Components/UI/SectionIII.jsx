import laptop from "../../images/illustration-laptop-desktop.svg"

const SectionIII = () => {

    return (
        <>
            <h1 className="text-4xl font-overpass text-center pt-20 font-bold">
            Designed for the future
            </h1>
            <div className=" flex items-start p-32 pt-0 ">
                <img src={laptop} className="-left-[20%] relative w-[50%] top-0" alt="" />
                <div className="flex flex-col ml-[-60px] gap-8 mt-20 w-1/2">
                    <div className="">
                        <h1 className="text-lg font-bold font-overpass">
                            Free, open, simple
                        </h1>
                        <p className="font-ubuntu text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo asperiores nesciunt beatae debitis dolorum dignissimos, voluptatibus eos, similique magnam molestias quisquam ab error molestiae praesentium. Magni, asperiores fugit. Non!
                             , eveniet beatae dolor nemo voluptate voluptates, repellat fugit incidunt magnam quibusdam facilis omnis quam excepturi odio quas neque natus tenetur!
                        </p>
                    </div>
                    <div className="">
                        <div className="">
                            <h1 className="text-lg font-bold font-overpass">
                                Powerful tooling
                            </h1>
                            <p className="font-ubuntu text-sm text-gray-500">
                                Lorem ipsum Blanditiis explicabo asperiores nesciunt beatae debitis dolorum dignissimos, voluptatibus eos, similique magnam molestias quisquam ab error molestiae praesentium. Magni, asperiores fugit. Non!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionIII