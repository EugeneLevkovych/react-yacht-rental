import Header from './Header';

export default function Hero({ onToggleMenu }) {
  return (
    <div className="md:max-w-192 lg:max-w-256 xl:max-w-320 2xl:max-w-360 w-full bg-center bg-cover bg-[url(assets/hero-img/hero-bg-mob@2x.jpg)] md:bg-[url(assets/hero-img/hero-bg-tab@2x.jpg)] xl:bg-[url(assets/hero-img/hero-bg-desktop@2x.jpg)] 2xl:bg-[url(assets/hero-img/hero-bg-deskmax@2x.jpg)] mx-auto">
      <div className="container pt-5 md:pt-8 pb-75.5 cont-p-m">
        <Header onToggleMenu={onToggleMenu} />
        <h1 className="font-medium text-[2rem] md:text-[4.38rem] xl:text-[5rem] my-let-spacing2 text-center leading-none text-white1 mb-6">
          Explore the High Seas with Our Luxury Yacht Rentals
        </h1>
        <p className="font-light text-xs md:text-base leading-[1.16] md:leading-[1.4] text-white2 text-center md:px-13.5 xl:px-50.5 mb-9.5 md:mb-12">
          Experience the freedom and luxury of yachting on the open seas. Choose
          from our top-of-the-line yachts and embark on an unforgettable journey
          surrounded by breathtaking views and state-of-the-art amenities.
        </p>
        <a
          className="max-w-45 block bg-turquoise-blue1 hover:bg-white1 font-medium text-lg leading-[1.28] my-let-spacing2 text-white1 hover:text-turquoise-blue1 transition-all rounded-2xl px-10 py-4 mx-auto"
          href="#"
        >
          Yacht rental
        </a>
      </div>
    </div>
  );
}
