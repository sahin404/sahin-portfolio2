import React, { useState } from "react";
import "./Skills.css";

const skillsData = {
  FrontEnd: [
    {
      id: 1,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          alt="HTML Logo"
          width="50"
          height="50"
        />
      ),
      name: "HTML",
    },
    {
      id: 2,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="CSS Logo"
          width="50"
          height="50"
        />
      ),
      name: "CSS",
    },
    {
      id: 3,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript Logo"
          width="50"
          height="50"
        />
      ),
      name: "JavaScript",
    },
    {
      id: 4,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          alt="TypeScript Logo"
          width="50"
          height="50"
        />
      ),
      name: "TypeScript",
    },
    {
      id: 5,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind Logo"
          width="50"
          height="50"
        />
      ),
      name: "Tailwind CSS",
    },
    {
      id: 6,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React Logo"
          width="50"
          height="50"
        />
      ),
      name: "React",
    },
    {
      id: 7,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          alt="Next.js Logo"
          width="50"
          height="50"
        />
      ),
      name: "Next.js",
    },
  ],
  Backend: [
    {
      id: 1,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          alt="Node.js Logo"
          width="50"
          height="50"
        />
      ),
      name: "Node.js",
    },
    {
      id: 2,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
          alt="Express Logo"
          width="50"
          height="50"
        />
      ),
      name: "Express.js",
    },
    {
      id: 3,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
          alt="Prisma Logo"
          width="50"
          height="50"
        />
      ),
      name: "Prisma",
    },
    {
      id: 4,
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
          alt="Zustand Logo"
          width="50"
          height="50"
        />
      ),
      name: "Zustand",
    },
  ],
  Database: [
    {
      id: 1,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          alt="MongoDB Logo"
          width="50"
          height="50"
        />
      ),
      name: "MongoDB",
    },
    {
      id: 2,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg"
          alt="MySQL Logo"
          width="50"
          height="50"
        />
      ),
      name: "MySQL",
    },
    {
      id: 3,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
          alt="PostgreSQL Logo"
          width="50"
          height="50"
        />
      ),
      name: "PostgreSQL",
    },
  ],
  Others: [
    {
      id: 1,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          alt="C++ Logo"
          width="50"
          height="50"
        />
      ),
      name: "C++",
    },
    {
      id: 2,
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="GitHub Logo"
          width="50"
          height="50"
        />
      ),
      name: "GitHub",
    },
    {
      id: 3,
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920256.png"
          alt="Camera Logo"
          width="50"
          height="50"
        />
      ),
      name: "Photography",
    },
  ],
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("FrontEnd");

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">Tools and technologies I enjoy working with</p>
      <div className="skills-tabs">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`tab-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-content">
        {skillsData[selectedCategory].length > 0 ? (
          skillsData[selectedCategory].map((skill) => (
            <div key={skill.id} className="skill-card">
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))
        ) : (
          <p className="no-skills">No skills available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Skills;
