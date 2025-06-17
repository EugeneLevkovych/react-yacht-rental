import yacht1mobSm from '../assets/our-yachts-img/our-yachts1-desk.jpg';
import yacht1mobBig from '../assets/our-yachts-img/our-yachts1-desk@2x.jpg';

export default function OurYachts() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-80 mb-10 mx-auto">
        <h2 className="font-medium text-[28px] leading-none my-let-spacing2 text-center text-white1">
          Choose your dream yacht and sail away into the sunset
        </h2>
      </div>
      <ul className="bg-white1 rounded-3xl pt-4 pb-8 px-4 mb-10">
        <li>
          <div className="w-full rounded-3xl overflow-hidden mb-8">
            <img
              className="w-full h-full object-cover"
              srcSet={`
              ${yacht1mobBig} 2x,
              ${yacht1mobSm} 1x
            `}
              src={yacht1mobSm}
              alt="White yacht"
            />
          </div>
          <div className="mx-8">
            <div className="flex justify-between items-center border-b border-gray1 uppercase pb-4 mb-4">
              <p className="font-medium text-sm leading-[1.18] my-let-spacing3 text-turquoise-blue1">
                Arrow
              </p>
              <p className="text-turquoise-blue3 opacity-[.4]">Luxury Yachts</p>
            </div>
            <div className="flex justify-between text-sm leading-[1.18] tracking-[.03em] text-turquoise-blue3">
              <ul className="uppercase opacity-[.4]">
                <li>LENGTH</li>
                <li>BUILDER</li>
                <li>BUILT</li>
                <li>GUESTS</li>
                <li>PRICE</li>
              </ul>
              <ul>
                <li>48m(155ft)</li>
                <li>Admiral</li>
                <li>2021</li>
                <li>11 in 5 cabins</li>
                <li>€33,500,000</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <a
        className="max-w-45 block bg-transparent hover:bg-white1 font-medium text-lg leading-[1.28] my-let-spacing2 text-white1 hover:text-turquoise-blue1 border border-white3 transition-all rounded-2xl px-10 py-4 mx-auto"
        href="#"
      >
        Yacht rental
      </a>
    </div>
  );
}
