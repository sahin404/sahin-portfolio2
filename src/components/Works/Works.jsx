
import "./Works.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import edge from '../../assets/logo.jpg'
import tetris from '../../assets/tetris.png'
import cart from '../../assets/cart.png'
import message from '../../assets/message.png'
import circle from '../../assets/black.ico'

const projects = [
    {
        id: 1,
        title: "Circle - A Social Media Application",
        description: "Circle is a social media application I built using Next.js 14 and TypeScript. It’s based on a serverless architecture, where I connected a PostgreSQL database with Prisma ORM and used Clerk for authentication.",
        liveUrl: "https://circle-social-media-app.vercel.app/",
        githubUrl: "https://github.com/sahin404/circle-a-social-media-app-next.js-project",
        icon: (
            <img src={circle}
                alt="circle"
                width="40"
                height="40"
            />
        ),
        technologies: [
            { name: "React" },
            { name: "Next" },
            { name: "TypeScript" },
            { name: "Prisma" },
            { name: "PostgreSQL" },
        ],
    },
    {
        id: 2,
        title: "DeliChat - Real-time Chatting Application",
        description: "A simple real-time chat app frontend built with React, Zustand for state management, and Socket.IO for live messaging.",
        liveUrl: "https://mern-chat-app-2cls.onrender.com/",
        githubUrl: "https://github.com/sahin404/mern-chat-app",
        icon: (
            <img src={message}
                alt="messenger"
                width="40"
                height="40"
            />
        ),
        technologies: [
            { name: "MongoDB" },
            { name: "Express" },
            { name: "React" },
            { name: "NodeJs" },
            { name: "Socket.IO"},
            { name: "Zustand"} 
        ],
    },
    {
        id: 3,
        title: "DeliBazar E-commerce Website",
        description: "A fast and user-friendly E-commerce platform built with the MERN stack.",
        liveUrl: "https://delibazar.onrender.com/",
        githubUrl: "https://github.com/sahin404/delibazar-client-E-CommerceSite",
        icon: (
            <img src={cart}
                alt="Shopping Cart"
                width="40"
                height="40"
            />
        ),
        technologies: [
            { name: "MongoDB" },
            { name: "Express" },
            { name: "React" },
            { name: "NodeJs" },
        ],
    },
    {
        id: 4,
        title: "Tetris Game",
        description: "A simple Tetris game in Python using Pygame with smooth controls, collision detection",
        liveUrl: "https://github.com/sahin404/Python-Tetris-Game",
        githubUrl: "https://github.com/sahin404/Python-Tetris-Game",
        icon: (
            <img src={tetris}
                alt="tetris game"
                width="40"
                height="40"
            />
        ),
        technologies: [
            { name: "Python" },
            { name: "Pygame" },
        ]
    },
];

const softExperience = [
    {
        id: 1,
        title: "Lab Attendant",
        company: "EDGE-GSTUCSE Digital Skills Training Program",
        period: "Feb 2024 - April 2025",
        location: "GSTU, Bangladesh",
        icon: (
            <img src={edge}
                alt="EDGE logo"
                width="50"
                height="50"
            />
        ),
        skills: [
            "Digital Skills Training",
            "Lab Management",
            "Student Mentoring",
            "Technical Support"
        ]
    }
];

function ProjectCard() {
    return (
        <>
            {/* Work Section */}
            <div className="work-section">
                <h2 className="section-title">Work</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                </div>
                            </div>
                            
                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FaGithub className="link-icon" />
                                    <span>GitHub</span>
                                </a>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FaExternalLinkAlt className="link-icon" />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Soft Experience Section */}
            <div className="soft-experience-section">
                <h2 className="section-title">Soft Experience</h2>
                <div className="experience-grid">
                    {softExperience.map((exp) => (
                        <div key={exp.id} className="experience-card">
                            <div className="experience-header">
                                <div className="experience-icon">{exp.icon}</div>
                                <div className="experience-info">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <p className="experience-company">{exp.company}</p>
                                    <p className="experience-location">{exp.location}</p>
                                    <p className="experience-period">{exp.period}</p>
                                </div>
                            </div>
                            
                            <div className="experience-skills">
                                <h4 className="exp-skills-title">Key Skills:</h4>
                                <div className="skills-list">
                                    {exp.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectCard;