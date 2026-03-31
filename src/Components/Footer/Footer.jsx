import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "Integrations"],
    },
    { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Community", "Contact"],
    },
  ];

  return (
    <footer className="bg-[#0B1221] text-slate-400 py-12 px-6">
      {/* text-center যোগ করা হয়েছে স্মল ডিভাইসের জন্য, md:text-left বড় ডিভাইসের জন্য */}
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-12">
          
          {/* Brand Section */}
          {/* items-center (mobile) এবং md:items-start (desktop) ব্যবহার করা হয়েছে */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Social Links
            </h3>
            <div className="flex gap-3 justify-center md:justify-start">
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-slate-200 transition-all"
              >
                <svg className="w-5 h-5 text-[#0B1221]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-slate-200 transition-all"
              >
                <svg className="w-5 h-5 text-[#0B1221]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-slate-200 transition-all"
              >
                <svg className="w-4 h-4 text-[#0B1221]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;