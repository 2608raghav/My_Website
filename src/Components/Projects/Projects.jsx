import ProjectCard from "./Project_Card";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-6xl font-bold mb-4">
          Featured{" "}
          <span className="text-green-400">
            Projects
          </span>
        </h2>

        <p className="text-gray-400 mb-16 text-xl">
          Some projects that showcase my skills in
          full-stack development and AI.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          <ProjectCard
            title="Smart Attendance"
            subtitle="WiFi-Based Attendance Tracking"
            description="Automatic attendance system that identifies students connected to the teacher's hotspot and records attendance in real time."
            achievement="Full Stack Engineering Project"
            github="#"
            live="#"
            tech={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Networking",
            ]}
          />

          <ProjectCard
            title="Mess Metric"
            subtitle="AI-Powered Mess Management System"
            description="An enterprise-grade EPR designed to eliminate manual work and enhance efficiency in mess management for educational institutions.Features real-time analytics, automated inventory management, and seamless integration with existing systems."
            achievement="Top 6 Finalist (out of 137 teams) at INNOVIT' 26 Hackathon"
            github="#"
            live="#"
            tech={[
              "React",
              "Tailwind",
              "Node.js",
              "MongoDB",
              "Gemini API",
              "Polygon Web3"
            ]}
          />

            <ProjectCard
            title="Cold Mail Generator"
            subtitle="AI-Powered Email Campaign Tool"
            description="An AI-driven solution for generating personalized cold emails at scale, improving response rates and engagement for sales and marketing teams."
            achievement="Innovative Solution Award at Startup Weekend"
            github="#"
            live="#"
            tech={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Networking",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

export default Projects;