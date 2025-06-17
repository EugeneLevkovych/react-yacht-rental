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
    <div className="container flex flex-wrap xl:flex-nowrap gap-20 md:gap-25 xl:gap-12.5 mx-auto px-4">
      <div className="w-full xl:w-3/5">
        <h2 className="font-medium text-[28px] leading-none my-let-spacing2 text-white1 mb-10">
          Rent a yacht now
        </h2>
        <form className="mb-10 space-y-4.5">
          <input
            className="w-full border rounded-xl border-gray2"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full border rounded-xl border-gray2"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full border rounded-xl border-gray2"
            type="text"
            placeholder="Phone number"
          />
          <textarea
            className="w-full border rounded-xl border-gray2"
            name="feedback"
            id="feedback"
            placeholder="Comment"
          ></textarea>
        </form>
        <button
          className="bg-turquoise-blue1 font-medium leading-[1.28] my-let-spacing2 text-white1 text-sm rounded-2xl px-11 py-[14px]"
          type="submit"
        >
          Send
        </button>
      </div>
      <div className="w-full xl:w-2/5 rounded-3xl overflow-hidden">
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
            src="./assets/rent-img/rent-mob.jpg"
            alt="Yacht"
            className="w-full h-auto object-cover"
          />
        </picture>
      </div>
    </div>
  );
}
