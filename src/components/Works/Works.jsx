import React from "react";
import "./Works.css";
// import { FaFlutter, FaJs } from "react-icons/fa";
import { FaFlutter, FaJs } from "react-icons/fa6";
import edge from '../../assets/logo.jpg'
import tetris from '../../assets/tetris.png'
import cart from '../../assets/cart.png'
import { SiDart } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";
import message from '../../assets/message.png'
const experience = [
    {
        id: 1,
        title: "Lab Attendant",
        description: "EDGE-GSTUCSE Digital Skills Training",
        icon: (
            <img src={edge}
                alt="EDGE logo"
                width="30"
                height="30"
            />
        ),
        timeFrame: "Feb 2024 - June 2025"

    }
];

const projects = [
    {
        id: 1,
        title: "DeliChat - Real-time Chatting Appilcation",
        description: "A simple real-time chat app frontend built with React, Zustand for state management, and Socket.IO for live messaging.",
        url: "https://mern-chat-app-2cls.onrender.com/", // Add link here
        icon: (
            <img src={message}
                alt="messenger"
                width="30"
                height="30"
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
        id: 2,
        title: "DeliBazar E-commerce Website",
        description: "A fast and user-friendly E-commerce platform built with the MERN stack.",
        url: "https://delibazar.onrender.com/", // Add link here
        icon: (
            <img src={cart}
                alt="Shopping Cart"
                width="30"
                height="30"
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
        id: 3,
        title: "Tetris Game",
        description: "A simple Tetris game in Python using Pygame with smooth controls, collision detection",
        url: "https://github.com/sahin404/Python-Tetris-Game", // Add link here
        icon: (
            <img className="" src={tetris}
                alt="tetris game"
                width="30"
                height="30"
            />
        ),
        technologies: [
            { name: "Python" },
            { name: "Pygame" },
        ]
    },
    
];

function ProjectCard() {
    return (
        <>
            <div className="works">Works</div>
            <div className="main-container">
                <div className="experience-container">
                    <h2 className="title">Soft Experience</h2>
                    {experience.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="icon">{project.icon}</div>
                            <div className="content">
                                <h3 className="project-title">
                                    {project.title}
                                </h3>
                                <p className="description">{project.description}</p>
                                <h3 className="description">{project.timeFrame}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="project-container">
                    <h2 className="title">Projects</h2>
                    {projects.map((project) => (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <div key={project.id} className="project-card">
                                <div className="icon">{project.icon}</div>
                                <div className="content">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <p className="description">{project.description}</p>
                                    <div className="tags">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                                                {tech.icon} {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div >
        </>
    );
}

export default ProjectCard;
