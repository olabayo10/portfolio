const majorProjects = [
  {
    title: "Bayoride Logistics",
    tag: "Full Stack",
    description:
      "A logistics website designed to help customers manage delivery services easily.",
    link: "https://bayo-ride.vercel.app/",
  },
  {
    title: "My Portfolio",
    tag: "Frontend",
    description:
      "A personal portfolio website showcasing my skills, experience and projects.",
    link: "",
  },
  {
    title: "Sign Out",
    tag: "Full Stack",
    description:
      "A personal signout website for absentees to register their signature.",
    link: "https://my-signout.vercel.app/",
  },
];

const otherProjects = [
  {
    title: "Air BNB Project",
    tag: "React",
    description:
      "A React-based course listing page featuring reusable cards, images, ratings, availability labels, and pricing. Built to practice components and rendering dynamic data while learning React.",
    link: "https://card-project-ebon-iota.vercel.app/",
  },
  {
    title: "Tenzies Dice Game",
    tag: "React",
    description:
      "A React dice game built to practice state management, event handling, conditional rendering, and reusable components. Players can roll and freeze dice until all dice match.",
    link: "https://final-project-ekhi.vercel.app/",
  },
  {
    title: "Meme Project",
    tag: "API",
    description:
      "A React meme generator built to practice state management, event handling, and working with APIs. Users can add custom text and generate different meme images.",
    link: "https://api-generate.vercel.app/",
  },
  {
    title: "Count API",
    tag: "React",
    description:
      "A simple counter application built while learning the fundamentals of React. This project helped me understand state management, event handling, and how React updates the UI dynamically.",
    link: "https://count-api-sigma.vercel.app/",
  },
];

function ProjectCard({ title, tag, description, link }) {
  return (
    <div className="proj-card">
      <div className="proj-tag">{tag}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      ) : (
        <span className="proj-link-disabled">Coming soon</span>
      )}
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <section className="major-project">
        <h2 className="proj-h2">Major Projects</h2>
        <div className="projects-container">
          {majorProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="other-project">
        <h2 className="proj-h2">Other Projects</h2>
        <div className="projects-container">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;