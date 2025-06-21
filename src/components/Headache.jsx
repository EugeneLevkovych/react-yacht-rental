import { BUTTONS } from '../data/buttonsInfo';
import { SOCIAL_ICONS_HEADER } from '../data/socials';
import Button from './Button';
import SvgSocials from './SvgSocials';

export default function Headache() {
  return (
    <div className="h-10.5 md:h-12 absolute left-[50%] top-5 -translate-x-1/2 flex justify-between items-center max-w-83.5 md:max-w-176 xl:max-w-270 2xl:max-w-310 w-full bg-white1 rounded-lg py-1 px-5 md:px-7 xl:px-7.5">
      <nav className="flex items-center">
        <a
          className="font-medium text-sm md:text-xl my-let-spacing1 text-turquoise-blue1"
          href="index.html"
        >
          yachtjet
        </a>
        <ul className="hidden md:flex gap-1 uppercase text-[9px] leading-[1.3] text-white1 md:ml-28 xl:ml-74">
          {BUTTONS.map(button => (
            <Button key={button.id} buttonObj={button} />
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
      <svg className="md:hidden size-7 stroke-turquoise-blue1">
        <use href="./sprite.svg#icon-burger"></use>
      </svg>
    </div>
  );
}
