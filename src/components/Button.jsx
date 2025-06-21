export default function Button({ buttonObj: { name, href } }) {
  return (
    <li className="flex justify-center items-center w-full max-w-22.5 h-10 rounded-lg bg-turquoise-blue2 opacity-[0.5] hover:bg-turquoise-blue1 transition-all">
      <a href={href}>{name}</a>
    </li>
  );
}
