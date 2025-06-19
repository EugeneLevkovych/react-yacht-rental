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
    <div className="container flex flex-wrap xl:flex-nowrap gap-5 px-4 mx-auto mb-20">
      <ol className="my-counter w-full xl:w-3/5 rounded-3xl bg-turquoise-blue1 [&_p]:counter-text px-5 py-20">
        <li className="before:counter">
          <p className="">
            Swimming and water sports: try your hand at water skiing
          </p>
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
      <div className="w-full xl:w-2/5 rounded-3xl overflow-hidden">
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
            src="./assets/advantages.jpg"
            alt="Yacht"
            className="w-full h-auto object-cover"
          />
        </picture>
      </div>
    </div>
  );
}
