import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact Info */}
          <div className="bg-blue-500 text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-6 text-sm opacity-90">
              Wed love to hear from you! Reach out to us with any questions or feedback.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-lg" />
                <span>support@ecomshop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-lg" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-lg" />
                <span>123 Market Street, Ecom City</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h3>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-600">Message</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-sm text-sm transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map (optional) */}
        <div className="mt-8">
          <iframe
            title="Google Map"
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.356188989446!2d-122.41941508468172!3d37.774929779759494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2d1b5295ff%3A0xa8933e3f049912c!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1618325694650!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
