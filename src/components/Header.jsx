export default function Header() {
  return (
    <div className="h-10.5 absolute left-[50%] top-5 -translate-x-1/2 flex justify-between items-center max-w-83.5 md:max-w-176 w-full bg-white1 rounded-lg px-5">
      <nav className="flex">
        <a
          className="font-medium text-sm text-turquoise-blue1"
          href="index.html"
        >
          yachtjet
        </a>
        <ul className="hidden md:flex uppercase text-[9px] leading-[1.3] text-white1">
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
      <ul className="hidden md:flex">
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
      </ul>
      <svg className="size-7 stroke-turquoise-blue1">
        <use href="./sprite.svg#icon-burger"></use>
      </svg>
    </div>
  );
}
