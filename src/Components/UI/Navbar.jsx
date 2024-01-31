import logo from "../../images/logo.svg"
import down from "../../images/icon-arrow-light.svg"

const Navbar = () => {

    return (
        <div className="flex text-white px-20 py-10 justify-between font-ubuntu z-20">
            <ul className="flex justify-center items-center font-semibold text-sm">
                <li className="mr-10">
                    <img src={logo} alt="" />
                </li>
                <li className="flex justify-center items-center mx-3">
                    Product
                    <img src={down} alt="" className="mx-1" />
                </li>
                <li className="flex justify-center items-center mx-3">
                    Company
                    <img src={down} alt="" className="mx-1" />
                </li>
                <li className="flex justify-center items-center mx-3">
                    Connect
                    <img src={down} alt="" className="mx-1" />
                </li>
            </ul>
            
            <div className="font-bold">
                <button className="py-2 px-3">
                    Login
                </button>
                <button className="py-3 px-5 rounded-full bg-white text-orange-500">
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Navbar