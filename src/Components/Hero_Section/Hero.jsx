import ParticleBackground from "./ParticleBackground";
import Stats from "./Stats";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (

    <section 
    id="hero"
    className="relative h-screen overflow-hidden bg-black">

      <ParticleBackground />

      <div className="absolute inset-0 flex items-center justify-center z-10">

        <div className="text-center px-6">

          <div
            className="
            inline-block
            px-5
            py-2
            rounded-full
            border
            border-green-500
            text-green-400
            mb-8
            text-sm
            "
          >
            ● AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1
  className="
  text-7xl
  md:text-8xl
  font-black
  text-white
  mb-6
  "
>
  Raghav Gupta
</h1>

<div className="mt-8">
  <TypeAnimation
  sequence={[
    "<Full-Stack Developer />", 2000,
    "<Gen AI Engineer />", 2000,
    "<Agentic AI Developer />", 2000,
    "<AI Enthusiast />", 2000,
    "<Open Source Contributor />", 2000,
    "<DSA Solver />", 2000,
  ]}
  speed={50}
  repeat={Infinity}
  cursor={true}
  className="text-green-400 text-3xl font-mono"
/>
</div>

<p
  className="
  mt-8
  text-gray-400
  max-w-2xl
  mx-auto
  text-lg
  "
>
  Building scalable web applications,
  AI-powered products and open-source
  software.
</p>

          <div
            className="
            flex
            justify-center
            gap-4
            mt-10
            flex-wrap
            "
          >
            <button
              className="
              px-8
              py-3
              border
              border-green-500
              bg-green-500/10
              text-green-400
              rounded-xl
              hover:bg-green-500/20
              transition
              "
            >
              View Projects
            </button>

            <button
  onClick={() =>
    window.open(
      "https://github.com/2608raghav",
      "_blank"
    )
  }
  className="
    px-8
    py-3
    border
    border-green-500
    bg-green-500/10
    text-green-400
    rounded-xl
    hover:bg-green-500/20
    transition
  "
>
  GitHub
</button>

            <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/raghav-gupta-9b091b357/",
                "_blank"
              )
            }
              className="
              px-8
              py-3
              border
              border-green-500
              bg-green-500/10
              text-green-400
              rounded-xl
              hover:bg-green-500/20
              transition
              "
            >
              LinkedIn
            </button>
          </div>
          <div>
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
}