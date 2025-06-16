export default function Hero() {
  return (
    <div className="max-w-94 md:max-w-192 xl:max-w-320 2xl:max-w-360 w-full bg-center bg-cover bg-[url(assets/hero-bg-mob@2x.jpg)] md:bg-[url(assets/hero-bg-tab@2x.jpg)] xl:bg-[url(assets/hero-bg-desktop@2x.jpg)] 2xl:bg-[url(assets/hero-bg-deskmax@2x.jpg)] mx-auto">
      <div className="container mx-auto pt-65 md:pt-70 xl:pt-58.5 pb-75.5 px-4">
        <h1 className="font-medium text-[2rem] md:text-[4.38rem] xl:text-[5rem] my-let-spacing2 text-center leading-none text-white1 mb-6">
          Explore the High Seas with Our Luxury Yacht Rentals
        </h1>
        <p className="font-light text-xs md:text-base leading-[1.16] md:leading-[1.4] text-white2 text-center md:px-13.5 xl:px-50.5 mb-9.5 md:mb-12">
          Experience the freedom and luxury of yachting on the open seas. Choose
          from our top-of-the-line yachts and embark on an unforgettable journey
          surrounded by breathtaking views and state-of-the-art amenities.
        </p>
        <a
          className="max-w-45 block bg-turquoise-blue1 hover:bg-white1 font-medium text-lg leading-[1.1] my-let-spacing2 text-white1 hover:text-turquoise-blue1 transition-all rounded-2xl px-10 py-4 mx-auto"
          href="#"
        >
          Yacht rental
        </a>
      </div>
    </div>
  );
}
