"use client";
import { useState } from "react";

const weeks = [
  {
    week: "Week 1",
    title: "Follow the Money",
    desc: "Pick a real company. Map how it makes money, who pays, what they pay for, and where the profit actually is.",
    badge: "Business model",
  },
  {
    week: "Week 2",
    title: "Who Is the Customer, Really?",
    desc: "Talk to real users. Write a customer research piece. Learn the difference between what people say they want and what they do.",
    badge: "Customer thinking",
  },
  {
    week: "Week 3",
    title: "Who's Winning and Why",
    desc: "Map a competitive landscape. Three companies, one market. Explain who is winning and why, not just what they do.",
    badge: "Market analysis",
  },
  {
    week: "Week 4",
    title: "Build Something Real",
    desc: "Create a tangible artifact: a working script, a dataset, a product concept. Something that lives on GitHub or your portfolio.",
    badge: "Output",
  },
  {
    week: "Week 5",
    title: "The Memo",
    desc: "Write a one-page business recommendation. Problem. Context. Options. Recommendation. Risk. No fluff.",
    badge: "Executive communication",
  },
  {
    week: "Week 6",
    title: "Final Presentation",
    desc: "Present a complete case study live. Business model, customer, market, your build, your recommendation. Published publicly.",
    badge: "Synthesis",
  },
];

const outcomes = [
  {
    number: "01",
    title: "A public portfolio",
    desc: "Five published pieces of original work on a personal website you own. Not private assignments nobody reads.",
  },
  {
    number: "02",
    title: "Real work on GitHub",
    desc: "Code, datasets, or structured research that demonstrates how you think, not just what you studied.",
  },
  {
    number: "03",
    title: "Industry mentor feedback",
    desc: "Weekly 60-minute calls with a practitioner who reviews your work the way a manager would, not a professor.",
  },
  {
    number: "04",
    title: "AI Fellows Certificate",
    desc: "A signed completion certificate from the Program Director. Something you can show and point to.",
  },
];

const projects = [
  // Live
  {
    name: "Viao",
    desc: "AI-powered suite for local service businesses: receptionist, call center, commerce, and marketing. Done-for-you, not do-it-yourself.",
    domain: "Local Business",
    status: "Live",
    url: "https://orino-ai.vercel.app",
  },
  {
    name: "StackSignal",
    desc: "Sales intelligence that turns a company name into a precision outreach brief using Apollo and Claude. Built at a hackathon.",
    domain: "Sales Tech",
    status: "Live",
    url: "https://stacksignal-rust.vercel.app",
  },
  {
    name: "SaasMatchup",
    desc: "Three-sided marketplace for B2B SaaS stack decisions. Buyers get AI-powered recommendations, vendors get placement.",
    domain: "B2B SaaS",
    status: "Live",
    url: "https://saasmatchup.com",
  },
  {
    name: "Vantage",
    desc: "AI marketing intelligence agent for brand marketers. Cross-account benchmarks from 10,000+ real accounts.",
    domain: "MarTech",
    status: "Live",
    url: "https://vantage-ai-pi.vercel.app",
  },
  {
    name: "Porino AI",
    desc: "Infrastructure patterns library for teams building multi-agent AI systems. Written for practitioners, not demos.",
    domain: "AI Infra",
    status: "Live",
    url: "https://porino-ai.vercel.app",
  },
  // Building
  {
    name: "AgentLearn",
    desc: "Learning platform where AI agents teach people how to use AI, personalized to their background and career outcome.",
    domain: "EdTech",
    status: "Building",
    url: "https://porino-ai.vercel.app/learn",
  },
  {
    name: "Reflex",
    desc: "Passive learning system that watches what you consume and turns it into targeted practice for the skills you are building.",
    domain: "Consumer",
    status: "Building",
    url: "#",
  },
  {
    name: "Threshold",
    desc: "Mentorship initiative connecting Indian diaspora professionals with students in tier-3 cities in India aged 15-22.",
    domain: "Nonprofit",
    status: "Building",
    url: "#",
  },
  {
    name: "AI Fellows",
    desc: "This program. Industry fellowship connecting practitioners with ambitious students outside the standard pipeline.",
    domain: "Nonprofit",
    status: "Building",
    url: "#",
  },
  // Built
  {
    name: "ObsGap",
    desc: "AI observability auditor. Connect your GitHub and an agent scans your actual codebase for AI and ML observability gaps.",
    domain: "Dev Tools",
    status: "Built",
    url: "#",
  },
  {
    name: "Blackmere",
    desc: "Browser game for kids. Play a plague doctor in 1348. Every decision requires structured reasoning, not gut feel.",
    domain: "Gaming",
    status: "Built",
    url: "#",
  },
  {
    name: "Leadgen System",
    desc: "Outbound lead generation pipeline chaining Apollo, Claude, and custom scoring. Validated with a real consulting client.",
    domain: "Sales Tech",
    status: "Built",
    url: "#",
  },
  // Ideas
  {
    name: "Model Router",
    desc: "Smart API proxy that routes AI requests to the right model by cost, speed, and quality. BYOK, no config needed.",
    domain: "AI Infra",
    status: "Idea",
    url: "#",
  },
  {
    name: "India Influence Platform",
    desc: "Two-sided marketplace connecting Indian micro-influencers and regional athletes with brands and sponsors.",
    domain: "Marketplace",
    status: "Idea",
    url: "#",
  },
  {
    name: "Crowd Capital",
    desc: "Community-powered funding platform for early-stage startups. AI evaluates the opportunity, crowd backs the founder.",
    domain: "Fintech",
    status: "Idea",
    url: "#",
  },
  {
    name: "Tycoon US",
    desc: "Platform that lets solo founders run a one-person company by delegating operations to an AI CEO.",
    domain: "AI Ops",
    status: "Idea",
    url: "#",
  },
  {
    name: "Figcareer",
    desc: "AI-powered career roadmap generator for Gen Z. Input your skills and aspirations, get a personalized path forward.",
    domain: "Career Tech",
    status: "Idea",
    url: "#",
  },
  {
    name: "Runway",
    desc: "Real-time job discovery platform for college students. Scrapes fresh listings, surfaces roles before they hit LinkedIn.",
    domain: "Career Tech",
    status: "Idea",
    url: "#",
  },
  {
    name: "Structured Speech Coach",
    desc: "Communication coaching for non-native English speakers in US corporate settings. AI feedback on structure and fluency.",
    domain: "EdTech",
    status: "Idea",
    url: "#",
  },
  {
    name: "Agent Studio",
    desc: "Done-for-you AI ops layer for solopreneurs: course sellers, newsletter writers, Shopify merchants. BYOK, $19/mo.",
    domain: "AI Ops",
    status: "Idea",
    url: "#",
  },
  {
    name: "UTM Governance",
    desc: "UTM parameter management and enforcement for marketing agencies. Consistent tracking across all campaigns.",
    domain: "MarTech",
    status: "Idea",
    url: "#",
  },
  {
    name: "Vela / Entrepreneur OS",
    desc: "VC evaluation platform that gives founders a structured investment decision in minutes using the same framework VCs use.",
    domain: "Fintech",
    status: "Idea",
    url: "#",
  },
  {
    name: "Workspace Add-ons",
    desc: "Portfolio of small, focused Google Workspace add-ons that automate repetitive tasks for business teams.",
    domain: "Productivity",
    status: "Idea",
    url: "#",
  },
  {
    name: "Paar",
    desc: "Community platform for digitizing, translating, and preserving Bengali literature. Starting with Jokher Dhan.",
    domain: "Culture",
    status: "Idea",
    url: "#",
  },
];

const DOMAINS = ["All", "AI Infra", "AI Ops", "B2B SaaS", "Career Tech", "Consumer", "Culture", "Dev Tools", "EdTech", "Fintech", "Gaming", "Local Business", "MarTech", "Marketplace", "Nonprofit", "Productivity", "Sales Tech"];
const STATUSES = ["All", "Live", "Building", "Built", "Idea"];

const posts = [
  {
    title: "The Blast Radius Problem: Why Agent Governance Is Not a Prompt Engineering Problem",
    url: "https://porino-ai.vercel.app/blog/blast-radius-agent-governance",
    date: "Jun 2026",
    mins: "10 min",
  },
  {
    title: "Context Engineering Is Not Prompt Engineering: The Four Operations That Actually Matter",
    url: "https://porino-ai.vercel.app/blog/context-engineering-four-operations",
    date: "Jun 2026",
    mins: "10 min",
  },
  {
    title: "Workflows vs. Agents: The Decision Most Teams Get Wrong",
    url: "https://porino-ai.vercel.app/blog/workflows-vs-agents",
    date: "Jun 2026",
    mins: "9 min",
  },
  {
    title: "Determinism vs. Autonomy: The Architecture Decision Every AI Team Avoids",
    url: "https://porino-ai.vercel.app/blog/ai-orchestration-determinism",
    date: "Apr 2026",
    mins: "10 min",
  },
  {
    title: "5 AI Agents Your Marketing Team Can Start Building This Quarter",
    url: "https://porino-ai.vercel.app/blog/ai-agents-for-marketing-teams",
    date: "Apr 2026",
    mins: "11 min",
  },
  {
    title: "How to Organize Context for Agentic AI Systems",
    url: "https://porino-ai.vercel.app/blog/organizing-context-for-agents",
    date: "Apr 2026",
    mins: "9 min",
  },
];

const statusColor: Record<string, string> = {
  Live: "#4caf7d",
  Building: "#5e6ad2",
  Built: "#8a8a8a",
  Idea: "#555555",
};

export default function Home() {
  const [domain, setDomain] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = projects.filter((p) => {
    const domainMatch = domain === "All" || p.domain === domain;
    const statusMatch = status === "All" || p.status === status;
    return domainMatch && statusMatch;
  });

  return (
    <>
      <nav className="nav">
        <span className="nav-logo">AI Fellows</span>
        <div className="nav-links">
          <a href="#program" className="nav-link">Program</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#writing" className="nav-link">Writing</a>
          <a href="#mentor" className="nav-link">Mentor</a>
          <a href="#apply" className="nav-cta">Apply</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="section-inner">
          <p className="hero-eyebrow">Cohort 1 — July 2026</p>
          <p className="hero-provocation">
            Most students never get access to a practitioner who will<br />
            sit with their work and tell them what is actually wrong with it.
          </p>
          <h1 className="hero-headline">
            A 6-week industry fellowship<br />built around real work.
          </h1>
          <p className="hero-sub">
            Real assignments. Real mentor feedback. A published portfolio and a
            completion certificate for ambitious students at state schools,
            HBCUs, and regional universities.
          </p>
          <div className="hero-actions">
            <a href="#apply" className="btn-primary">Apply for Cohort 1</a>
            <a href="#program" className="btn-secondary">See the program →</a>
          </div>
        </div>
      </section>

      {/* Strip */}
      <section className="strip">
        <div className="section-inner">
          <div className="strip-grid">
            <div className="strip-item">
              <span className="strip-label">The gap</span>
              <span className="strip-text">
                Most students graduate without ever having a practitioner
                review their work, challenge their thinking, or explain how
                business decisions actually get made.
              </span>
            </div>
            <div className="strip-divider" />
            <div className="strip-item">
              <span className="strip-label">The program</span>
              <span className="strip-text">
                Six weeks. One mentor. One real assignment per week. Weekly
                60-minute calls. Everything you produce gets published publicly.
              </span>
            </div>
            <div className="strip-divider" />
            <div className="strip-item">
              <span className="strip-label">The outcome</span>
              <span className="strip-text">
                Business fluency, a public portfolio, a GitHub with real work,
                and a mentor relationship that outlasts the program.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="section" id="program">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title">The 6-Week Program</h2>
              <p className="section-subtitle">
                Project-based, not lecture-based. Every week builds one business
                muscle and produces one artifact that goes on your public portfolio.
              </p>
            </div>
          </div>
          <div className="cards-grid">
            {weeks.map((w) => (
              <div key={w.week} className="card">
                <div className="card-top">
                  <span className="card-week">{w.week}</span>
                  <span className="card-badge">{w.badge}</span>
                </div>
                <p className="card-title">{w.title}</p>
                <p className="card-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title">What Fellows Get</h2>
              <p className="section-subtitle">
                Not a certificate from a platform. A body of public work and a
                practitioner who knows your name.
              </p>
            </div>
          </div>
          <div className="outcomes-grid">
            {outcomes.map((o) => (
              <div key={o.number} className="outcome-item">
                <p className="outcome-number">{o.number}</p>
                <p className="outcome-title">{o.title}</p>
                <p className="outcome-desc">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title">Projects</h2>
              <p className="section-subtitle">
                Ideas, products, and tools across AI, SaaS, marketplaces, and
                education. Fellows pick one as their case study and run with it.
              </p>
            </div>
            <span className="project-count">{filtered.length} projects</span>
          </div>

          {/* Filters */}
          <div className="filter-row">
            <div className="filter-group">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`filter-btn ${status === s ? "active" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-row" style={{ marginTop: "8px" }}>
            <div className="filter-group filter-domains">
              {DOMAINS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDomain(d)}
                  className={`filter-btn ${domain === d ? "active" : ""}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {filtered.map((p) => {
              const Tag = p.url !== "#" ? "a" : "div";
              const linkProps = p.url !== "#"
                ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Tag key={p.name} className={`project-card ${p.url !== "#" ? "project-card-link" : ""}`} {...linkProps}>
                  <div className="project-card-top">
                    <span className="project-name">{p.name}</span>
                    <span
                      className="project-status"
                      style={{ color: statusColor[p.status] }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="project-desc">{p.desc}</p>
                  <span className="project-domain">{p.domain}</span>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="section" id="writing">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title">Writing</h2>
              <p className="section-subtitle">
                Essays on agentic systems, AI infrastructure, and how
                practitioners actually build with AI.
              </p>
            </div>
            <a
              href="https://porino-ai.vercel.app/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              All posts →
            </a>
          </div>
          <div className="posts-list">
            {posts.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="post-row"
              >
                <span className="post-title">{p.title}</span>
                <span className="post-meta">{p.date} · {p.mins}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="section" id="mentor">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title">The Mentor</h2>
            </div>
          </div>
          <div className="mentor-block">
            <div className="mentor-meta">
              <p className="mentor-name">Program Director</p>
              <p className="mentor-title">
                Director of Product, Data &amp; AI<br />
                TapClicks
              </p>
              <div className="mentor-links">
                <a
                  href="https://linkedin.com/in/angshumanrudra"
                  className="mentor-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
                <a href="mailto:angshuman@ai-fellows.org" className="mentor-link">
                  angshuman@ai-fellows.org
                </a>
              </div>
            </div>
            <div className="mentor-bio">
              <p>
                Fifteen years working across engineering, product, data, and AI
                at enterprise SaaS companies, early-stage startups, and
                consulting engagements. I know what companies look for when
                they hire, what business decisions look like from the inside,
                and what separates people who advance from people who stall.
              </p>
              <p>
                Most of that knowledge is not taught in school. It lives in
                conversations between practitioners, the kind that happen in
                certain rooms and don't happen in others. AI Fellows is an
                attempt to change that.
              </p>
              <p>
                Every week I review your work the way a manager would. I tell
                you what is sharp, what needs sharpening, and what a real
                business audience would think. That feedback compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="apply-section" id="apply">
        <div className="section-inner">
          <div className="apply-inner">
            <h2 className="apply-title">Apply for Cohort 1</h2>
            <p className="apply-sub">
              Cohort 1 starts July 7, 2026. Limited spots. Remote. Free.
              The only requirement is commitment: show up every week, do the
              work, publish it.
            </p>
            <a
              href="mailto:angshuman@ai-fellows.org?subject=AI Fellows Cohort 1 Application&body=Name:%0ACollege:%0AMajor and year:%0AWhy you want this:%0AWhat you want to learn:"
              className="btn-primary"
            >
              Send an application
            </a>
            <p className="apply-detail">
              Email angshuman@ai-fellows.org with your name, college, major,
              year, and one paragraph on why you want this. No resume required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-inner">
          <div className="footer-inner">
            <span className="footer-name">AI Fellows © 2026</span>
            <a href="mailto:angshuman@ai-fellows.org" className="footer-email">
              angshuman@ai-fellows.org
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
