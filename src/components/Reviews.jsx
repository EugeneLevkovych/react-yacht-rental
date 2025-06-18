import rev1Img from '../assets/reviews-img/reviews1.png';
import rev1Img2x from '../assets/reviews-img/reviews1@2x.png';

export default function Reviews() {
  return (
    <div className="container my-let-spacing2 text-center text-white1 mx-auto px-4 py-37.5">
      <h2 className="text-medium text-[28px] leading-none mb-[25px]">
        YachtJet take pride in providing the best possible service and
        experience to our customers
      </h2>
      <p className="text-xs leading-[1.16] opacity-[.4] md:mx-16.5 mb-10">
        Our customers have enjoyed unforgettable moments on our yachts. Don't
        just take our word for it - read on to find out what they have to say
        about their journey with us.
      </p>
      <ul>
        <li className="w-full bg-white1 rounded-3xl px-9 py-8">
          <img
            className="size-14 mx-auto mb-6"
            srcSet={`${rev1Img2x} 2x`}
            src={rev1Img}
            alt="John Wax"
          />

          <p className="font-md text-lg leading-[1.1] my-let-spacing2 text-center text-turquoise-blue3 mb-2">
            John Wax
          </p>
          <p className="text-gray1 opacity-[.4]">
            I rented the Lagoon 620 with my family for a week-long vacation and
            it was the best decision ever. The yacht was spacious, comfortable,
            and luxurious, and the crew took care of everything.
          </p>
        </li>
      </ul>
    </div>
  );
}
