import { BUTTONS } from '../data/buttonsInfo';
import { SOCIAL_ICONS_FOOTER } from '../data/socials';
import Button from './Button';
import SvgSocials from './SvgSocials';

export default function MobileMenu({ onToggleMenu }) {
  return (
    <div className="flex flex-col md:hidden w-full min-h-screen z-50 bg-turquoise-blue4 pt-4 pb-10 px-5">
      <div className="flex justify-between items-center bg-white1 rounded-lg px-5 py-3 mb-50">
        <a
          className="font-medium text-sm my-let-spacing1 text-turquoise-blue1"
          href="index.html"
        >
          yachtjet
        </a>
        <svg
          onClick={onToggleMenu}
          className="md:hidden size-7 stroke-turquoise-blue1"
        >
          <use href="./sprite.svg#icon-close"></use>
        </svg>
      </div>

      <ul className="flex flex-col items-center gap-1 text-white1">
        {BUTTONS.map(button => (
          <Button
            key={button.id}
            buttonObj={button}
            hoverColor="turquoise-blue1"
            bgColor="turquoise-blue6"
          />
        ))}
      </ul>

      <ul className="flex gap-2 justify-center mt-auto">
        {SOCIAL_ICONS_FOOTER.map(item => (
          <li key={item.id}>
            <a href={item.href2} target="_blank" rel="noopener noreferrer">
              <SvgSocials svgObj={item} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
