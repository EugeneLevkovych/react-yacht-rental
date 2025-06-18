export default function Button({ name, href }) {
  return (
    <li>
      <a
        href={href}
        className="flex justify-center items-center w-16.5 md:w-22.5 h-10 rounded-lg bg-turquoise-blue2 opacity-[0.5] hover:bg-turquoise-blue1 transition-all"
      >
        {name}
      </a>
    </li>
  );
}
