import { FaEnvelope, FaUserPlus } from "react-icons/fa";
import { FaHandshakeSimple, FaLeaf } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
export default function AboutPage() {
  return (
    <div>
      <div className="bg-primary-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold">About FarmFresh</h1>
          <p className="mx-auto max-w-3xl text-xl text-primary-100">
            We're on a mission to connect communities with fresh, local produce
            while supporting sustainable farming practices across Bangladesh.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              To revolutionize the way people access fresh, organic produce by
              creating a direct connection between local farmers and consumers.
              We believe in supporting sustainable agriculture while providing
              communities with the freshest, most nutritious food possible.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Through our platform, we empower farmers to reach wider markets,
              earn fair prices for their produce, and build lasting
              relationships with customers who value quality and sustainability.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop"
              alt="Farm landscape"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              These core values guide everything we do and shape our commitment
              to farmers and customers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <FaLeaf className="dark:text-primary-400 text-2xl text-primary-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Sustainability
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We promote eco-friendly farming practices that protect our
                environment for future generations.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <FaHandshakeSimple className="dark:text-primary-400 text-2xl text-primary-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building strong relationships between farmers and consumers to
                create thriving local communities.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <SlBadge className="dark:text-primary-400 text-2xl text-primary-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ensuring the highest standards of freshness, taste, and
                nutritional value in every product.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Impact</h2>
            <p className="text-xl text-primary-100">
              Making a difference in communities across Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">500+</div>
              <div className="text-primary-200">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">10,000+</div>
              <div className="text-primary-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">50+</div>
              <div className="text-primary-200">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">2,000+</div>
              <div className="text-primary-200">Products Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Passionate individuals working together to transform agriculture and
            food distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
              alt="CEO"
              className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
              Ahmed Rahman
            </h3>
            <p className="dark:text-primary-400 mb-2 text-primary-600">
              CEO & Founder
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Former agricultural engineer with 15+ years of experience in
              sustainable farming.
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
              alt="CTO"
              className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
              Fatima Khan
            </h3>
            <p className="dark:text-primary-400 mb-2 text-primary-600">CTO</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Technology leader passionate about using innovation to solve
              agricultural challenges.
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Head of Operations"
              className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
              Karim Hassan
            </h3>
            <p className="dark:text-primary-400 mb-2 text-primary-600">
              Head of Operations
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Supply chain expert ensuring efficient delivery from farm to
              table.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Have questions about our platform or want to learn more about
            partnering with us?
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@farmfresh.com"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition hover:bg-primary-700"
            >
              <FaEnvelope size={24} className="mr-2" />
              Contact Us
            </a>
            <a
              href="/registration"
              className="inline-flex items-center justify-center rounded-lg border border-primary-600 px-6 py-3 font-medium text-primary-600 transition hover:bg-primary-50 dark:hover:bg-primary-900"
            >
              <FaUserPlus size={24} className="mr-2" />
              Join as Farmer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
