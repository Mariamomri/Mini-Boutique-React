import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="iconf">
        <div className="divIcon">
          <FaTwitter />
        </div>

        <div className="divIcon">
          <FaFacebookF />
        </div>

        <div className="divIcon">
          <FaYoutube />
        </div>

        <div className="divIcon">
          <FaLinkedinIn />
        </div>
    </div>
  );
}

