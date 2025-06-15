export default function Button({ name, href }) {
  return (
    <li>
      <a
        href={href}
        className="flex justify-center items-center w-22.5 h-10 rounded-lg bg-turquoise-blue2 hover:bg-turquoise-blue1"
      >
        {name}
      </a>
    </li>
  );
}
