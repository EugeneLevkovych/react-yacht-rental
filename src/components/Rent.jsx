import rentMob from '../assets/rent-img/rent-mob.jpg';
import rentMob2 from '../assets/rent-img/rent-mob@2x.jpg';
import rentTab from '../assets/rent-img/rent-tab.jpg';
import rentTab2 from '../assets/rent-img/rent-tab@2x.jpg';
import rentDesk from '../assets/rent-img/rent-desk.jpg';
import rentDesk2 from '../assets/rent-img/rent-desk@2x.jpg';
import rentMax from '../assets/rent-img/rent-max.jpg';
import rentMax2 from '../assets/rent-img/rent-max@2x.jpg';

export default function Rent() {
  return (
    <div className="container flex flex-wrap xl:flex-nowrap xl:flex-row-reverse 2xl:justify-end gap-20 md:gap-25 xl:gap-12.5 cont-p-m">
      <div className="w-full xl:w-118">
        <form className="md:max-w-118 mx-auto xl:mx-0 [&_input]:mb-4.5 ">
          <h2 className="font-medium text-[28px] md:text-5xl leading-none my-let-spacing2 text-white1 mb-10 md:mb-12.5">
            Rent a yacht now
          </h2>
          <input className="my-input" type="text" placeholder="Full Name" />
          <input className="my-input" type="text" placeholder="Email" />
          <input className="my-input" type="text" placeholder="Phone number" />
          <textarea
            className="my-input h-27 md:h-29 mb-10 md:mb-12.5"
            name="feedback"
            id="feedback"
            placeholder="Comment"
          ></textarea>
          <button
            className="bg-turquoise-blue1 font-medium text-sm md:text-lg leading-[1.28] md:leading-[1.1] my-let-spacing2 text-white1 rounded-2xl px-11 md:px-18.5 py-[14px] md:py-[18px]"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <div className="w-full xl:w-164.5 2xl:w-192 rounded-3xl overflow-hidden">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`
                          ${rentMax} 1x,
                          ${rentMax2} 2x
                        `}
          />
          <source
            media="(min-width: 1280px)"
            srcSet={`
                          ${rentDesk} 1x,
                          ${rentDesk2} 2x
                        `}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`
                          ${rentTab} 1x,
                          ${rentTab2} 2x
                        `}
          />
          <source
            media="(max-width: 767px)"
            srcSet={`
                          ${rentMob} 1x,
                          ${rentMob2} 2x
                        `}
          />
          <img
            className="w-full h-full object-cover"
            src="./assets/rent-img/rent-mob.jpg"
            alt="Yacht"
          />
        </picture>
      </div>
    </div>
  );
}
