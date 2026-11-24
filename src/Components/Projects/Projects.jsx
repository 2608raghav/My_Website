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
            github="https://github.com/2608raghav/University_ChatBot.git"
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
             title="NexusAI"
             subtitle="Distributed Multi-Agent AI Platform"
  description="Developed a multi-agent AI platform using FastAPI and Python, where an intelligent orchestrator processes natural-language requests and delegates tasks to specialized agents. Integrates News, Weather, Finance, and Email services using external APIs, with Ollama (Qwen3:8B) powering intelligent query understanding and task routing. Designed with modular agent services and asynchronous communication for scalable AI-driven workflows."
             achievement="Multi-Agent AI Architecture | Intelligent Task Orchestration"
             github="https://github.com/2608raghav/NexusAI.git"
             live="#"
             tech={[
               "Python",
               "FastAPI",
               "LangChain",
               "Ollama",
               "Qwen3:8B",
               "HTTPX",
               "REST APIs",
               "Multi-Agent AI"
             ]}
           />


        </div>
      </div>
    </section>
  );
}

export default Projects;