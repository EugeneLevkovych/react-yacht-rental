import { BUTTONS } from '../data/buttonsInfo';
import { SOCIAL_ICONS_HEADER } from '../data/socials';
import Button from './Button';
import SvgSocials from './SvgSocials';

export default function Header({ onToggleMenu }) {
  return (
    <header className="h-10.5 md:h-12 xl:w-270 flex justify-between items-center w-full bg-white1 rounded-lg py-1 px-5 md:px-7 xl:px-7.5 mb-49.5 md:mb-50 xl:mb-38.5 mx-auto">
      <nav className="flex items-center">
        <a
          className="font-medium text-sm md:text-xl my-let-spacing1 text-turquoise-blue1"
          href="index.html"
        >
          yachtjet
        </a>
        <ul className="hidden w-70.5 md:flex gap-1 uppercase text-[9px] leading-[1.3] text-white1 md:ml-28 lg:ml-60 xl:ml-74 2xl:ml-94">
          {BUTTONS.map(button => (
            <Button
              key={button.id}
              buttonObj={button}
              hoverColor="turquoise-blue1"
              bgColor="turquoise-blue2"
            />
          ))}
        </ul>
      </nav>
      <ul className="hidden md:flex gap-2">
        {SOCIAL_ICONS_HEADER.map(item => (
          <li key={item.id}>
            <a href={item.href2} target="_blank" rel="noopener noreferrer">
              <SvgSocials svgObj={item} />
            </a>
          </li>
        ))}
      </ul>
      <svg
        onClick={onToggleMenu}
        className="md:hidden size-7 stroke-turquoise-blue1"
      >
        <use href="./sprite.svg#icon-burger"></use>
      </svg>
    </header>
  );
}
