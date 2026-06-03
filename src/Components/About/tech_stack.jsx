import { FaJava, FaPython, FaReact, FaNodeJs, FaRobot } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiExpress,
  SiMongodb
} from "react-icons/si";
import { MdComputer } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

const SkillBadge = ({ icon, name }) => {
  return (
    <div
      className="
      flex items-center gap-3
      px-4 py-3
      bg-zinc-900/80
      border border-green-500/20
      rounded-xl
      hover:border-green-400
      hover:-translate-y-1
      transition-all duration-300
      "
    >
      <span className="text-green-400 text-xl">
        {icon}
      </span>

      <span className="text-zinc-300 font-medium">
        {name}
      </span>
    </div>
  );
};



function TechStack() {
       
  return (
    <div className="mt-12">

  <h3
    className="
    text-center
    text-3xl
    font-bold
    text-green-400
    mb-10
    tracking-wider
    "
  >
    TECHNOLOGIES I WORK WITH
  </h3>

  <div className="grid lg:grid-cols-3 gap-8">

    {/* LANGUAGES */}

    <div
      className="p-6
      rounded-3xl
      border border-green-500/20
      bg-black/40
      backdrop-blur-xl
      hover:shadow-green-500/20
cursor-pointer
hover:-translate-y-2
hover:shadow-lg
transition-all
      duration-300
       animate-float
       hover:scale-[1.02]"
    >
      
    
      <div className="flex items-center gap-4 mb-6">
        <FaLaptopCode className="text-green-400 text-4xl" />
        <h4 className="text-2xl font-bold text-green-400">
          Languages
        </h4>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SkillBadge icon={<SiCplusplus />} name="C++" />
        <SkillBadge icon={<FaJava />} name="Java" />
        <SkillBadge icon={<FaPython />} name="Python" />
        <SkillBadge icon={<SiJavascript />} name="JavaScript" />
      </div>
    </div>

    {/* WEB DEV */}

    <div
      className="
      p-6
      rounded-3xl
      border border-green-500/20
      bg-black/40
      backdrop-blur-xl
      hover:shadow-green-500/20
cursor-pointer
hover:-translate-y-2
hover:shadow-lg
transition-all
      duration-300
       animate-float
       hover:scale-[1.02]
      "
    >
      <div className="flex items-center gap-4 mb-6">
        <MdComputer className="text-green-400 text-4xl" />
        <h4 className="text-2xl font-bold text-green-400">
          Web Development
        </h4>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SkillBadge icon={<SiHtml5 />} name="HTML5" />
        <SkillBadge icon={"🎨"} name="CSS3" />
        <SkillBadge icon={<FaReact />} name="React" />
        <SkillBadge icon={<FaNodeJs />} name="Node.js" />
        <SkillBadge icon={<SiExpress />} name="Express" />
        <SkillBadge icon={<SiMongodb />} name="MongoDB" />
      </div>
    </div>

    {/* AI */}

    <div
      className="
      p-6
      rounded-3xl
      border border-green-500/20
      bg-black/40
      backdrop-blur-xl
      hover:shadow-green-500/20
cursor-pointer
hover:-translate-y-2
hover:shadow-lg
transition-all
      duration-300
       animate-float
       hover:scale-[1.02]
      "
    >
      <div className="flex items-center gap-4 mb-6">
        <FaRobot className="text-green-400 text-4xl" />
        <h4 className="text-2xl font-bold text-green-400">
          AI
        </h4>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <SkillBadge icon={<FaRobot />} name="Agentic AI" />
        <SkillBadge icon={<FaRobot />} name="Generative AI" />
<SkillBadge icon={<FaRobot />} name="OpenAI API" />
        <SkillBadge icon={<FaRobot />} name="Prompt Engineering" />
      </div>
    </div>

  </div>

</div>
    );
}

export default TechStack;