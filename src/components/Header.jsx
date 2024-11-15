import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-4">
            <div className="logo">
                <img className="w-[400px]" src={logo} alt="" />
            </div>
            <h2 className="text-lg font-normal text-gray-400">Journalism Without Fear or Favour</h2>
            <p className="font-medium text-xl text-gray-500">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;