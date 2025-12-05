import logo from "@/assets/siri-logo2.png";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#021512] border-t border-[#0c2d25]">
      {/* Main Container */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="SIRI Electromotive"
              className="h-12 w-auto mb-6 brightness-110"
            />
            <p className="text-[#9bb7a7] max-w-md mb-6">
              Building a sustainable future with revolutionary AI-powered
              charging technology. Empowering everyone to participate in the
              electric transition.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-[#0d241f] flex items-center justify-center
                  text-[#7fae96] hover:bg-[#0f3a30] hover:text-[#19ff73] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Offerings", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-[#9bb7a7] hover:text-[#19ff73] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold font-display text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#19ff73] mt-0.5" />
                <span className="text-[#9bb7a7]">reachus@siriem.com</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#19ff73] mt-0.5" />
                <span className="text-[#9bb7a7]">+91 9326788704</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#19ff73] mt-0.5" />
                <span className="text-[#9bb7a7]">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#0c2d25] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7fae96] text-sm">
            © {new Date().getFullYear()} SIRI Electromotive. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[#9bb7a7] hover:text-[#19ff73] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-[#9bb7a7] hover:text-[#19ff73] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
