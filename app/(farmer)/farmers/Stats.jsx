export default function Stats() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-4">
      <div className="text-center">
        <div className="dark:text-primary-400 mb-2 text-4xl font-bold text-primary-600">
          500+
        </div>
        <div className="text-gray-600 dark:text-gray-400">Active Farmers</div>
      </div>
      <div className="text-center">
        <div className="dark:text-primary-400 mb-2 text-4xl font-bold text-primary-600">
          50+
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          Districts Covered
        </div>
      </div>
      <div className="text-center">
        <div className="dark:text-primary-400 mb-2 text-4xl font-bold text-primary-600">
          2000+
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          Products Available
        </div>
      </div>
      <div className="text-center">
        <div className="dark:text-primary-400 mb-2 text-4xl font-bold text-primary-600">
          95%
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          Organic Certified
        </div>
      </div>
    </div>
  );
}
