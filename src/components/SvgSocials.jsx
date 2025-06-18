export default function SvgSocials({ svgObj }) {
  return (
    <svg className={`size-6 ${svgObj.fill}`}>
      <use href={svgObj.href}></use>
    </svg>
  );
}
