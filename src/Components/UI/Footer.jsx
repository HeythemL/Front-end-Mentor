import logo from "../../images/logo.svg"

const Footer = () => {

    return(
        <div className="bg-gray-800 text-white font-ubuntu flex justify-between items-start p-20 rounded-tr-[130px]">
            <img src={logo} className="w-[10%]" alt="" />
            <ul className="text-sm">
                <li className="font-bold my-3">Product</li>
                <li className="text-gray-400 my-1">Overview</li>
                <li className="text-gray-400 my-1">Pricing</li>
                <li className="text-gray-400 my-1">Marketplace</li>
                <li className="text-gray-400 my-1">Features</li>
                <li className="text-gray-400 my-1">Integration</li>
            </ul>
            <ul className="text-sm">
                <li className="font-bold my-3">Company</li>
                <li className="text-gray-400 my-1">About</li>
                <li className="text-gray-400 my-1">Team</li>
                <li className="text-gray-400 my-1">Blog</li>
                <li className="text-gray-400 my-1">Careers</li>
            </ul>
            <ul className="text-sm">
                <li className="font-bold my-3">Connect</li>
                <li className="text-gray-400 my-1">Contact</li>
                <li className="text-gray-400 my-1">Newsettler</li>
                <li className="text-gray-400 my-1">LinkedIn</li>
            </ul>

        </div>
    )
}

export default Footer