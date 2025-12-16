import { ProductCard } from "./shared/ProductCard";

const products = [
  {
    image: "https://picsum.photos/id/1015/400/300", // Image 1: Phone (Nature)
    productName: "iPhone 13 Pro Max",
    description:
      "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
    specialPrice: 720,
    price: 780,
    productId: 1, // Added ID for key prop stability
    quantity: 10, // Added quantity for availability check
  },
  {
    image: "https://picsum.photos/id/431/400/300", // Image 2: Phone (Tech/Desk)
    productName: "Samsung Galaxy S21",
    description:
      "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
    specialPrice: 699,
    price: 799,
    productId: 2,
    quantity: 5,
  },
  {
    image: "https://picsum.photos/id/357/400/300", // Image 3: Phone (City)
    productName: "Google Pixel 6",
    description:
      "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
    price: 599,
    specialPrice: 400,
    productId: 3,
    quantity: 0, // Set to 0 to test "Stock out" state
  },
];

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* ======================= ABOUT SECTION ======================= */}
      <h1 className="text-slate-800 text-4xl font-extrabold text-center mb-8 w-full">
        <span className="pb-2 border-b-2 border-indigo-500 inline-block">
          About Our Store
        </span>
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-2xl mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img
              src="https://picsum.photos/id/400/800/600"
              alt="Our Dedicated Team"
              className="w-full h-auto rounded-lg shadow-xl object-cover 
                         transition-transform duration-500 transform hover:scale-[1.03]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Welcome to our e-commerce store! We are dedicated to providing the
              **best products and exceptional services** to our valued
              customers. Our mission is to offer a seamless, secure, and
              enjoyable shopping experience, ensuring the highest quality in
              every item we offer.
            </p>
            <p className="text-lg text-gray-600">
              Driven by a passion for quality and customer satisfaction, we
              meticulously curate our collection to bring you the latest trends
              and most reliable goods. We believe in transparency, ethical
              sourcing, and building lasting relationships.
            </p>
          </div>
        </div>
      </div>

      {/* ======================= PRODUCTS SECTION ======================= */}
      <h1 className="text-slate-800 text-4xl font-extrabold text-center mb-12 w-full">
        {/* FIXED: Applied same styling as the "About Our Store" header */}
        <span className="pb-2 border-b-2 border-indigo-500 inline-block">
          Featured Products
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* FIXED: Corrected the map function to implicitly return JSX */}
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            productId={product.productId}
            image={product.image}
            productName={product.productName}
            description={product.description}
            specialPrice={product.specialPrice}
            price={product.price}
            quantity={product.quantity} // Passed quantity prop
            about
          />
        ))}
      </div>
    </div>
  );
};
