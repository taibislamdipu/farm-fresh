import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p class="text-gray-400 mb-4 mt-4">
              Connecting communities with fresh, local produce directly from
              farmers.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="index.html" class="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="products.html" class="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="farmers.html" class="hover:text-white">
                  Farmers
                </a>
              </li>
              <li>
                <a href="about.html" class="hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">For Farmers</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="register.html" class="hover:text-white">
                  Join as Farmer
                </a>
              </li>
              <li>
                <a href="create.html" class="hover:text-white">
                  Add Products
                </a>
              </li>
              <li>
                <a href="manageList.html" class="hover:text-white">
                  Manage Listings
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Farmer Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 FarmFresh - Local Farmer Booking. All rights reserved by
            LWS.
          </p>
        </div>
      </div>
    </footer>
  );
}
