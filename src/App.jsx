import React from "react";
import "./App.css";
import { SiHtml5, SiDjango, SiPostgresql } from "react-icons/si";
import { FaCss3Alt, FaJsSquare, FaReact, FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export default function App() {
  return (
    <div className="portfolio-app" dir="ltr">
      <div className="bg-glow"></div>

      <section className="scroll-screen screen-one" id="screen-intro">
        <header className="navbar">
          <div className="brand">
            Sina<span className="ruby-text">Script</span>
          </div>
          <div className="role-pill">Mid-Level Software Engineer</div>
        </header>

        <div className="screen-content hero-grid">
          <div className="hero-text">
            <div className="status-badge">
              <span className="pulse-circle"></span>
              Open for Mid-Level & Core Engineering Roles
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-name">Sina Script</span>
            </h1>
            <h2 className="hero-role">Mid-Level Software Engineer</h2>
            <p className="hero-desc">
              Bridging robust full-stack logic with polished interactive user
              interfaces. Engineering scalable web applications with clean
              architecture and modern performance standards.
            </p>
            <div className="hero-actions">
              <a href="#screen-skills" className="btn btn-primary">
                View Skills Grid ↓
              </a>
              <a
                href="mailto:contact@sinascript.dev"
                className="btn btn-secondary"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">sina_script.profile.ts</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="keyword">const</span>{" "}
                <span className="var">developer</span>:{" "}
                <span className="type">EngineerProfile</span> = {"{"}
              </p>
              <p className="indent">
                <span className="prop">name</span>:{" "}
                <span className="str">'Sina Script'</span>,
              </p>
              <p className="indent">
                <span className="prop">level</span>:{" "}
                <span className="str">'Mid-Level Software Engineer'</span>,
              </p>
              <p className="indent">
                <span className="prop">skills</span>: {"{"}
              </p>
              <p className="indent-2">
                <span className="prop">html</span>:{" "}
                <span className="str">'HTML5 & Semantic Structure'</span>,
              </p>
              <p className="indent-2">
                <span className="prop">css</span>:{" "}
                <span className="str">'CSS3 & Responsive Layouts'</span>,
              </p>
              <p className="indent-2">
                <span className="prop">javascript</span>:{" "}
                <span className="str">'ESNext & Core Async Logic'</span>,
              </p>
              <p className="indent-2">
                <span className="prop">react</span>:{" "}
                <span className="str">
                  'React Components & State Management'
                </span>
                ,
              </p>
              <p className="indent-2">
                <span className="prop">next</span>:{" "}
                <span className="str">'Next.js SSR & Edge Architecture'</span>,
              </p>
              <p className="indent-2">
                <span className="prop">python</span>:{" "}
                <span className="str">'Python Clean Scripting & Systems'</span>,
              </p>
              <p className="indent-2">
                <span className="prop">django</span>:{" "}
                <span className="str">'Django Secure REST APIs & ORM'</span>,
              </p>
              <p className="indent-2">
                <span className="prop">postgresql</span>:{" "}
                <span className="str">
                  'PostgreSQL Schema & Complex Queries'
                </span>
              </p>
              <p className="indent">{"}"},</p>
              <p className="indent">
                <span className="prop">readyToBuild</span>:{" "}
                <span className="keyword">true</span>
              </p>
              <p>{"}"};</p>
            </div>
          </div>
        </div>

        <a href="#screen-skills" className="scroll-hint">
          <span>Scroll to explore technical arsenal</span>
          <div className="scroll-arrow">↓</div>
        </a>
      </section>

      <section className="scroll-screen screen-two" id="screen-skills">
        <div className="screen-content skills-container">
          <div className="skills-header">
            <span className="section-label">MID-LEVEL CAPABILITIES</span>
            <h2 className="section-title">Core Technical Arsenal</h2>
          </div>

          <div className="skills-grid">
     
            <div className="skill-card card-html">
              <div className="skill-icon-wrapper">
                <SiHtml5 className="tech-icon icon-html" />
              </div>
              <div className="skill-details">
                <div className="skill-meta">
                  <span className="skill-name">HTML5</span>
                  <span className="skill-tag">Web Standard</span>
                </div>
                <p className="skill-desc">
                  Semantic, accessible document structuring and markup best
                  practices.
                </p>
              </div>
            </div>

    
            <div className="skill-card card-css">
              <div className="skill-icon-wrapper">
                <FaCss3Alt className="tech-icon icon-css" />
              </div>
              <div className="skill-details">
                <div className="skill-meta">
                  <span className="skill-name">CSS3</span>
                  <span className="skill-tag">Styling</span>
                </div>
                <p className="skill-desc">
                  Responsive layouts, modern animations, custom variables, and
                  Flex/Grid.
                </p>
              </div>
            </div>


            <div className="skill-card card-js">
              <div className="skill-icon-wrapper">
                <FaJsSquare className="tech-icon icon-js" />
              </div>
              <div className="skill-details">
                <div className="skill-meta">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-tag">Frontend</span>
                </div>
                <p className="skill-desc">
                  ESNext, asynchronous programming, event-driven patterns, and
                  DOM logic.
                </p>
              </div>
            </div>


            <div className="skill-card card-react">
              <div className="skill-icon-wrapper">
                <FaReact className="tech-icon icon-react" />
              </div>
              <div className="skill-details">
                <div className="skill-meta">
                  <span className="skill-name">React</span>
                  <span className="skill-tag">Frontend - Framework</span>
                </div>
                <p className="skill-desc">
                  Component hierarchies, custom hooks, reusable patterns, and
                  optimized rendering.
                </p>
              </div>
            </div>

 
            <div className="skill-card card-next">
              <div className="skill-icon-wrapper">
                <RiNextjsFill className="tech-icon icon-next" />
              </div>
              <div className="skill-details">
                <div className="skill-meta">
                  <span className="skill-name">Next.js</span>
                  <span className="skill-tag">Frontend - Framework</span>
                </div>
                <p className="skill-desc">
                  Server-Side Rendering (SSR), Static Generation, routing, and
                  fast load times.
                </p>
              </div>
            </div>

            <div className="skill-card card-python">
              <div className="skill-icon-wrapper">
                <FaPython className="tech-icon icon-python" />
              </div>
              <div className="skill-details">
                <div className="skill-meta">
                  <span className="skill-name">Python</span>
                  <span className="skill-tag">Backend</span>
                </div>
                <p className="skill-desc">
                  Clean scripting, algorithms, data processing, and scalable
                  backend logic.
                </p>
              </div>
            </div>

  
            <div className="skill-card card-django">
              <div className="skill-icon-wrapper">
                <SiDjango className="tech-icon icon-django" />
              </div>
              <div className="skill-details">
                <div className="skill-meta">
                  <span className="skill-name">Django</span>
                  <span className="skill-tag">Backend - Framework</span>
                </div>
                <p className="skill-desc">
                  Enterprise-grade secure REST APIs, robust ORM, and
                  authentication.
                </p>
              </div>
            </div>

            <div className="skill-card card-postgres">
              <div className="skill-icon-wrapper">
                <SiPostgresql className="tech-icon icon-postgres" />
              </div>
              <div className="skill-details">
                <div className="skill-meta">
                  <span className="skill-name">PostgreSQL</span>
                  <span className="skill-tag">Database</span>
                </div>
                <p className="skill-desc">
                  Relational database design, query optimization, indexing, and
                  data safety.
                </p>
              </div>
            </div>
          </div>

          <div className="screen-footer">
            <span className="footer-brand">
              Sina Script © Mid-Level Software Engineer
            </span>
            <div className="footer-links">
              <a href="#screen-intro" className="footer-nav-link">
                ↑ Back to Top
              </a>
              <a
                href="mailto:contact@sinascript.dev"
                className="btn btn-primary btn-sm"
              >
                Connect via Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
