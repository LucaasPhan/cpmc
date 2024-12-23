import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-[#010101] text-color justify-evenly fixed bottom-0 w-full">
        <div className="flex flex-row items-center justify-between py-2 gap-3 flex-wrap px-[25vw]">
          <div className="flex justify-center items-center py-2 mr-10 text-sm">
            <p>© 2024 Central Park Media Crew</p>
          </div>
          <div className="flex items-center justify-center flex-shrink-0">
            <a 
              href="https://instagram.com/cpmc.vcp/"
              title="Instagram"
              target="_blank"
              rel="noopener"
              className="mr-1">
                <FaInstagram className="color"></FaInstagram>
              </a>
              <a 
              href="https://facebook.com/cpmc.vcp"
              title="Instagram"
              target="_blank"
              rel="noopener">
                <FaFacebook className="color"></FaFacebook>
              </a>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;