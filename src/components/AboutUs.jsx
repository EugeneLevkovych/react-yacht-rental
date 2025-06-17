import yachtAboutMob from '../assets/about-mob.png';
import yachtAboutMob2 from '../assets/about-mob@2x.png';
import yachtAboutTab from '../assets/about-tab.png';
import yachtAboutTab2 from '../assets/about-tab@2x.png';
import yachtAboutDesktop from '../assets/about-desktop.png';
import yachtAboutDesktop2 from '../assets/about-desktop@2x.png';
import yachtAboutDeskmax from '../assets/about-deskmax.png';
import yachtAboutDeskmax2 from '../assets/about-deskmax@2x.png';

export default function AboutUs() {
  return (
    <div className="container -mt-17 mx-auto px-4" id="about-us">
      <div className="xl:flex bg-white1 rounded-3xl my-let-spacing2 pt-10 md:pt-12.5 pb-30 md:pb-32.5 xl:pb-45 px-5 md:px-8 xl:px-12.5">
        <div>
          <h2 className="font-medium text-[28px] md:text-5xl leading-none text-turquoise-blue1 mb-10 md:mb-12.5">
            YachtJet fleet is here to take you on the ultimate adventure
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-lg md:text-[23px] leading-none text-turquoise-blue1 mb-5">
            From spacious decks to state-of-the-art technology, our yachts are
            designed to provide the perfect blend of luxury and functionality.
          </p>
          <p className="text-xs md:text-[13px] leading-[1.16] md:leading-[1.15] text-turquoise-blue3 opacity-[.4]">
            Take a look at our selection below and choose the yacht that matches
            your needs and preferences.No matter which yacht you choose, our
            experienced crew will ensure that your journey is smooth and
            enjoyable. Book now and get ready for an unforgettable adventure on
            the high seas.
          </p>
        </div>
      </div>
      <div className="-mt-20">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`
            ${yachtAboutDeskmax} 1x,
            ${yachtAboutDeskmax2} 2x
          `}
          />
          <source
            media="(min-width: 1280px)"
            srcSet={`
            ${yachtAboutDesktop} 1x,
            ${yachtAboutDesktop2} 2x
          `}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`
            ${yachtAboutTab} 1x,
            ${yachtAboutTab2} 2x
          `}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`
            ${yachtAboutMob} 1x,
            ${yachtAboutMob2} 2x
          `}
          />
          <img
            src="./assets/about-mob.jpg"
            alt="adventure on a yacht under the starry sky"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </picture>
      </div>
    </div>
  );
}
