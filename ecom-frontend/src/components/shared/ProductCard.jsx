import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import truncateText from "../../utils/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast";

export const ProductCard = ({
  productId,
  productName,
  image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
  about = false,
}) => {
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const btnLoader = false;
  const isAvailable = quantity && Number(quantity) > 0;
  const dispatch = useDispatch();

  const productData = {
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  };

  const handleProductView = () => {
    if (!about) {
      setOpenProductViewModal(true);
    }
  };

  const addToCartHandler = (cartItems, e) => {
    if (e) e.stopPropagation();
    dispatch(addToCart(cartItems, 1, toast));
  };

  const handleCardClick = () => {
    handleProductView(productData);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCardClick();
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="w-full overflow-hidden aspect-3/2 shrink-0">
        <img
          src={image}
          alt={productName}
          className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col grow">
        <h2 className="text-lg font-semibold mb-4 cursor-pointer h-12">
          {truncateText(productName, 50)}
        </h2>

        <div className="h-16 mb-3 overflow-hidden">
          <p className="text-gray-600 text-sm">
            {truncateText(description, 80)}
          </p>
        </div>

        {!about && (
          <div className="flex items-end justify-between mt-auto">
            {" "}
            <div className="flex flex-col items-start leading-none min-h-10 justify-end">
              {specialPrice ? (
                <>
                  <span className="text-gray-400 line-through text-sm">
                    ${Number(price).toFixed(2)}
                  </span>
                  <span className="text-xl font-bold text-slate-700">
                    ${Number(specialPrice).toFixed(2)}
                  </span>
                </>
              ) : (
                // Use pt-3 to push the single price down, matching the baseline of the two-line display
                <span className="text-xl font-bold text-gray-700 pt-3">
                  ${Number(price).toFixed(2)}
                </span>
              )}
            </div>
            <button
              disabled={!isAvailable || btnLoader}
              onClick={(e) => addToCartHandler(productData, e)}
              className={`bg-blue-500 ${
                isAvailable
                  ? "opacity-100 hover:bg-blue-600 cursor-pointer"
                  : "opacity-70"
              } text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center h-10`}
            >
              <FaShoppingCart className="mr-2" />
              {isAvailable ? "Add to Cart" : "Stock out"}
            </button>
          </div>
        )}
      </div>
      <ProductViewModal
        isOpen={openProductViewModal}
        setIsOpen={setOpenProductViewModal}
        product={productData}
        isAvailable={isAvailable}
      />
    </div>
  );
};
