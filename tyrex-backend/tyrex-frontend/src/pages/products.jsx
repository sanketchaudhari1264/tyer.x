import mrfLogo from "../assets/mrf.png";
import ceatLogo from "../assets/ceat.png";
import apolloLogo from "../assets/apollo.png";
import bktLogo from "../assets/BKT.png";
import tvsLogo from "../assets/TVS.png";

function Products() {
  const brands = [
    { id: 1, name: "MRF", logo: mrfLogo, description: "Premium quality tyres for all vehicles" },
    { id: 2, name: "CEAT", logo: ceatLogo, description: "Trusted performance and durability" },
    { id: 3, name: "Apollo", logo: apolloLogo, description: "Innovation and safety combined" },
    { id: 4, name: "BKT", logo: bktLogo, description: "Heavy-duty tyres for tough terrains" },
    { id: 5, name: "TVS", logo: tvsLogo, description: "Reliable tyres for two-wheelers" },
  ];

  return (
    <div className="mt-20 px-6 py-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Our Brands
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We collaborate with leading tyre manufacturers to bring you the best quality tyres. 
          Browse through our wide selection of trusted brands.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-200"
          >
            <div className="w-full h-32 flex items-center justify-center mb-4">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {brand.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {brand.description}
            </p>
            <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
              View Products
            </button>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Need Help Choosing?
        </h2>
        <p className="text-gray-600 mb-6">
          Our team is here to help you find the perfect tyres for your business needs.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Products;
