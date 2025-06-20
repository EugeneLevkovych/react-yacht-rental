import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import OurYachtsCard from './OurYachtsCard';
import { OUR_YACHTS_INFO } from '../data/ourYachtsInfo';

export default function OurYachts() {
  return (
    <div className="container py-20 cont-p-m">
      <div className="max-w-80 mb-10 mx-auto">
        <h2 className="font-medium text-[28px] leading-none my-let-spacing2 text-center text-white1">
          Choose your dream yacht and sail away into the sunset
        </h2>
      </div>
      <ul className="">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1440: {
              spaceBetween: 32,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {OUR_YACHTS_INFO.map(item => (
            <SwiperSlide key={item.id}>
              <OurYachtsCard cardObj={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
      <a
        className="max-w-45 block bg-transparent hover:bg-white1 font-medium text-lg leading-[1.28] my-let-spacing2 text-white1 hover:text-turquoise-blue1 border border-white3 transition-all rounded-2xl px-10 py-4 mx-auto"
        href="#"
      >
        Yacht rental
      </a>
    </div>
  );
}
