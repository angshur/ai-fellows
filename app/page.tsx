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

const ACADEMY = "The Academy";
const MAVEN = "Maven";
const projects = [
  {
    name: "The Eval That Catches the Bug",
    desc: "Build a small AI feature, such as a study-guide generator for one of your classes. Write 30 test cases, including clean examples that should pass, and show one real bug your evals caught.",
    domain: "AI Quality",
    inspired: [
      { course: "Building and Evaluating AI Products", by: "Hamel Husain and Bryan Bischof", where: ACADEMY, url: "https://theacademysf.com/courses" },
      { course: "AI Evals For Engineers & PMs", by: "Hamel Husain and Shreya Shankar", where: MAVEN, url: "https://maven.com/courses/ai/evals" },
    ],
  },
  {
    name: "Make an Agent Reliable",
    desc: "Take a simple research agent and add the operating layer: tool limits, retries, a human approval step and a log of every action. Measure how often it fails before and after.",
    domain: "AI Agents",
    inspired: [
      { course: "Harness Engineering", by: "Aishwarya Naresh Reganti and Kiriti Badam", where: ACADEMY, url: "https://theacademysf.com/courses" },
      { course: "Building Agentic AI Applications with a Problem-First Approach", by: "Aishwarya Naresh Reganti and Kiriti Badam", where: MAVEN, url: "https://maven.com/aishwarya-kiriti/genai-system-design" },
    ],
  },
  {
    name: "Ask Your Course Catalog",
    desc: "Build an assistant that answers questions about your college's catalog or student handbook and cites the page it used. Check 50 answers by hand and report how often the citation is right.",
    domain: "AI Infra",
    inspired: [{ course: "Inside the AI Machine", by: "Hamza Farooq", where: ACADEMY, url: "https://theacademysf.com/courses" }],
  },
  {
    name: "What Does One Answer Cost?",
    desc: "Pick one task and run it on three models. Measure quality, speed and cost per answer, then recommend one and defend the trade-off in a one-page memo.",
    domain: "AI Infra",
    inspired: [{ course: "AI Inference Engineering", by: "Abi Aryan", where: ACADEMY, url: "https://theacademysf.com/courses" }],
  },
  {
    name: "Only Possible With AI",
    desc: "Find a task people in your town dread, like filing a permit or a claim. Prototype a product that could not have existed before AI, and write why now.",
    domain: "Product",
    inspired: [{ course: "Products That Couldn't Exist Before AI", by: "Anish Acharya", where: ACADEMY, url: "https://theacademysf.com/courses" }],
  },
  {
    name: "A New Interface",
    desc: "Rebuild one everyday app task as a voice or chat experience. Test it with five people and compare time-to-done against the original.",
    domain: "Consumer",
    inspired: [{ course: "The Next Consumer Interface", by: "Olivia Moore", where: ACADEMY, url: "https://theacademysf.com/courses" }],
  },
  {
    name: "Campus Cold Start",
    desc: "Design a two-sided campus marketplace, such as students and tutors. Plan how it gets its first 100 users, then run the first step with 20 real people.",
    domain: "Marketplaces",
    inspired: [{ course: "How Networks Take Off", by: "Andrew Chen", where: ACADEMY, url: "https://theacademysf.com/courses" }],
  },
  {
    name: "Find the Idea Worth Pursuing",
    desc: "Interview ten people who run a local business. Find one painful, repeated job and write the one-page memo: who has it, what they do today, and what you would build.",
    domain: "Strategy",
    inspired: [{ course: "Finding Ideas Worth Pursuing", by: "Mar Hershenson", where: ACADEMY, url: "https://theacademysf.com/courses" }],
  },
  {
    name: "Map an AI Product",
    desc: "Take an AI product you use. Map it layer by layer, from data and context to the interface, and name what would be hardest for a competitor to copy.",
    domain: "Product",
    inspired: [{ course: "AI Systems Thinking for Product Managers", by: "AI Fellows program director", where: MAVEN, url: "https://maven.com/p/82c066/ai-systems-thinking-for-product-managers" }],
  },
];

const DOMAINS = ["All", ...Array.from(new Set(projects.map((p) => p.domain)))];
const SOURCES = ["All", ACADEMY, MAVEN];

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

export default function Home() {
  const [domain, setDomain] = useState("All");
  const [source, setSource] = useState("All");

  const filtered = projects.filter((p) =>
    (domain === "All" || p.domain === domain) &&
    (source === "All" || p.inspired.some((i) => i.where === source))
  );

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
          <p className="hero-eyebrow">Applications open</p>
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
                Project briefs for fellows, each inspired by a course at The
                Horowitz Andreessen Academy or on Maven. Pick one and build it
                in six weeks. Credit goes to the courses; the briefs are ours.
              </p>
            </div>
            <span className="project-count">{filtered.length} projects</span>
          </div>

          {/* Filters */}
          <div className="filter-row">
            <div className="filter-group">
              {SOURCES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSource(s)}
                  className={`filter-btn ${source === s ? "active" : ""}`}
                >
                  {s === "All" ? "All sources" : s}
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
            {filtered.map((p) => (
              <div key={p.name} className="project-card">
                <div className="project-card-top">
                  <span className="project-name">{p.name}</span>
                  <span className="project-status">{p.domain}</span>
                </div>
                <p className="project-desc">{p.desc}</p>
                {p.inspired.map((i) => (
                  <a
                    key={i.course}
                    href={i.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-domain"
                  >
                    Inspired by {i.course} ({i.by}), {i.where} →
                  </a>
                ))}
              </div>
            ))}
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
                Director of Product, Data &amp; AI
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
