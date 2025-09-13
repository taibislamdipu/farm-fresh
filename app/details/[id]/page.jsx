import { getProductById } from "@/database/queries";
import dbConnect from "@/dbConnect/mongo";
import productModel from "@/models/product-model";
import Link from "next/link";
import { FaBolt, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import AddToCart from "../AddToCart";
import AddToFavorite from "../AddToFavorite";
import Breadcrumb from "../Breadcrumb";
import ProductGallery from "../ProductGallery";
import Quantity from "../Quantity";
import RelatedProducts from "../RelatedProducts";

export async function generateMetadata({ params }) {
  await dbConnect();
  const product = await productModel.findById(params.id).lean();

  return {
    title: product ? `${product.name} - FarmFresh` : "FarmFresh",
    description: product
      ? `${product.description}`
      : "Connect directly with local farmers and get the freshest produce delivered to your doorstep",
  };
}

export async function generateStaticParams() {
  await dbConnect();

  const products = await productModel.find({}, { _id: 1 }).lean();

  return products.map((product) => ({
    id: product._id.toString(),
  }));
}

export default async function ProductDetails({ params: { id } }) {
  const product = await getProductById(id);

  const isPurchased = false;
  const numReviews = 0;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product?.name },
  ];

  const featureColors = {
    organic:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    pesticide_free:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    fresh: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    non_gmo:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    local: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    sustainable:
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    fair_trade:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    gluten_free: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {product?.images && <ProductGallery images={product?.images} />}

          <div className="space-y-6">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                {product?.productFeatures?.map((feature) => (
                  <span
                    key={feature}
                    className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${featureColors[feature]}`}
                  >
                    {feature.replace(/_/g, " ")}
                  </span>
                ))}
              </div>
              <h1 className="mb-2 text-3xl font-bold capitalize text-gray-900 dark:text-white">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Produced by{" "}
                <span className="dark:text-primary-400 font-semibold text-primary-600">
                  {product.harvestFrom}
                </span>
              </p>
            </div>

            {/* <!-- Rating and Reviews --> */}
            <div className="flex items-center space-x-4">
              {numReviews > 0 && (
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    4.8
                  </span>
                </div>
              )}
              <span className="text-gray-500 dark:text-gray-400">
                ({numReviews} reviews)
              </span>
              {isPurchased && (
                <button className="dark:text-primary-400 text-primary-600 hover:underline">
                  Write a review
                </button>
              )}
            </div>

            {/* <!-- Price and Stock --> */}
            <div className="rounded-xl bg-gray-100 p-6 dark:bg-gray-800">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="dark:text-primary-400 text-3xl font-bold text-primary-600">
                    ৳{product.pricePerUnit}
                  </span>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    /kg
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Available Stock
                  </p>
                  <p className="space-x-1 text-lg font-semibold text-gray-900 dark:text-white">
                    <span>{product?.stock}</span>
                    <span className="capitalize">{product?.unit}</span>
                  </p>
                </div>
              </div>

              <div className="mb-4 flex items-center text-gray-600 dark:text-gray-400">
                <FaLocationDot className="mr-2" />
                <span>{product.farmLocation}</span>
              </div>
            </div>

            <Quantity product={product} />

            <div className="space-y-3">
              <Link href="/payment">
                <button className="flex w-full items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-200 hover:bg-primary-700 hover:shadow-lg dark:bg-primary-700 dark:hover:bg-primary-800">
                  <FaBolt className="mr-2" />
                  Buy Now
                </button>
              </Link>
              <AddToCart product={product} />
              <AddToFavorite product={product} />
            </div>

            {/* <!-- Farmer Contact --> */}
            <div className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-10007003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                  alt="Rahim"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Rahim Ahmed
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Farmer since 2015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Product Description --> */}
        <div className="mt-16">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button className="dark:text-primary-400 border-b-2 border-primary-500 px-1 py-4 text-sm font-medium text-primary-600">
                Description
              </button>
              <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                Reviews (127)
              </button>
              <button className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                Farmer Info
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="mb-1 font-semibold">About This Product</h3>
              <p className="mb-4 mt-2">{product.description}</p>

              <h4 className="mb-1 mt-6 font-semibold">Key Features:</h4>
              <ul>
                <li>100% Organic - No pesticides or chemical fertilizers</li>
                <li>Vine-ripened for optimal taste and nutrition</li>
                <li>Harvested within 24 hours of delivery</li>
                <li>Rich in vitamins C, K, and antioxidants</li>
                <li>Perfect for salads, cooking, and sauces</li>
              </ul>

              <h4 className="mb-1 mt-6 font-semibold">Storage Instructions:</h4>
              <p>
                Store at room temperature for best flavor. Refrigerate only when
                fully ripe to extend shelf life. Use within 5-7 days for optimal
                freshness.
              </p>

              <h4 className="mb-1 mt-6 font-semibold">
                Nutritional Information (per 100g):
              </h4>
              <ul>
                <li>Calories: 18</li>
                <li>Vitamin C: 14mg</li>
                <li>Potassium: 237mg</li>
                <li>Folate: 15mcg</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Reviews Section --> */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Customer Reviews
            </h2>
            <button className="rounded-lg bg-primary-600 px-4 py-2 font-medium text-white transition hover:bg-primary-700">
              Write a Review
            </button>
          </div>

          {/* <!-- Review Summary --> */}
          <div className="mb-8 rounded-xl bg-white p-6 dark:bg-gray-800">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center space-x-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    4.8
                  </span>
                  <div>
                    <div className="mb-1 flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Based on 127 reviews
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-8 text-sm">5★</span>
                  <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 w-[75%] rounded-full bg-yellow-400"></div>
                  </div>
                  <span className="w-8 text-sm text-gray-500 dark:text-gray-400">
                    95
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-8 text-sm">4★</span>
                  <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 w-[20%] rounded-full bg-yellow-400"></div>
                  </div>
                  <span className="w-8 text-sm text-gray-500 dark:text-gray-400">
                    25
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-8 text-sm">3★</span>
                  <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 w-[4%] rounded-full bg-yellow-400"></div>
                  </div>
                  <span className="w-8 text-sm text-gray-500 dark:text-gray-400">
                    5
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-8 text-sm">2★</span>
                  <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 w-[1%] rounded-full bg-yellow-400"></div>
                  </div>
                  <span className="w-8 text-sm text-gray-500 dark:text-gray-400">
                    1
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-8 text-sm">1★</span>
                  <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 w-[1%] rounded-full bg-yellow-400"></div>
                  </div>
                  <span className="w-8 text-sm text-gray-500 dark:text-gray-400">
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Individual Reviews --> */}
          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
                  alt="Sarah"
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Sarah Johnson
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-sm text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Absolutely amazing tomatoes! The taste is incredible - so
                    fresh and flavorful. You can really tell the difference when
                    they're picked ripe and delivered quickly. Will definitely
                    order again!
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <button className="dark:hover:text-primary-400 hover:text-primary-600">
                      <i className="far fa-thumbs-up mr-1"></i>Helpful (12)
                    </button>
                    <button className="dark:hover:text-primary-400 hover:text-primary-600">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                  alt="Mike"
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Mike Chen
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-sm text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          1 week ago
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Great quality tomatoes, very fresh and organic as
                    advertised. Delivery was on time. Only minor issue was that
                    a couple of tomatoes were slightly overripe, but overall
                    very satisfied.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <button className="dark:hover:text-primary-400 hover:text-primary-600">
                      <i className="far fa-thumbs-up mr-1"></i>Helpful (8)
                    </button>
                    <button className="dark:hover:text-primary-400 hover:text-primary-600">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
                  alt="Lisa"
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Lisa Rahman
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-sm text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          2 weeks ago
                        </span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    Perfect for making fresh salsa! The tomatoes were juicy,
                    flavorful, and had the perfect texture. Rahim's farm
                    consistently delivers high-quality produce. Highly
                    recommend!
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <button className="dark:hover:text-primary-400 hover:text-primary-600">
                      <i className="far fa-thumbs-up mr-1"></i>Helpful (15)
                    </button>
                    <button className="dark:hover:text-primary-400 hover:text-primary-600">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Load More Reviews --> */}
          <div className="mt-8 text-center">
            <button className="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              Load More Reviews
            </button>
          </div>
        </div>

        <RelatedProducts product={product} />
      </div>
    </div>
  );
}
