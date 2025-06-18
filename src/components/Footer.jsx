import { BUTTONS } from '../data/buttonsInfo';
import { SOCIAL_ICONS_FOOTER } from '../data/socials';
import Button from './Button';
import SvgSocials from './SvgSocials';

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-white1 bg-turquoise-blue1 rounded-t-3xl pt-10 md:pt-12.5 pb-2 px-7.5 md:px-12">
        <div className="flex flex-col gap-20">
          <div className="flex justify-between">
            <a
              className="font-medium text-sm my-let-spacing1 text-white1"
              href="index.html"
            >
              yachtjet
            </a>
            <ul className="flex gap-1 uppercase text-[9px] leading-[1.3] md:ml-28 xl:ml-74">
              {BUTTONS.map(button => (
                <Button key={button.id} name={button.name} href={button.href} />
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
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
      </div>
    </div>
  );
}
