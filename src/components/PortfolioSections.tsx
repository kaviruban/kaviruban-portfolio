import type { ReactNode } from "react";
import { experience, skills, type View } from "../data/portfolio";

type ViewHeaderProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
};

function ViewHeader({ index, eyebrow, title, description }: ViewHeaderProps) {
  return (
    <div className="view-heading">
      <span className="section-index">
        {index} / {eyebrow}
      </span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export function HomeView({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <section className="view home-view" id="home">
      <div className="home-intro">
        <span className="section-index">01 / Hello</span>
        <p className="role-label">Software developer / Frontend specialist</p>
        <h1>
          Kaviruban
          <br />
          <span>Mohanasundaram</span>
        </h1>
        <p className="home-summary">
          I build thoughtful digital products where engineering precision meets
          clear, human interaction.
        </p>
        <button
          className="text-action"
          onClick={() => onNavigate("experience")}
          type="button"
        >
          View experience <span>↗</span>
        </button>
      </div>
      <div className="home-side">
        <div className="availability-card">
          <span>Currently</span>
          <strong>Leading frontend at a stealth startup</strong>
        </div>
        <div className="home-facts">
          <div>
            <span>Based in</span>
            <strong>Thanjavur, India</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Web + mobile products</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceView() {
  return (
    <section className="view inner-view" id="experience">
      <ViewHeader
        index="02"
        eyebrow="Experience"
        title={
          <>
            Selected <span>experience</span>
          </>
        }
        description="Two roles, one consistent focus: making complex products feel simple."
      />
      <div className="role-grid">
        {experience.map((item, index) => (
          <article className="role-card" key={item.company}>
            <div className="role-card-top">
              <span>0{index + 1}</span>
              <time>{item.dates}</time>
            </div>
            <h2>{item.role}</h2>
            <p className="company">
              {item.company} <span>/</span> {item.location}
            </p>
            <p className="role-intro">{item.intro}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ToolkitView() {
  return (
    <section className="view inner-view" id="toolkit">
      <ViewHeader
        index="03"
        eyebrow="Toolkit"
        title={
          <>
            Tools I <span>use</span>
          </>
        }
        description="A practical toolkit for shipping polished, reliable frontend work."
      />
      <div className="toolkit-layout">
        <div className="skill-list">
          {skills.map((skill) => (
            <div className="skill-line" key={skill.label}>
              <span>{skill.label}</span>
              <strong>{skill.value}</strong>
            </div>
          ))}
        </div>
        <div className="education-card">
          <span className="section-index">Education</span>
          <h2>SNS College of Technology</h2>
          <p>B.E. Computer Science Engineering</p>
          <strong>CGPA 9.01 / 10</strong>
          <span>2019 - 2023 / Coimbatore, India</span>
        </div>
      </div>
    </section>
  );
}

export function ContactView() {
  return (
    <section className="view contact-view" id="contact">
      <div>
        <span className="section-index">04 / Let&apos;s connect</span>
        <h1>
          Have a good
          <br />
          <span>problem?</span>
        </h1>
        <p>Let&apos;s make something useful, clear, and well-made.</p>
        <a className="email-link" href="mailto:kavirubanm@gmail.com">
          <ContactIcon name="email" />
          kavirubanm@gmail.com <span>↗</span>
        </a>
      </div>
      <div className="contact-links">
        <a href="tel:+918925339246">
          <ContactIcon name="phone" />
          +91 89253 39246
        </a>
        <a
          href="https://www.linkedin.com/in/kavirubanmohanasundaram/"
          target="_blank"
          rel="noreferrer"
        >
          <ContactIcon name="linkedin" />
          LinkedIn ↗
        </a>
        <a href="https://github.com/kaviruban" target="_blank" rel="noreferrer">
          <ContactIcon name="github" />
          GitHub ↗
        </a>
        <a
          href="https://leetcode.com/u/kaviruban/"
          target="_blank"
          rel="noreferrer"
        >
          <ContactIcon name="leetcode" />
          LeetCode ↗
        </a>
      </div>
    </section>
  );
}

function ContactIcon({
  name,
}: {
  name: "email" | "phone" | "linkedin" | "github" | "leetcode";
}) {
  const common = {
    className: "contact-icon",
    "aria-hidden": true,
    viewBox: "0 0 20 20",
    fill: "none",
  };
  if (name === "email")
    return (
      <svg {...common}>
        <rect x="2.5" y="4" width="15" height="12" rx="2" />
        <path d="m3.5 5.5 6.5 5 6.5-5" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg {...common}>
        <path d="M5.4 2.8 3.2 4.1c-.7.4-.9 1.2-.6 2 1.6 4.4 5.1 7.9 9.5 9.5.8.3 1.6 0 2-.6l1.3-2.2-3-2.1-1.6 1.3a12 12 0 0 1-4.6-4.6l1.3-1.6-2.1-3Z" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="14" height="14" rx="3" />
        <path d="M6.5 8.5v5M6.5 6.2v.1M9.5 13.5v-3a2 2 0 0 1 4 0v3M9.5 8.5v5" />
      </svg>
    );
  if (name === "github")
    return (
      <svg {...common}>
        <path d="M10 3.2a6.8 6.8 0 0 0-2.2 13.2c.3.1.4-.1.4-.3v-1.2c-1.7.4-2.1-.8-2.1-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.7.1 1.1.7 1.1.7.6 1.1 1.7.8 2.1.6.1-.5.2-.8.4-1-1.4-.2-2.8-.7-2.8-3.1 0-.7.2-1.2.6-1.7-.1-.2-.3-.8.1-1.7 0 0 .5-.2 1.8.7a6.3 6.3 0 0 1 3.2 0c1.2-.9 1.8-.7 1.8-.7.4.9.2 1.5.1 1.7.4.5.6 1 .6 1.7 0 2.4-1.4 2.9-2.8 3.1.2.2.4.6.4 1.2v1.8c0 .2.1.4.4.3A6.8 6.8 0 0 0 10 3.2Z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="m7.5 5-3 5 3 5M12.5 5l3 5-3 5M11 4l-2 12" />
    </svg>
  );
}
