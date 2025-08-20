
import { Mail, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left - Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Drop us a Line.</h2>
          <p className="mb-8 text-gray-200">
            Ask us a question, or just say Hello.
          </p>

          <form className="space-y-4">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name *"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name *"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Message *"
              className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-center space-y-10 pl-10">
          
          {/* Contact Us */}
          <div className="flex items-center space-x-4">
            <Mail className="w-8 h-8 text-blue-300" />
            <div>
              <h4 className="font-semibold text-white">Contact us</h4>
              <a
                href="mailto:khatkeamit10@gmail.com"
                className="text-blue-200 hover:text-blue-400 transition"
              >
                khatkeamit10@gmail.com
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="mx-1">
            <h4 className="font-semibold text-white mb-4">Connect with us</h4>
            <div className="flex flex-col space-y-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/i_am_ak_1718"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-200 hover:text-pink-500 transition"
              >
                <Instagram className="w-6 h-6" />
                <span>@Amit_Khatke_1718</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amit-khatke-b481ab235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-200 hover:text-blue-400 transition"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
