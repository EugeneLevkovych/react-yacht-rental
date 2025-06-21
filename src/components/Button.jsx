export default function Button({
  buttonObj: { name, href },
  hoverColor,
  hoverTextColor,
}) {
  const hoverClass =
    hoverColor === 'turquoise-blue1'
      ? 'hover:bg-turquoise-blue1'
      : 'hover:bg-white1';

  const hoverTextClass =
    hoverTextColor === 'turquoise-blue1'
      ? 'hover:text-turquoise-blue1'
      : 'hover:text-white1';

  return (
    <li
      className={`flex justify-center items-center w-full max-w-22.5 h-10 ${hoverTextClass} rounded-lg bg-turquoise-blue2  ${hoverClass} transition-all cursor-pointer`}
    >
      <a href={href}>{name}</a>
    </li>
  );
}
