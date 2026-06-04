import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  subtitle,
  description,
  achievement,
  tech,
  github,
  live,
}) {
  return (
    <div
      className="
      relative
      bg-black/40
      backdrop-blur-md
      border border-green-500/20
      rounded-3xl
      p-8
      hover:-translate-y-3
      hover:border-green-500
      hover:shadow-xl
      hover:shadow-green-500/20
      transition-all
      duration-500
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-4xl font-bold text-white">
            {title}
          </h3>

          <p className="text-gray-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="flex gap-3">
          <a href={github} target="_blank">
            <button className="p-3 border border-green-500/20 rounded-xl hover:border-green-500">
              <FaGithub />
            </button>
          </a>

          <a href={live} target="_blank">
            <button className="p-3 border border-green-500/20 rounded-xl hover:border-green-500">
              <FaExternalLinkAlt />
            </button>
          </a>
        </div>
      </div>

      <p className="text-gray-300 mt-8 leading-8">
        {description}
      </p>

      <div
        className="
        mt-8
        bg-green-500/5
        border border-green-500/20
        rounded-2xl
        p-4
        "
      >
        🏆 {achievement}
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {tech.map((item) => (
          <span
            key={item}
            className="
            px-4
            py-2
            rounded-full
            border
            border-green-500/30
            text-green-400
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;