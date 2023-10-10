import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              in lacinia nisl, vel blandit justo.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <address className="text-gray-400">
              <p>Email: example@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: 123 Main Street, City, Country</p>
            </address>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
