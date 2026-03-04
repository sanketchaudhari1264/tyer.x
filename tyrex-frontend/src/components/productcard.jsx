function ProductCard({ name, price }) {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{name}</h2>
      <p className="text-lg text-gray-600 mb-4">Price: {price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Enquire Now
      </button>
    </div>
  );
}

export default ProductCard;
