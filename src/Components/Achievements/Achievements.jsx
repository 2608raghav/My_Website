import { FaTrophy } from "react-icons/fa";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-black text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-6xl font-bold text-center mb-4">
          My{" "}
          <span className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">
            Achievements
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-20 text-lg">
          Competitive hackathons, innovation challenges,
          and impactful projects.
        </p>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
            absolute
            left-6
            top-0
            h-full
            w-[2px]
            bg-green-500/30
            "
          ></div>

          {/* Achievement 1 */}

          <div className="relative flex items-start mb-16">

            <div
              className="
              z-10
              w-12
              h-12
              rounded-full
              bg-green-500
              flex
              items-center
              justify-center
              shadow-lg
              shadow-green-500/40
              "
            >
              <FaTrophy className="text-black text-xl" />
            </div>

            <div
              className="
              ml-8
              flex-1
              bg-zinc-900/70
              border
              border-green-500/20
              rounded-3xl
              p-8
              backdrop-blur-md
              hover:-translate-y-2
              hover:border-green-500
              hover:shadow-lg
              hover:shadow-green-500/20
              transition-all
              duration-300
              "
            >
              <span className="text-green-400 font-semibold">
                2026
              </span>

              <h3 className="text-3xl font-bold mt-2">
                National Finalist — Health Hackathon '26
              </h3>

              <p className="text-gray-400 mt-2">
                VIT Bhopal × Johns Hopkins University
              </p>

              <p className="text-gray-300 mt-6 leading-8">
                Built <span className="text-green-400">Gati Rehab</span>,
                an AI-powered physiotherapy monitoring system
                capable of tracking rehabilitation exercises and
                assisting patients through intelligent motion analysis.
              </p>

              <div
                className="
                mt-6
                inline-block
                px-4
                py-2
                rounded-full
                bg-green-500/10
                border
                border-green-500/20
                text-green-400
                "
              >
                🏆 Top 60 out of 600+ Teams
              </div>
            </div>
          </div>

          {/* Achievement 2 */}

          <div className="relative flex items-start">

            <div
              className="
              z-10
              w-12
              h-12
              rounded-full
              bg-green-500
              flex
              items-center
              justify-center
              shadow-lg
              shadow-green-500/40
              "
            >
              <FaTrophy className="text-black text-xl" />
            </div>

            <div
              className="
              ml-8
              flex-1
              bg-zinc-900/70
              border
              border-green-500/20
              rounded-3xl
              p-8
              backdrop-blur-md
              hover:-translate-y-2
              hover:border-green-500
              hover:shadow-lg
              hover:shadow-green-500/20
              transition-all
              duration-300
              "
            >
              <span className="text-green-400 font-semibold">
                2026
              </span>

              <h3 className="text-3xl font-bold mt-2">
                Top 6 Finalist — INNOVIT'26
              </h3>

              <p className="text-gray-400 mt-2">
                Innovation & Sustainability Hackathon
              </p>

              <p className="text-gray-300 mt-6 leading-8">
                Architected <span className="text-green-400">Mess-Metric</span>,
                a Web 2.5 food sustainability ERP designed to reduce
                campus food waste through analytics, forecasting,
                and transparent sustainability tracking.
              </p>

              <div
                className="
                mt-6
                inline-block
                px-4
                py-2
                rounded-full
                bg-green-500/10
                border
                border-green-500/20
                text-green-400
                "
              >
                🏆 Top 6 in Theme | Top 38 out of 137 Teams
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;