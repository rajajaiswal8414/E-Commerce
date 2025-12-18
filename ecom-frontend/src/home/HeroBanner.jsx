import { bannerLists } from "../utils/bannerLists";
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export const HeroBanner = () => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-yellow-500",
    "bg-indigo-500",
  ];

  return (
    <div className="py-2 rounded-md">
      <Swiper
        grabCursor={true}
        effect="fade" // Added 'effect' prop to enable EffectFade module
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
      >
        {bannerLists.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div
              className={`rounded-md sm:h-[500px] h-96 ${
                // 1. Check if 'item.image' exists
                item.image ? "bg-cover bg-center" : colors[i % colors.length]
              }`}
              // 2. Dynamically set the background-image CSS style
              style={
                item.image ? { backgroundImage: `url(${item.image})` } : {}
              }
            >
              {/* Added a dark overlay for text readability on images */}
              <div
                className={`flex items-center justify-center w-full h-full ${
                  item.image ? "bg-black/40" : ""
                }`}
              >
                <div className="text-center p-4">
                  <h3 className="text-3xl text-white font-bold">
                    {item.title}
                  </h3>
                  <h1 className="text-5xl text-white font-bold mt-2">
                    {item.subtitle}
                  </h1>
                  <p className="text-white font-bold mt-4 max-w-2xl mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
