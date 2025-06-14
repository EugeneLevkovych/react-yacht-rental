export default function Header() {
  return (
    <div className="h-10.5 md:h-12 absolute left-[50%] top-5 -translate-x-1/2 flex justify-between items-center max-w-83.5 md:max-w-176 xl:max-w-270 w-full bg-white1 rounded-lg py-1 px-5 md:px-7 xl:px-7.5">
      <nav className="flex items-center">
        <a
          className="font-medium text-sm md:text-xl text-turquoise-blue1"
          href="index.html"
        >
          yachtjet
        </a>
        <ul className="hidden md:flex gap-1 uppercase text-[9px] leading-[1.3] text-white1 md:ml-28 xl:ml-74">
          <li className="flex justify-center items-center w-22.5 h-10 rounded-lg bg-turquoise-blue2 hover:bg-turquoise-blue1">
            About
          </li>
          <li className="flex justify-center items-center w-22.5 h-10 rounded-lg bg-turquoise-blue2 hover:bg-turquoise-blue1">
            Yachts
          </li>
          <li className="flex justify-center items-center w-22.5 h-10 rounded-lg bg-turquoise-blue2 hover:bg-turquoise-blue1">
            Reviews
          </li>
        </ul>
      </nav>
      <ul className="hidden md:flex gap-2">
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="size-6 fill-turquoise-blue1">
              <use href="./sprite.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="size-6 fill-turquoise-blue1">
              <use href="./sprite.svg#icon-youtube"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="size-6 fill-turquoise-blue1">
              <use href="./sprite.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
      <svg className="md:hidden size-7 stroke-turquoise-blue1">
        <use href="./sprite.svg#icon-burger"></use>
      </svg>
    </div>
  );
}
