import { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import Card from "./Card";

function CardList() {
  const { items, status, error } = useFetchData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;

  const totalPage = Math.ceil(items.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const curentItems = items.slice(startIndex, startIndex + itemPerPage);

  if (status === "loading")
    return (
      <div className="flex items-center justify-center h-screen">
        <h4 className="text-lg font-semibold text-blue-700">Loading.....</h4>
      </div>
    );
  if (status === "failed")
    return (
      <div className="flex items-center justify-center h-screen">
        <h4 className="text-lg font-semibold text-red-600">{error}</h4>
      </div>
    );

  return (
    <div>
      {/* displaying cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {curentItems.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      {/* pegination */}

      <div className="flex justify-center m-2 gap-10">
        <button
          className={`bg-blue-500 px-4 py-1 rounded-lg cursor-pointer
           ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500"}  `}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Prev
        </button>
        <span>{`${currentPage} of ${totalPage}`}</span>
        <button
          className={` px-4 py-1 rounded-lg cursor-pointer
            ${currentPage === totalPage ? "bg-gray-300" : "bg-blue-500"}
            `}
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage((prev) => Math.max(prev + 1, 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CardList;
