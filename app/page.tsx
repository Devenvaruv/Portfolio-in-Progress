import type { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

type IconName =
  | "activity"
  | "arrow-left"
  | "arrow-right"
  | "bars"
  | "book"
  | "box"
  | "check"
  | "chip"
  | "cloud"
  | "code"
  | "database"
  | "github"
  | "globe"
  | "heart"
  | "laptop"
  | "linkedin"
  | "lock"
  | "mail"
  | "map-pin"
  | "monitor"
  | "more"
  | "phone"
  | "refresh"
  | "rocket"
  | "server"
  | "star"
  | "sun"
  | "target"
  | "tool"
  | "upload"
  | "user"
  | "users";

interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
}

interface SkillGroup {
  icon: IconName;
  title: string;
  items: string[];
}

interface JourneyStep {
  icon: IconName;
  title: string;
  copy: string;
}

interface Endpoint {
  icon: IconName;
  method: string;
  path: string;
  value: string;
  action: string;
  href: string;
}

interface InfrastructureNode {
  icon: IconName;
  title: string;
  detail: string;
}

interface ProjectBuild {
  title: string;
  label: string;
  summary: string;
  stack: string[];
  infrastructure: InfrastructureNode[];
  notes: string[];
}

const navItems = ["HOME", "ABOUT", "PROJECTS", "SKILLS", "EXPERIENCE", "CONTACT"];

const statusItems = [
  { icon: "activity" as IconName, label: "STATUS: ONLINE" },
  { icon: "map-pin" as IconName, label: "LOCATION: SAN FRANCISCO, CA" },
  { icon: "book" as IconName, label: "MSCS: USF 2026" },
  { icon: "bars" as IconName, label: "FOCUS: AI + FULL-STACK" },
];

const quickLinks = ["/about", "/projects", "/skills", "/experience", "/contact"];

const principles = [
  "TRANSLATE SPECS INTO SYSTEMS",
  "AUTOMATE MANUAL WORKFLOWS",
  "VALIDATE WITH REAL DATA",
  "SHIP AI-POWERED TOOLS",
  "BUILD CLOUD-READY PIPELINES",
];

const profileCards = [
  { icon: "code" as IconName, title: "JAVA / TS", detail: "A2A systems" },
  { icon: "chip" as IconName, title: "AI / ML", detail: "LLMs + YOLO" },
  { icon: "cloud" as IconName, title: "CLOUD", detail: "AWS + GCP" },
  { icon: "bars" as IconName, title: "DATA", detail: "SQL + pipelines" },
];

const journeySteps: JourneyStep[] = [
  { icon: "server", title: "SNAPLOGIC", copy: "A2A protocol client, server, Snaps, and pipelines" },
  { icon: "users", title: "PISTACHIO", copy: "Led 3-person team automating catalog extraction" },
  { icon: "target", title: "USF RESEARCH", copy: "YOLOv8 detection pipeline reaching 92% mAP" },
  { icon: "database", title: "HACKAITHON", copy: "First-prize LLM chatbot for SQL data retrieval" },
  { icon: "book", title: "USF MSCS", copy: "Master in Computer Science, May 2026" },
];

const roles = ["Software Engineer Intern", "AI / ML Engineer", "Computer Vision Researcher", "Full-Stack Developer"];

const projects: Project[] = [
  {
    title: "INTERVIEWITHAI",
    period: "JUN 2026 - PRESENT",
    description: "AI-powered interview practice platform with voice interviews, coding rounds, and structured feedback.",
    tags: ["Next.js", "NestJS", "Vapi"],
  },
  {
    title: "CODEX SESSION VISUALIZER",
    period: "JUL 2026",
    description: "VS Code extension that turns raw Codex sessions into file activity labels, logs, and agent graphs.",
    tags: ["VS Code", "TypeScript", "Developer Tools"],
  },
  {
    title: "A2A MULTI-AGENT BUILDER",
    period: "JAN 2026 - MAR 2026",
    description: "Platform for creating, versioning, and orchestrating dynamic multi-agent AI systems.",
    tags: ["A2A", "TypeScript", "MongoDB Atlas"],
  },
  {
    title: "10-AGENT AI BOARD GAME",
    period: "JAN 2026 - FEB 2026",
    description: "Hierarchical multi-agent board game simulation with autonomous characters and a Dungeon Master.",
    tags: ["Multi-Agent AI", "JSON Actions", "Game Systems"],
  },
  {
    title: "ROAD ASSET DETECTION",
    period: "BOONE COUNTY",
    description: "YOLO-based computer vision pipeline for detecting and mapping roadway infrastructure from 360 imagery.",
    tags: ["Python", "YOLO", "React"],
  },
];

const skillGroups: SkillGroup[] = [
  { icon: "monitor", title: "FRONTEND", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML / CSS"] },
  { icon: "box", title: "BACKEND", items: ["Java", "Node.js", "Express", "REST APIs", "SQL"] },
  { icon: "chip", title: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "YOLO", "LLMs"] },
  { icon: "database", title: "DATA", items: ["Pandas", "NumPy", "Pinecone", "JSON", "SQL queries"] },
  { icon: "cloud", title: "CLOUD / DEVOPS", items: ["AWS EC2 / S3", "Lambda", "EKS / RDS", "GCP Firebase", "Docker / K8s"] },
  { icon: "tool", title: "TOOLS", items: ["GitHub Actions", "CI / CD", "Ansible", "Terraform", "Packer"] },
];

const endpoints: Endpoint[] = [
  {
    icon: "mail",
    method: "GET",
    path: "/email",
    value: "dvvaru@dons.usfca.edu",
    action: "SEND",
    href: "mailto:dvvaru@dons.usfca.edu",
  },
  {
    icon: "phone",
    method: "GET",
    path: "/phone",
    value: "424-213-0720",
    action: "CALL",
    href: "tel:4242130720",
  },
  {
    icon: "github",
    method: "GET",
    path: "/github",
    value: "github.com/Devenvaruv",
    action: "VIEW",
    href: "https://github.com/Devenvaruv",
  },
  {
    icon: "linkedin",
    method: "GET",
    path: "/linkedin",
    value: "linkedin.com/in/deven-v",
    action: "VIEW",
    href: "https://www.linkedin.com/in/deven-v",
  },
];

const architectureNodes = [
  { icon: "user" as IconName, title: "CLIENT / USER", detail: "" },
  { icon: "monitor" as IconName, title: "REACT / NEXT UI", detail: "Dashboards and tools" },
  { icon: "server" as IconName, title: "JAVA / NODE APIs", detail: "A2A, REST, pipelines" },
  { icon: "chip" as IconName, title: "AI / CV MODELS", detail: "LLMs, YOLO, SQL agents" },
  { icon: "database" as IconName, title: "DATA LAYER", detail: "SQL, JSON, Pinecone" },
  { icon: "cloud" as IconName, title: "CLOUD RUNTIME", detail: "AWS, GCP, Docker" },
  { icon: "activity" as IconName, title: "VALIDATION", detail: "mAP, outputs, workflows" },
];

const projectBuilds: ProjectBuild[] = [
  {
    title: "INTERVIEWITHAI",
    label: "AI INTERVIEW PRACTICE PLATFORM",
    summary:
      "An end-to-end product for realistic voice interviews, technical coding problems, transcripts, and AI-generated performance evaluations.",
    stack: ["Next.js", "React", "TypeScript", "NestJS", "Vapi", "Monaco Editor", "Cloud Infrastructure"],
    infrastructure: [
      { icon: "monitor", title: "WEB APP", detail: "Interview flow and coding UI" },
      { icon: "mail", title: "VOICE AGENTS", detail: "Real-time Vapi conversations" },
      { icon: "code", title: "CODE EDITOR", detail: "Monaco technical rounds" },
      { icon: "server", title: "SESSION API", detail: "Questions, transcripts, submissions" },
      { icon: "chip", title: "AI EVALUATOR", detail: "Structured performance feedback" },
      { icon: "cloud", title: "DEPLOYMENT", detail: "Full-stack cloud rollout" },
    ],
    notes: ["Voice interview simulation", "Coding challenge workspace", "Session history and transcripts"],
  },
  {
    title: "CODEX SESSION VISUALIZER",
    label: "VS CODE EXTENSION FOR AI CODING INSPECTION",
    summary:
      "A developer tool that visualizes how Codex explores and changes a codebase, including file labels, readable logs, and multi-agent graphs.",
    stack: ["VS Code Extension API", "TypeScript", "Codex Session Data", "Graph Visualization", "File Tree UI"],
    infrastructure: [
      { icon: "book", title: "SESSION INPUT", detail: "Raw Codex activity data" },
      { icon: "server", title: "PARSER", detail: "Prompts, responses, tools" },
      { icon: "bars", title: "FILE LABELS", detail: "F, R, E, C, D indicators" },
      { icon: "database", title: "LOG MODEL", detail: "Structured execution flow" },
      { icon: "users", title: "AGENT GRAPH", detail: "Main session to sub-agents" },
      { icon: "monitor", title: "VS CODE UI", detail: "Tree badges and views" },
    ],
    notes: ["Folder priority D > C > E > R > F", "Readable tool and file-operation logs", "Multi-agent workflow visualization"],
  },
  {
    title: "A2A MULTI-AGENT BUILDER",
    label: "DYNAMIC AGENT ORCHESTRATION PLATFORM",
    summary:
      "A platform for building multi-agent AI systems from versioned configurations rather than hardcoded workflows.",
    stack: ["A2A", "TypeScript", "MongoDB Atlas", "Prompt Versioning", "Runtime Orchestration", "Execution Logs"],
    infrastructure: [
      { icon: "user", title: "REQUEST", detail: "Task and context input" },
      { icon: "server", title: "ORCHESTRATOR", detail: "Plans runtime teams" },
      { icon: "users", title: "AGENT FACTORY", detail: "Specialized agents on demand" },
      { icon: "database", title: "CONFIG STORE", detail: "Prompts, routes, context" },
      { icon: "refresh", title: "VERSIONING", detail: "Rollback and reproducibility" },
      { icon: "check", title: "AGGREGATOR", detail: "Structured final outputs" },
    ],
    notes: ["Parallel and sequential execution", "Traceable prompt updates", "Shared context and logs"],
  },
  {
    title: "10-AGENT AI BOARD GAME",
    label: "HIERARCHICAL MULTI-AGENT GAME SIMULATION",
    summary:
      "A custom board game simulation where autonomous AI characters move, talk, act, and fight under a Dungeon Master agent.",
    stack: ["Multi-Agent Systems", "Agent Orchestration", "Structured JSON", "Game State", "Dialogue Agents", "Action Agents"],
    infrastructure: [
      { icon: "book", title: "GAME RULES", detail: "Board, actions, combat" },
      { icon: "user", title: "DUNGEON MASTER", detail: "World control and validation" },
      { icon: "users", title: "PLAYER AGENTS", detail: "Personalities and decisions" },
      { icon: "mail", title: "DIALOGUE AGENTS", detail: "Character interactions" },
      { icon: "code", title: "ACTION AGENTS", detail: "JSON movement and combat" },
      { icon: "database", title: "GAME STATE", detail: "Shared environment updates" },
    ],
    notes: ["10-agent hierarchy", "Autonomous movement and combat", "Personality-driven decisions"],
  },
  {
    title: "ROAD ASSET DETECTION",
    label: "YOLO COMPUTER VISION MAPPING PIPELINE",
    summary:
      "A computer vision workflow for Boone County that detects road infrastructure from 360-degree roadway imagery and exports mapping-ready data.",
    stack: ["Python", "YOLO", "Computer Vision", "Dataset Augmentation", "JSON", "CSV", "React"],
    infrastructure: [
      { icon: "upload", title: "IMAGE INPUT", detail: "360 roadway imagery" },
      { icon: "target", title: "YOLO MODELS", detail: "Infrastructure detection" },
      { icon: "refresh", title: "TRAINING LOOP", detail: "Refinement and augmentation" },
      { icon: "database", title: "DETECTIONS", detail: "JSON and CSV outputs" },
      { icon: "monitor", title: "REVIEW APP", detail: "Bounding boxes and segments" },
      { icon: "map-pin", title: "MAPPING FLOW", detail: "Road asset handoff" },
    ],
    notes: ["0.80+ mAP on key classes", "20%+ mAP improvement", "Reduced manual image labeling"],
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="paper-noise" aria-hidden="true" />
      <section className="browser-window" aria-label="Deven Varu portfolio website">
        <BrowserChrome />
        <SiteHeader />

        <section className="system-board">
          <NetworkLines />

          <aside className="left-rail">
            <StatusPanel />
            <PrinciplesPanel />
            <SystemLoadPanel />
          </aside>

          <Actor className="visitor-node" icon="laptop" label="VISITOR / RECRUITER" />
          <HeroCloud />
          <Actor className="github-node" icon="github" label="GITHUB" />
          <QuickLinksPanel />

          <OverviewPanel />
          <JourneyPanel />
          <ProjectsPanel />
          <SkillsPanel />
          <EducationPanel />
          <ContactPanel />
          <ArchitecturePanel />
        </section>

        <ProjectBuildsSection />

        <SiteFooter />
      </section>
    </main>
  );
}

function BrowserChrome() {
  return (
    <header className="browser-chrome" aria-label="Browser controls">
      <div className="browser-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="browser-actions" aria-hidden="true">
        <Icon name="arrow-left" size={30} />
        <Icon name="arrow-right" size={30} />
        <Icon name="refresh" size={28} />
      </div>
      <div className="address-bar">
        <Icon name="lock" size={18} />
        <span>deven-varu.portfolio</span>
        <Icon name="star" size={24} />
      </div>
      <Icon className="browser-menu" name="more" size={26} />
    </header>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Deven Varu home">
        <span className="brand-mark">
          <Icon name="code" size={38} />
        </span>
        <span>
          <strong>DEVEN VARU</strong>
          <small>MSCS @ USF</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} className={item === "HOME" ? "active" : ""} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <ThemeToggle />
    </header>
  );
}

function StatusPanel() {
  return (
    <SketchPanel className="status-panel compact-panel" title="SYSTEM STATUS" icon="activity">
      <ul className="status-list">
        {statusItems.map((item) => (
          <li key={item.label}>
            <Icon name={item.icon} size={16} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </SketchPanel>
  );
}

function PrinciplesPanel() {
  return (
    <SketchPanel className="principles-panel compact-panel" title="CORE PRINCIPLES" icon="check">
      <ul className="principle-list">
        {principles.map((principle) => (
          <li key={principle}>
            <Icon name="check" size={15} />
            <span>{principle}</span>
          </li>
        ))}
      </ul>
    </SketchPanel>
  );
}

function SystemLoadPanel() {
  return (
    <SketchPanel className="load-panel compact-panel" title="SYSTEM LOAD" icon="server">
      <svg className="load-chart" viewBox="0 0 180 82" aria-hidden="true">
        <path className="chart-grid" d="M16 9v60M16 69h154M16 49h154M16 29h154" />
        <path className="chart-line" d="M20 64 35 48 48 56 62 34 78 43 96 26 112 18 130 57 147 33 164 43 176 24" />
      </svg>
      <div className="load-caption">
        <span>OPTIMIZED FOR IMPACT</span>
        <strong>87%</strong>
      </div>
      <div className="load-meter" aria-hidden="true">
        <span />
      </div>
    </SketchPanel>
  );
}

function Actor({ className, icon, label }: { className: string; icon: IconName; label: string }) {
  return (
    <figure className={`actor ${className}`}>
      <span className="actor-icon">
        <Icon name={icon} size={46} />
      </span>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function HeroCloud() {
  return (
    <section className="hero-cloud" id="home">
      <svg className="cloud-outline" viewBox="0 0 560 240" aria-hidden="true">
        <path d="M91 174c-50-3-75-31-68-67 6-29 31-49 61-46 18-38 60-61 104-46 18-19 66-28 95-1 12 11 19 24 20 37 32-24 92-10 102 27 36 0 73 28 73 67 0 47-43 79-100 73H110c-8 0-14-1-19-2Z" />
        <path d="M85 180c-44-3-70-25-72-60M78 66c27-16 61-7 81 17M196 18c37-12 78 0 102 35M314 54c29-18 74-5 91 28M405 80c39 1 67 30 66 66M111 216h270" />
        <path d="M98 171c-43-2-66-24-59-56 5-24 26-41 52-39 16-33 53-52 90-39 15-17 51-21 74-3" />
      </svg>
      <div className="hero-content">
        <p>SYSTEM: DEVEN_PORTFOLIO</p>
        <h1>DEVEN VARU</h1>
        <span>FULL-STACK / AI SYSTEMS / SOFTWARE ENGINEER</span>
        <ul className="hero-tags" aria-label="Core strengths">
          <li>A2A Protocol</li>
          <li>Computer Vision</li>
          <li>LLM Workflows</li>
          <li>Cloud Pipelines</li>
        </ul>
      </div>
    </section>
  );
}

function QuickLinksPanel() {
  return (
    <SketchPanel className="quick-panel compact-panel" title="QUICK LINKS (API)">
      <ul className="quick-list">
        {quickLinks.map((link) => (
          <li key={link}>
            <span>GET</span>
            <code>{link}</code>
            <SketchButton href={link === "/contact" ? "#contact" : `#${link.slice(1)}`}>VIEW</SketchButton>
          </li>
        ))}
      </ul>
    </SketchPanel>
  );
}

function OverviewPanel() {
  return (
    <SketchPanel className="overview-panel numbered-panel" id="about" title="1. SYSTEM OVERVIEW (PROFILE)" icon="user">
      <p className="overview-copy">
        I am a Master&apos;s in Computer Science student at the University of San Francisco building AI, computer
        vision, and full-stack systems. My work spans A2A protocol implementation at SnapLogic, AI catalog automation
        at Pistachio, YOLOv8 research pipelines, and first-prize hackathon work on LLM-powered SQL retrieval.
      </p>
      <div className="profile-grid">
        {profileCards.map((card) => (
          <article key={card.title} className="profile-card">
            <Icon name={card.icon} size={40} />
            <h3>{card.title}</h3>
            <p>{card.detail}</p>
          </article>
        ))}
      </div>
    </SketchPanel>
  );
}

function JourneyPanel() {
  return (
    <SketchPanel className="journey-panel numbered-panel" id="experience" title="2. EXPERIENCE PIPELINE (JOURNEY)">
      <div className="journey-steps">
        {journeySteps.map((step, index) => (
          <article key={step.title} className="journey-step">
            <span className="journey-icon">
              <Icon name={step.icon} size={39} />
            </span>
            {index < journeySteps.length - 1 ? <span className="step-arrow" aria-hidden="true" /> : null}
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
      <div className="roles-box">
        <span>SELECTED ROLES</span>
        <ul>
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
    </SketchPanel>
  );
}

function ProjectsPanel() {
  return (
    <SketchPanel className="projects-panel numbered-panel" id="projects" title="3. PROJECT ARCHITECTURE (FEATURED)">
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="card-top" aria-hidden="true">
              {Array.from({ length: 6 }).map((_, index) => (
                <span key={index} />
              ))}
              <Icon name="chip" size={21} />
            </div>
            <h3>{project.title}</h3>
            <span className="project-period">{project.period}</span>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <SketchButton href="#project-builds-title">VIEW ARCHITECTURE</SketchButton>
          </article>
        ))}
      </div>
    </SketchPanel>
  );
}

function SkillsPanel() {
  return (
    <SketchPanel className="skills-panel numbered-panel" id="skills" title="4. SKILLS STACK (TECHNOLOGY ARCHITECTURE)">
      <div className="skill-stack">
        {skillGroups.map((group, index) => (
          <article key={group.title} className="skill-module">
            <Icon name={group.icon} size={37} />
            {index < skillGroups.length - 1 ? <span className="module-arrow" aria-hidden="true" /> : null}
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SketchPanel>
  );
}

function EducationPanel() {
  return (
    <SketchPanel className="education-panel numbered-panel" title="5. EDUCATION / KNOWLEDGE BASE">
      <div className="knowledge-cylinder">
        <div className="cylinder-top" aria-hidden="true" />
        <div className="cylinder-body">
          <p>Graduate Education</p>
          <p>University of San Francisco</p>
          <p>Master in Computer Science</p>
          <p>Aug 2023 - May 2026</p>
          <p>San Francisco, CA</p>
          <hr />
          <p>AI / Machine Learning</p>
          <p>Computer Vision</p>
          <p>Cloud Infrastructure</p>
          <p>Full-Stack Systems</p>
        </div>
        <div className="cylinder-bottom" aria-hidden="true" />
      </div>
    </SketchPanel>
  );
}

function ContactPanel() {
  return (
    <SketchPanel className="contact-panel numbered-panel" id="contact" title="6. CONTACT ENDPOINTS (APIS)">
      <ul className="endpoint-list">
        {endpoints.map((endpoint) => (
          <li key={endpoint.path}>
            <Icon name={endpoint.icon} size={27} />
            <strong>
              {endpoint.method} <code>{endpoint.path}</code>
            </strong>
            <span>{endpoint.value}</span>
            <SketchButton href={endpoint.href}>{endpoint.action}</SketchButton>
          </li>
        ))}
      </ul>
      <div className="contact-callout">
        <Icon name="monitor" size={25} />
        <span>Available for software engineering, AI, and computer vision roles.</span>
      </div>
    </SketchPanel>
  );
}

function ArchitecturePanel() {
  return (
    <SketchPanel className="architecture-panel" title="SYSTEM ARCHITECTURE (HOW I BUILD)">
      <div className="architecture-flow">
        {architectureNodes.map((node, index) => (
          <article key={node.title} className="architecture-node">
            <Icon name={node.icon} size={42} />
            {index < architectureNodes.length - 1 ? <span className="architecture-arrow" aria-hidden="true" /> : null}
            <h3>{node.title}</h3>
            {node.detail ? <p>{node.detail}</p> : null}
          </article>
        ))}
      </div>
    </SketchPanel>
  );
}

function ProjectBuildsSection() {
  return (
    <section className="project-builds" aria-labelledby="project-builds-title">
      <header className="project-builds-heading">
        <span>PROJECT APPENDIX</span>
        <h2 id="project-builds-title">DETAILED PROJECT INFRASTRUCTURE</h2>
        <p>Five real project systems sketched as deployment-ready architecture notes.</p>
      </header>

      <div className="project-build-grid">
        {projectBuilds.map((project, index) => (
          <ProjectBuildCard key={project.title} index={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectBuildCard({ index, project }: { index: number; project: ProjectBuild }) {
  return (
    <article className="project-build-card">
      <header className="project-build-card-header">
        <span>PROJECT {String(index + 1).padStart(2, "0")}</span>
        <h3>{project.title}</h3>
        <p>{project.label}</p>
      </header>

      <p className="project-build-summary">{project.summary}</p>

      <div className="project-build-stack" aria-label={`${project.title} stack`}>
        <strong>STACK</strong>
        <ul>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="infrastructure-flow" aria-label={`${project.title} infrastructure`}>
        {project.infrastructure.map((node, nodeIndex) => (
          <article key={node.title} className="infra-node">
            <Icon name={node.icon} size={34} />
            {nodeIndex < project.infrastructure.length - 1 ? <span className="infra-arrow" aria-hidden="true" /> : null}
            <h4>{node.title}</h4>
            <p>{node.detail}</p>
          </article>
        ))}
      </div>

      <ul className="project-notes">
        {project.notes.map((note) => (
          <li key={note}>
            <Icon name="check" size={15} />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Icon name="server" size={45} />
      <span>(c) 2026 DEVEN VARU * SAN FRANCISCO, CA</span>
      <span className="built-with">
        BUILT WITH <Icon name="heart" size={28} /> AND <Icon name="code" size={28} />
      </span>
      <span className="uptime">
        AI / CV / FULL-STACK <Icon name="bars" size={46} />
      </span>
    </footer>
  );
}

function SketchPanel({
  children,
  className = "",
  icon,
  id,
  title,
}: {
  children: ReactNode;
  className?: string;
  icon?: IconName;
  id?: string;
  title: string;
}) {
  return (
    <section className={`sketch-panel ${className}`} id={id}>
      <header className="panel-heading">
        {icon ? <Icon name={icon} size={28} /> : null}
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

function SketchButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a className="sketch-button" href={href}>
      {children}
    </a>
  );
}

function NetworkLines() {
  return (
    <svg className="network-lines" viewBox="0 0 1200 790" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <marker id="arrow" markerHeight="8" markerWidth="8" orient="auto-start-reverse" refX="7" refY="4">
          <path d="M0,0 L8,4 L0,8" />
        </marker>
      </defs>
      <path className="dashed two-way" d="M280 92 H410" />
      <path className="dashed two-way" d="M760 92 H920" />
      <path className="solid one-way" d="M520 195 C420 198 410 198 408 242" />
      <path className="solid one-way" d="M660 190 V242" />
      <path className="solid one-way" d="M780 190 C900 190 900 196 910 242" />
      <path className="solid one-way" d="M415 360 H500" />
      <path className="solid one-way" d="M810 360 H890" />
      <path className="dashed one-way" d="M455 520 V582 H300" />
      <path className="dashed one-way" d="M700 520 V582 H600" />
      <path className="solid two-way" d="M725 605 H780" />
      <path className="dashed one-way" d="M920 518 V590 H995" />
    </svg>
  );
}

function Icon({ className = "", name, size = 24 }: { className?: string; name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`}
      fill="none"
      height={size}
      viewBox="0 0 64 64"
      width={size}
    >
      <g className="icon-main">{iconPaths[name]}</g>
      <g className="icon-ghost" transform="translate(.65 .45) rotate(-.65 32 32)">
        {iconPaths[name]}
      </g>
    </svg>
  );
}

const iconPaths: Record<IconName, ReactNode> = {
  activity: <path d="M8 35h9l5-13 8 25 6-17h8l3-8 5 13h4" />,
  "arrow-left": <path d="M39 16 23 32l16 16M25 32h30" />,
  "arrow-right": <path d="M25 16 41 32 25 48M9 32h30" />,
  bars: (
    <>
      <rect height="9" width="7" x="10" y="45" />
      <rect height="18" width="7" x="24" y="36" />
      <rect height="28" width="7" x="38" y="26" />
      <rect height="40" width="7" x="52" y="14" />
    </>
  ),
  book: (
    <>
      <path d="M12 16c8-4 16-3 20 2 4-5 12-6 20-2v36c-8-4-16-3-20 2-4-5-12-6-20-2V16Z" />
      <path d="M32 18v36M17 23c5-1 9 0 12 3M35 26c3-3 8-4 12-3" />
    </>
  ),
  box: (
    <>
      <path d="M32 8 52 19v25L32 56 12 44V19L32 8Z" />
      <path d="M12 19 32 31l20-12M32 31v25" />
    </>
  ),
  check: <path d="M15 33 27 45 50 19" />,
  chip: (
    <>
      <rect height="28" rx="5" width="28" x="18" y="18" />
      <path d="M25 32c0-6 11-6 11 0 0 6-11 5-11 11M39 25c-5 0-8 4-8 9M12 25h6M12 39h6M46 25h6M46 39h6M25 12v6M39 12v6M25 46v6M39 46v6" />
    </>
  ),
  cloud: <path d="M20 44h27c7 0 12-5 12-11s-5-11-12-11h-1C43 14 36 9 28 11c-7 1-12 6-14 13-6 1-10 5-10 10 0 6 5 10 16 10Z" />,
  code: (
    <>
      <path d="M25 18 13 32 25 46" />
      <path d="M39 18 51 32 39 46" />
      <path d="M35 14 29 50" />
    </>
  ),
  database: (
    <>
      <ellipse cx="32" cy="16" rx="18" ry="7" />
      <path d="M14 16v28c0 4 8 7 18 7s18-3 18-7V16" />
      <path d="M14 30c0 4 8 7 18 7s18-3 18-7" />
    </>
  ),
  github: (
    <>
      <rect height="44" rx="4" width="44" x="10" y="10" />
      <circle cx="32" cy="30" r="10" />
      <path d="M25 42c-4 1-6-1-8-4M29 40v9M35 40v9M24 24l-3-6M40 24l3-6" />
    </>
  ),
  globe: (
    <>
      <circle cx="32" cy="32" r="22" />
      <path d="M10 32h44M32 10c8 7 8 37 0 44M32 10c-8 7-8 37 0 44" />
    </>
  ),
  heart: <path d="M32 52S12 39 12 24c0-8 10-12 20-1 10-11 20-7 20 1 0 15-20 28-20 28Z" />,
  laptop: (
    <>
      <rect height="27" rx="2" width="32" x="16" y="12" />
      <path d="M9 50h46l-7-11H16L9 50Z" />
      <circle cx="32" cy="23" r="5" />
      <path d="M22 35c3-6 17-6 20 0" />
    </>
  ),
  linkedin: (
    <>
      <rect height="40" rx="3" width="40" x="12" y="12" />
      <path d="M22 28v16M22 20v1M32 44V31c0-5 10-6 10 0v13" />
    </>
  ),
  lock: (
    <>
      <rect height="22" rx="2" width="28" x="18" y="28" />
      <path d="M24 28v-8a8 8 0 0 1 16 0v8" />
    </>
  ),
  mail: (
    <>
      <rect height="30" rx="3" width="44" x="10" y="17" />
      <path d="M12 20 32 34 52 20" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M32 57S17 40 17 27a15 15 0 1 1 30 0c0 13-15 30-15 30Z" />
      <circle cx="32" cy="27" r="5" />
    </>
  ),
  monitor: (
    <>
      <rect height="29" rx="3" width="40" x="12" y="15" />
      <path d="M23 51h18M32 44v7M18 32h8l4-8 5 16 4-8h7" />
    </>
  ),
  more: <path d="M32 16v1M32 31v1M32 46v1" />,
  phone: (
    <>
      <path d="M20 12h12l5 12-7 4c4 8 10 14 18 18l4-7 12 5v12c0 3-2 5-5 5-30-1-54-25-55-55 0-3 2-5 5-5Z" />
      <path d="M39 13c7 2 12 7 14 14M40 23c3 1 5 3 6 6" />
    </>
  ),
  refresh: <path d="M48 21A20 20 0 1 0 52 36M48 21V10h-11" />,
  rocket: (
    <>
      <path d="M31 36 20 47l-3-11 11-11c8-8 18-13 26-13-1 8-5 18-13 26L31 49l-11-3 11-10Z" />
      <circle cx="42" cy="22" r="4" />
      <path d="M21 48c-4 1-7 4-8 8 4-1 7-4 8-8Z" />
    </>
  ),
  server: (
    <>
      <rect height="13" rx="2" width="40" x="12" y="13" />
      <rect height="13" rx="2" width="40" x="12" y="31" />
      <path d="M20 20h1M20 38h1M29 20h15M29 38h15" />
    </>
  ),
  star: <path d="M32 8 39 24l17 1-13 11 4 17-15-9-15 9 4-17L8 25l17-1 7-16Z" />,
  sun: (
    <>
      <circle cx="32" cy="32" r="9" />
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />
    </>
  ),
  target: (
    <>
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="12" />
      <circle cx="32" cy="32" r="3" />
      <path d="M44 20 53 11M49 11h4v4M32 10v8M32 46v8M10 32h8M46 32h8" />
    </>
  ),
  tool: (
    <>
      <path d="M23 36 11 48l5 5 12-12" />
      <path d="M41 13c5 1 8 5 9 10l-9 9-9-9 9-10Z" />
      <path d="M30 34 16 20l-4 4 14 14M37 29l13 13-8 8-13-13" />
    </>
  ),
  upload: (
    <>
      <path d="M32 51V23M22 33l10-10 10 10" />
      <path d="M18 48H13c-5 0-9-4-9-9 0-4 3-8 8-9 2-10 11-17 22-15 8 2 14 8 16 16 6 1 10 5 10 10 0 4-3 7-8 7h-6" />
    </>
  ),
  user: (
    <>
      <circle cx="32" cy="22" r="9" />
      <path d="M16 52c3-13 29-13 32 0" />
    </>
  ),
  users: (
    <>
      <circle cx="25" cy="23" r="8" />
      <circle cx="43" cy="25" r="7" />
      <path d="M10 52c2-12 27-12 30 0M33 51c2-9 18-9 21 0" />
    </>
  ),
};
