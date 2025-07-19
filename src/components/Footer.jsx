import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-500 text-white pt-10 pb-5">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policy</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+1 800 123 4567</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <span>support@ecomshop.com</span>
            </li>
            <li>123 Market Street, Ecom City</li>
          </ul>
        </div>

        {/* Social & Apps */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#"><FaGooglePlay size={24} /></a>
            <a href="#"><FaApple size={24} /></a>
          </div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 mt-10 pt-5 text-center text-sm opacity-70">
        &copy; {new Date().getFullYear()} Quick Shopping. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
