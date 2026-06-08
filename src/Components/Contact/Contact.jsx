import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";

import ContactCard from "./ContactCard";

import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div className="flex flex-col items-center">

            <img
              src="/profile.png"
              alt="Profile"
              className="
              w-80
              h-80
              rounded-full
              border
              border-green-500/30
              object-cover
              "
            />

            <button
              onClick={() =>
                window.open(
                  "mailto:raghavgupta@example.com"
                )
              }
              className="
              mt-10
              px-10
              py-4
              border
              border-green-500
              bg-green-500/10
              text-green-400
              rounded-2xl
              hover:bg-green-500/20
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Say Hello ↗
            </button>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <h2 className="text-6xl font-bold">
              Let's{" "}
              <span className="text-green-400">
                Connect
              </span>
            </h2>

            <p
              className="
              mt-8
              text-xl
              text-gray-400
              leading-10
              "
            >
              I'm always open to discussing new
              projects, challenging ideas, hackathons,
              internships, and opportunities to
              collaborate.
            </p>

            {/* CONTACT GRID */}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">

              <ContactCard
                icon={<MdEmail />}
                title="Email"
                value="guptaraghav260@gmail.com"
                color="text-green-400"
                link="mailto:guptaraghav2608@gmail.com"
              />

              <ContactCard
                icon={<FaGithub />}
                title="GitHub"
                value="2608raghav"
                color="text-cyan-400"
                link="https://github.com/2608raghav"
              />

              <ContactCard
                icon={<FaLinkedin />}
                title="LinkedIn"
                value="LinkedIn Profile"
                color="text-purple-400"
                link="https://www.linkedin.com/in/raghav-gupta-9b091b357/"
              />

              <ContactCard
                icon={<FaInstagram />}
                title="Instagram"
                value="@yourusername"
                color="text-pink-400"
                link="https://instagram.com"
              />

              <ContactCard
                icon={<FaDiscord />}
                title="Discord"
                value="raghav#1234"
                color="text-indigo-400"
                link="#"
              />

              <ContactCard
                icon={<FaXTwitter />}
                title="Twitter / X"
                value="@RaghavGupta7"
                color="text-sky-400"
                link="https://twitter.com/RaghavGupta712"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}