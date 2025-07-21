import advYachtMob from '../assets/advantages-img/advantages-mob.jpg';
import advYachtMob2 from '../assets/advantages-img/advantages-mob@2x.jpg';
import advYachtTab from '../assets/advantages-img/advantages-tab.jpg';
import advYachtTab2 from '../assets/advantages-img/advantages-tab@2x.jpg';
import advYachtDesk from '../assets/advantages-img/advantages-desk.jpg';
import advYachtDesk2 from '../assets/advantages-img/advantages-desk@2x.jpg';
import advYachtMax from '../assets/advantages-img/advantages-max.jpg';
import advYachtMax2 from '../assets/advantages-img/advantages-max@2x.jpg';

export default function Advantages() {
  return (
    <div className="container flex flex-wrap xl:flex-nowrap gap-5 md:gap-8 mb-20 cont-p-m">
      <ol className="my-counter w-full xl:w-174 2xl:w-192 flex flex-wrap justify-center md:gap-x-8 gap-y-10 md:gap-y-11  rounded-3xl bg-turquoise-blue1 [&_p]:counter-text [&_li]:w-full [&_li]:md:max-w-76 [&_li]:xl:max-w-70 px-5 md:px-8 xl:px-12.5 py-20 md:py-22.5">
        <li className="before:counter">
          <p>Swimming and water sports: try your hand at water skiing</p>
        </li>
        <li className="before:counter">
          <p className="">Fishing: try to catch your own dinner</p>
        </li>
        <li className="before:counter">
          <p className="">
            Sightseeing tours: take a shore or island tour, enjoy the views and
            sunsets from the water{' '}
          </p>
        </li>
        <li className="before:counter">
          <p className="">
            Rest and relaxation: read a book or listen to music while enjoying
            the outdoor atmosphere.
          </p>
        </li>
      </ol>
      <div className="w-full xl:w-108 2xl:w-135 rounded-3xl overflow-hidden">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`
                    ${advYachtMax} 1x,
                    ${advYachtMax2} 2x
                  `}
          />
          <source
            media="(min-width: 1280px)"
            srcSet={`
                    ${advYachtDesk} 1x,
                    ${advYachtDesk2} 2x
                  `}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`
                    ${advYachtTab} 1x,
                    ${advYachtTab2} 2x
                  `}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`
                    ${advYachtMob} 1x,
                    ${advYachtMob2} 2x
                  `}
          />
          <img
            className="w-full h-full object-cover"
            src="./assets/advantages.jpg"
            alt="Yacht"
          />
        </picture>
      </div>
    </div>
  );
}
