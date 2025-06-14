export default function Hero() {
  return (
    <div className="bg-center bg-cover bg-[url(assets/hero-bg-mob@2x.jpg)] md:bg-[url(assets/hero-bg-tab@2x.jpg)] xl:bg-[url(assets/hero-bg-desktop@2x.jpg)] 2xl:bg-[url(assets/hero-bg-deskmax@2x.jpg)]">
      <div className="relative container mx-auto pt-65 pb-75.5 px-4">
        <h1 className="text-white">
          Explore the High Seas with Our Luxury Yacht Rentals
        </h1>
        <p className="text-white">
          Experience the freedom and luxury of yachting on the open seas. Choose
          from our top-of-the-line yachts and embark on an unforgettable journey
          surrounded by breathtaking views and state-of-the-art amenities.
        </p>
      </div>
    </div>
  );
}
