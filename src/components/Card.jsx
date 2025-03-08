import PropTypes from "prop-types";
import { addItem } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Card({ product }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleAddCard = () => {
    setLoading(true);
    dispatch(addItem({ ...product, quantity: 1 }));

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div className="bg-amber-50 border border-gray-300 shadow-md rounded-lg w-68 h-[420px] p-3 flex flex-col justify-between transition-transform duration-200 hover:scale-105">
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="w-full h-32 object-contain rounded-md"
      />

      {/* Product Title */}

      <div className="flex flex-col items-center text-center mt-13">
        <h3 className="text-md font-semibold text-gray-800">{product.title}</h3>
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-center text-center  space-y-1 flex-grow justify-center">
        <p className="text-sm text-gray-600">
          Brand: <span className="font-medium">{product.brand}</span>
        </p>
        <p className="text-sm text-gray-600">
          Price:{" "}
          <span className="text-blue-600 font-bold">
            ${product.price.toFixed(2)}
          </span>
        </p>
        <p className="text-sm text-gray-600">
          Stock:{" "}
          <span
            className={product.stock > 5 ? "text-green-600" : "text-red-600"}
          >
            {product.availabilityStatus}
          </span>
        </p>
        <p className="text-xs text-gray-500 text-center ">
          ⭐ {product.rating}
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-evenly text-xs text-gray-500 border-t pt-1 mt-2">
        <span>SKU: {product.sku}</span>
        <span>Warranty: {product.warrantyInformation}</span>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddCard}
        className="mt-3 bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700 transition mb-2"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}

// PropTypes validation
Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    availabilityStatus: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    sku: PropTypes.string.isRequired,
    warrantyInformation: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;

// import PropTypes from "prop-types";
// import { addItem } from "../features/cartSlice";
// import { useDispatch } from "react-redux";

// function Card({ product }) {
//   const dispatch = useDispatch();

//   const handleAddCard = () => {
//     const item = {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       quantity: 1,
//     };
//     dispatch(addItem(item));
//   };

//   return (
//     <div className="border border-gray-300 shadow-md rounded-lg w-64 p-4 flex flex-col gap-y-2">
//       {/* Product Image */}
//       <img
//         src={product.thumbnail}
//         alt={product.title}
//         loading="lazy"
//         className="w-full h-40 object-contain rounded-md"
//       />

//       {/* Product Details */}
//       <div className="text-center flex flex-col gap-y-1">
//         <h3 className="text-md font-semibold text-gray-800">{product.title}</h3>
//         <p className="text-sm text-gray-600">Brand: {product.brand}</p>
//         <p className="text-sm text-blue-600 font-bold">
//           ₹{product.price.toFixed(2)}
//         </p>
//         <p
//           className={`text-sm ${
//             product.stock > 5 ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           {product.availabilityStatus}
//         </p>
//       </div>

//       {/* Rating */}
//       <p className="text-xs text-gray-500 text-center">⭐ {product.rating}</p>

//       {/* Footer Details */}
//       <div className="flex justify-between text-xs text-gray-500 border-t pt-2">
//         <span>SKU: {product.sku}</span>
//         <span>Warranty: {product.warrantyInformation}</span>
//       </div>

//       {/* Add to Cart Button */}
//       <button
//         onClick={handleAddCard}
//         className="bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 transition"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// // PropTypes validation
// Card.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     thumbnail: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     brand: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     stock: PropTypes.number.isRequired,
//     availabilityStatus: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     sku: PropTypes.string.isRequired,
//     warrantyInformation: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default Card;
