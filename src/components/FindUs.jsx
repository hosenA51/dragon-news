import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl mb-3">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start border-2">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn join-item justify-start border-2">
                    <FaTwitter></FaTwitter> Twitter
                </button>
                <button className="btn join-item justify-start border-2">
                    <FaInstagram></FaInstagram> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;