import editor from "../../images/illustration-editor-desktop.svg"

const SectionI = () => {

    return (
    <>
        <h1 className="text-4xl font-overpass text-center pt-20 font-bold">
        Designed for the future
        </h1>
        <div className=" flex flex-col items-start p-32 pt-0 relative">
            <div className="flex flex-col gap-8 mt-16 w-1/2">
                <div className="">
                    <h1 className="text-lg font-bold font-overpass">
                        Introducing an extensible editor
                    </h1>
                    <p className="font-ubuntu text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo asperiores nesciunt beatae debitis dolorum dignissimos, voluptatibus eos, similique magnam molestias quisquam ab error molestiae praesentium. Magni, asperiores fugit. Non!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis, eveniet beatae dolor nemo voluptate voluptates, repellat fugit incidunt magnam quibusdam facilis omnis quam excepturi odio quas neque natus tenetur!
                    </p>
                </div>
                <div className="">
                    <div className="">
                        <h1 className="text-lg font-bold font-overpass">
                            Robust content management
                        </h1>
                        <p className="font-ubuntu text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo asperiores nesciunt beatae debitis dolorum dignissimos, voluptatibus eos, similique magnam molestias quisquam ab error molestiae praesentium. Magni, asperiores fugit. Non!
                        </p>
                    </div>
                </div>
            </div>
            <img src={editor} className="absolute right-0 w-[40%] -top-24" alt="" />
        </div>
    </>
    )
}

export default SectionI