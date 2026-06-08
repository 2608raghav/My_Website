export default function ContactCard({
  icon,
  title,
  value,
  color,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
      bg-zinc-900/60
      border
      border-green-500/10
      rounded-3xl
      p-8
      text-center
      hover:-translate-y-2
      hover:border-green-500
      hover:shadow-lg
      hover:shadow-green-500/20
      transition-all
      duration-300
      "
    >
      <div
        className="
        w-16
        h-16
        mx-auto
        rounded-2xl
        bg-green-500/10
        flex
        items-center
        justify-center
        text-3xl
        text-green-400
        "
      >
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-medium">
        {title}
      </h3>

      <p
  className={`
    mt-4
    ${color}
    break-all
    text-sm
  `}
>
  {value}
</p>
    </a>
  );
}