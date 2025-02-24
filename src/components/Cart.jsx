import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../features/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // console.log(cartItems);

  // Calculate total payable amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="p-2 bg-gray-200 rounded-md flex justify-between items-center transition duration-200 hover:bg-gray-300"
              >
                <span>
                  {item.title} - Price: ${item.price.toFixed(2)} - Quantity:{" "}
                  {item.quantity}
                </span>
                <div className="space-x-2">
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded transition duration-200 hover:bg-green-600"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded transition duration-200 hover:bg-red-600"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <button
                    className="px-2 py-1 bg-gray-500 text-white rounded transition duration-200 hover:bg-gray-600"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">
              Total Payable Amount: ${totalAmount.toFixed(2)}
            </h3>
          </div>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded transition duration-200 hover:bg-blue-600"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;

// // import { useSelector, useDispatch } from "react-redux";
// // import {
// //   increaseQuantity,
// //   decreaseQuantity,
// //   removeItem,
// //   clearCart,
// // } from "../features/cartSlice";

// // function Cart() {
// //   const cartItems = useSelector((state) => state.cart.items);
// //   const dispatch = useDispatch();

// //   return (
// //     <div className="container mx-auto p-5">
// //       <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
// //       {cartItems.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <>
// //           <ul className="space-y-2">
// //             {cartItems.map((item) => (
// //               <li
// //                 key={item.id}
// //                 className="p-2 bg-gray-200 rounded-md flex justify-between items-center"
// //               >
// //                 <span>
// //                   {item.title} - Price: ${item.price.toFixed(2)} - Quantity:{" "}
// //                   {item.quantity}
// //                 </span>
// //                 <div className="space-x-2">
// //                   <button
// //                     className="px-2 py-1 bg-green-500 text-white rounded"
// //                     onClick={() => dispatch(increaseQuantity(item.id))}
// //                   >
// //                     +
// //                   </button>
// //                   <button
// //                     className="px-2 py-1 bg-red-500 text-white rounded"
// //                     onClick={() => dispatch(decreaseQuantity(item.id))}
// //                   >
// //                     -
// //                   </button>
// //                   <button
// //                     className="px-2 py-1 bg-gray-500 text-white rounded"
// //                     onClick={() => dispatch(removeItem(item.id))}
// //                   >
// //                     Remove
// //                   </button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //           <button
// //             className="mt-4 p-2 bg-blue-500 text-white rounded"
// //             onClick={() => dispatch(clearCart())}
// //           >
// //             Clear Cart
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default Cart;
// import { useSelector, useDispatch } from "react-redux";
// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeItem,
//   clearCart,
// } from "../features/cartSlice";

// function Cart() {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   console.log(cartItems);
//   // Calculate total payable amount
//   const totalAmount = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="container mx-auto p-5">
//       <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="space-y-2">
//             {cartItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="p-2 bg-gray-200 rounded-md flex justify-between items-center"
//               >
//                 <span>
//                   {item.title} - Price: ${item.price.toFixed(2)} - Quantity:{" "}
//                   {item.quantity}
//                 </span>
//                 <div className="space-x-2">
//                   <button
//                     className="px-2 py-1 bg-green-500 text-white rounded"
//                     onClick={() => dispatch(increaseQuantity(item.id))}
//                   >
//                     +
//                   </button>
//                   <button
//                     className="px-2 py-1 bg-red-500 text-white rounded"
//                     onClick={() => dispatch(decreaseQuantity(item.id))}
//                   >
//                     -
//                   </button>
//                   <button
//                     className="px-2 py-1 bg-gray-500 text-white rounded"
//                     onClick={() => dispatch(removeItem(item.id))}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold">
//               Total Payable Amount: ${totalAmount.toFixed(2)}
//             </h3>
//           </div>
//           <button
//             className="mt-4 p-2 bg-blue-500 text-white rounded"
//             onClick={() => dispatch(clearCart())}
//           >
//             Clear Cart
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;
