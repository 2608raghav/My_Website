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
            title="AI University Chatbot"
            subtitle="Multi-Agent University Assistance System"
            description="Built an intelligent university-focused conversational assistant using Python, LangChain, and LangGraph. It classifies user queries and dynamically routes them to specialized agents for admission, hostel, placement, and academic assistance. Includes session-based conversational memory using SQLite checkpointing to support context-aware follow-up conversations."
            achievement="Agentic AI Project | Multi-Agent Workflow Architecture"
            github="YOUR_GITHUB_REPOSITORY_URL"
            live="#"
            tech={[
              "Python",
              "LangChain",
              "LangGraph",
              "Ollama",
              "SQLite",
              "Multi-Agent AI",
              "LLM Integration"
            ]}
          />

          <ProjectCard
            title="Mess Metric"
            subtitle="AI-Powered Mess Management System"
            description="An enterprise-grade EPR designed to eliminate manual work and enhance efficiency in mess management for educational institutions.Features real-time analytics, automated inventory management, and seamless integration with existing systems."
            achievement="Top 6 Finalist (out of 137 teams) at INNOVIT' 26 Hackathon"
            github="https://github.com/2608raghav/mess-metric.git"
            live="https://mess-metric.vercel.app"
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
            github="https://github.com/2608raghav/Cold-mail-generator.git"
            live="https://cold-mail-generator-nu.vercel.app"
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