import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { REVIEWS_INFO } from '../data/reviewsInfo';
import ReviewsCard from './ReviewsCard';

export default function Reviews() {
  return (
    <div className="container my-let-spacing2 text-center text-white1 py-37.5 cont-p-m">
      <h2 className="text-medium text-[28px] leading-none mb-[25px]">
        YachtJet take pride in providing the best possible service and
        experience to our customers
      </h2>
      <p className="text-xs leading-[1.16] opacity-[.4] md:mx-16.5 mb-10">
        Our customers have enjoyed unforgettable moments on our yachts. Don't
        just take our word for it - read on to find out what they have to say
        about their journey with us.
      </p>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {REVIEWS_INFO.map(item => (
          <SwiperSlide key={item.id}>
            <ReviewsCard cardObj={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
