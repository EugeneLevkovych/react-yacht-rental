export default function ReviewsCard({ cardObj }) {
  return (
    <div
      className="w-full bg-white1 rounded-3xl px-9 py-8 cursor-pointer"
      id="reviews"
    >
      <img
        className="size-14 mx-auto mb-6"
        srcSet={`${cardObj.img2} 2x`}
        src={cardObj.img}
        alt={cardObj.user}
      />

      <p className="font-md text-lg leading-[1.1] my-let-spacing2 text-center text-turquoise-blue3 mb-2">
        {cardObj.user}
      </p>
      <p className="text-gray1 opacity-[.4]">{cardObj.comment}</p>
    </div>
  );
}
