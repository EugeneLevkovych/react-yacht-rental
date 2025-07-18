import { BUTTONS } from '../data/buttonsInfo';
import { SOCIAL_ICONS_FOOTER } from '../data/socials';
import Button from './Button';
import SvgSocials from './SvgSocials';

export default function Footer() {
  return (
    <div className="container cont-p-m">
      <div className="text-white1 bg-turquoise-blue1 rounded-t-3xl pt-10 md:pt-12.5 pb-5 px-7.5 md:px-12 xl:px-18.5">
        <div className="flex flex-col md:flex-row md:justify-between gap-20 mb-10 md:mb-24">
          <div className="flex justify-between md:gap-27.5 lg:gap-65 xl:gap-82.5 2xl:gap-102.5">
            <a
              className="font-medium text-sm my-let-spacing1 text-white1"
              href="index.html"
            >
              yachtjet
            </a>
            <ul className="w-51.5 md:w-70.5 flex gap-1 uppercase text-[9px] leading-[1.3]">
              {BUTTONS.map(button => (
                <Button
                  key={button.id}
                  buttonObj={button}
                  hoverColor="white1"
                  hoverTextColor="turquoise-blue1"
                  bgColor="turquoise-blue5"
                />
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:block">
            <ul className="flex gap-2">
              {SOCIAL_ICONS_FOOTER.map(item => (
                <li key={item.id}>
                  <a
                    href={item.href2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgSocials svgObj={item} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-69.5 md:max-w-160 xl:max-w-173 mb-10.5 md:mb-24.5 mx-auto">
          <p className="text-lg md:text-[2rem] leading-none my-let-spacing2 text-center">
            No matter which yacht you choose, our experienced crew will ensure
            that your journey is smooth and enjoyable.
          </p>
        </div>
        <div className="flex justify-between   max-w-62 w-full text-xs leading-[1.16] tracking-[0.03em] text-center mx-auto">
          <p>2023. Yacht Adventures</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
}
