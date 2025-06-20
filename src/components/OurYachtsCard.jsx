export default function OurYachtsCard({ cardObj }) {
  const CURRENCY = '€';
  return (
    <li className="bg-white1 rounded-3xl pt-4 pb-8 px-4 mb-10">
      <div className="w-full rounded-3xl overflow-hidden mb-8">
        <img
          className="w-full h-full object-cover"
          srcSet={`
              ${cardObj.yachtBigImg} 2x,
              ${cardObj.yachtImg} 1x
            `}
          src={cardObj.yachtBigImg}
          alt="Yacht"
        />
      </div>
      <div className="mx-8">
        <div className="flex justify-between items-center border-b border-gray1bord uppercase pb-4 mb-4">
          <p className="font-medium text-sm leading-[1.18] my-let-spacing3 text-turquoise-blue1">
            {cardObj.yachtName}
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
            <li>{cardObj.length}</li>
            <li>{cardObj.builder}</li>
            <li>{cardObj.built}</li>
            <li>{cardObj.guests}</li>
            <li>
              {CURRENCY}
              {cardObj.price}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
