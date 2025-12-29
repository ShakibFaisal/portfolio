import React from "react";
import foodbridge from "../assets/foodbridge.JPG";
import goedu from "../assets/goedu.jpg";
import heroimg from "../assets/hero.JPG";
import loanify from "../assets/loneify.JPG"
import eventhive from "../assets/eventhive.JPG"

const Projects = () => {
  const projects = [
    {
  title: "EventHive",
  description:
    "EventHive is a full-stack event management platform that connects event organizers and attendees with secure booking, role-based access, real-time seat management, and integrated online payments.",
  image: eventhive, 
  technologies: [
    "React",
    "Tailwind CSS",
    "DaisyUI",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB (Mongoose)",
    "Firebase Authentication",
    "Stripe API",
  ],
  liveLink: "https://event-hive-bd.vercel.app",
  gitLink: "https://github.com/ShakibFaisal/EventHive",
},

    {
      title: "FoodBridge",
      description:
        "FoodBridge is a platform that connects donors and receivers to reduce food waste.",
      image: foodbridge,
      technologies: [
        "React",
        "Tailwind",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Firebase",
      ],
      liveLink: "https://dsdw43sds.web.app/",
      gitLink: "https://github.com/ShakibFaisal/foodbridge-client",
    },
    {
      title: "Loanify",
      description:
        "Loanify is a modern microloan management platform that helps NGOs and small financial organizations manage loan applications, approvals, and payments efficiently with full transparency.",
      image: loanify,
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Stripe",
      ],
      liveLink: "https://loanify-8951e.web.app/",
      gitLink: "https://github.com/ShakibFaisal/loanify-client",
    },

    {
      title: "GoEdu – Online Learning Platform",
      description:
        "GoEdu is an interactive learning platform where students can explore courses, view detailed course information, and book sessions with instructors.",
      image: goedu,
      technologies: ["React", "Tailwind", "Firebase"],
      liveLink: "https://goedu-61dbb.web.app/",
      gitLink: "https://github.com/ShakibFaisal/goedu",
    },
    {
      title: "Weather Forecast App",
      description:
        "Hero.io is an app store where users can explore app details and install apps effortlessly",
      image: heroimg,
      technologies: ["React", "Tailwind"],
      liveLink: "https://rococo-cactus-cac3ac.netlify.app/",
      gitLink: "https://github.com/ShakibFaisal/hero-app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-2xl duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  transition-transform scale-90 duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a
                    target="_blank"
                    href={project.liveLink}
                    className="p-3 bg-white rounded-full shadow"
                  >
                    👁
                  </a>
                  <a
                    target="_blank"
                    href={project.gitLink}
                    className="p-3 bg-white rounded-full shadow"
                  >
                    💻
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <a
            href="https://github.com/ShakibFaisal"
            className="text-primary font-semibold hover:underline"
          >
            See More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
