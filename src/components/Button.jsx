export default function Button({
  buttonObj: { name, href },
  hoverColor,
  hoverTextColor,
  bgColor,
}) {
  const hoverClass =
    hoverColor === 'turquoise-blue1'
      ? 'hover:bg-turquoise-blue1'
      : 'hover:bg-white1';

  const hoverTextClass =
    hoverTextColor === 'turquoise-blue1'
      ? 'hover:text-turquoise-blue1'
      : 'hover:text-white1';

  const bgColorClass =
    bgColor === 'turquoise-blue2'
      ? 'bg-turquoise-blue2'
      : bgColor === 'turquoise-blue5'
        ? 'bg-turquoise-blue5'
        : bgColor === 'turquoise-blue6'
          ? 'bg-turquoise-blue6'
          : 'bg-turquoise-blue2';

  return (
    <li className="w-full max-w-22.5">
      <a
        href={href}
        className={`flex h-10 justify-center items-center ${hoverTextClass} rounded-lg ${bgColorClass} ${hoverClass} transition-all cursor-pointer`}
      >
        {name}
      </a>
    </li>
  );
}
