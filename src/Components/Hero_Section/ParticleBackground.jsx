import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  console.log("ParticleBackground Mounted");

  return (
    <Particles
      id="particles"
      className="absolute inset-0"
      options={{
        particles: {
          number: {
            value: 100,
          },
          move: {
            enable: true,
            speed: 2,
          },
          size: {
            value: 5,
          },
        },
      }}
    />
  );
}