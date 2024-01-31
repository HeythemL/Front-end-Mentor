import pattern from "../../images/bg-pattern-circles.svg"
import phones from "../../images/illustration-phones.svg"


const SectionII = () => {

    return(

        <div className="relative">
            <img src={phones} className="left-20 absolute w-[35%] -top-20 z-10" alt="" />
            <div className="bg-gradient-to-r flex from-black_blue to-black_blue2 overflow-hidden relative flex justify-end text-white p-24 rounded-tr-[100px] rounded-bl-[100px]">
                    <img src={pattern} className="absolute -left-[5%] w-[60%] -top-[80%] z-0" alt="" />
                <div className="px-24 w-1/2">
                    <h1 className="text-xl font-bold font-overpass my-2">
                        State of the Art Infrastructure
                    </h1>
                    <p className="font-ubuntu text-gray-400 text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga hic numquam fugiat in tempora delectus quasi debitis ea blanditiis neque pariatur sapiente mollitia minima, dolorem alias nihil magni nulla. Alias?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionII 