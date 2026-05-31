import { useState, useEffect, useRef } from "react";
import {
  profile, metrics, services, toolkit, capabilities, caseStudies,
  principles, aiUse, aiBuild, fullPackage, process, techStack, formspreeId,
} from "./data";
import "./styles.css";

// Reveal-on-scroll hook
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SectionHead({ num, title }) {
  return (
    <div className="shead reveal">
      <span className="snum">{num}</span>
      <span className="stitle">{title}</span>
      <span className="sline" />
    </div>
  );
}

function Toolkit() {
  const [open, setOpen] = useState(null);
  return (
    <div className="cap-list">
      {toolkit.map((t, i) => (
        <div className={`cap ${open === i ? "open" : ""}`} key={t.tool}>
          <button className="cap-summary" onClick={() => setOpen(open === i ? null : i)}>
            <span className="ctool">{t.tool}</span>
            <span className="cuse">{t.use}</span>
            <span className="arr">▸</span>
          </button>
          {open === i && (
            <div className="cap-detail">
              <div className="used">
                <h5>Where I've used it</h5>
                <p>{t.used}</p>
              </div>
              <div className="more">
                <h5>What it can do for you</h5>
                <p>{t.more}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const ref = useRef();

  if (!formspreeId) {
    // No form configured — fall back to a mailto button.
    return (
      <a className="btn btn-primary" href={`mailto:${profile.email}?subject=Project%20inquiry`}>
        Email me about your project →
      </a>
    );
  }

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(ref.current);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        ref.current.reset();
      }
    } catch (_) {}
    setSending(false);
  }

  if (sent) return <p className="form-thanks">Thanks — I'll get back to you within a day.</p>;

  return (
    <form ref={ref} onSubmit={submit} className="cform">
      <input name="name" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Your email" required />
      <textarea name="message" placeholder="What are you building?" rows="4" required />
      <button className="btn btn-primary" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send →"}
      </button>
    </form>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <nav>
        <div className="wrap nav-inner">
          <div className="logo">
            {profile.name.replace(profile.accentName, "")}
            <b>{profile.accentName}</b>
          </div>
          <div className="navlinks">
            <a href="#services">Services</a>
            <a href="#stack">Toolkit</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#work">Case Studies</a>
            <a href="#principles">Approach</a>
            <a href="#ai">AI</a>
            <a href="#process">Process</a>
            <a href="#contact" className="nav-cta">Hire me</a>
          </div>
        </div>
      </nav>

      <header>
        <div className="wrap">
          {profile.available && (
            <div className="avail"><span className="dot" /> {profile.availableText}</div>
          )}
          <h1>
            {profile.heroLine[0]}{" "}
            <span className="accent">{profile.heroLine[1]}</span>{" "}
            {profile.heroLine[2]}
          </h1>
          <p className="lead">{profile.lead}</p>
          <div className="cta-row">
            <a href="#contact" className="btn btn-primary">Start a project →</a>
            <a href="#work" className="btn btn-ghost">See case studies</a>
          </div>
          <div className="trust">
            <div className="lbl">Trusted with production work for</div>
            <div className="trow">
              {profile.trustedBy.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      </header>

      <section className="metrics-sec">
        <div className="wrap">
          <div className="metrics reveal">
            {metrics.map((m) => (
              <div className="metric" key={m.l}>
                <div className="n">{m.n}</div>
                <div className="l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services"><div className="wrap">
        <SectionHead num="01" title="What I can do for you" />
        <p className="ssub reveal">Hire me for a focused outcome, not just hours. Most engagements fall into one of these.</p>
        <div className="svc-grid">
          {services.map((s) => (
            <div className="svc reveal" key={s.title}>
              <div className="ico">{s.ico}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div></section>

      <section id="stack"><div className="wrap">
        <SectionHead num="02" title="My toolkit, and why" />
        <p className="ssub reveal">I don't pick tools by trend — I pick them for the problem. Here's what I reach for, where I've used it in production, and what it can do for your project. Tap any to expand.</p>
        <Toolkit />
      </div></section>

      <section id="capabilities"><div className="wrap">
        <SectionHead num="03" title="Capabilities I can bring" />
        <p className="ssub reveal"><span className="canbuild-note">Beyond my shipped work</span><br />A strong backend foundation transfers across problems. These are areas I can confidently build for your project — grounded in the same fundamentals behind everything above.</p>
        <div className="cb-grid">
          {capabilities.map((c) => (
            <div className="cb reveal" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="tags">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div></section>

      <section id="work"><div className="wrap">
        <SectionHead num="04" title="Selected work" />
        <p className="ssub reveal">Real systems I've shipped — framed the way it matters to you: the problem, what I did, and the result.</p>
        {caseStudies.map((c) => (
          <div className="case reveal" key={c.client}>
            <div className="case-top">
              <div className="case-client">{c.client}</div>
              <div className="case-tag">{c.tag}</div>
            </div>
            <div className="case-body">
              <div className="case-col"><h4>The problem</h4><p>{c.problem}</p></div>
              <div className="case-col"><h4>What I built</h4><p>{c.built}</p></div>
              <div className="case-col result"><h4>The result</h4><p><span className="big">{c.resultBig}</span>{c.result}</p></div>
            </div>
            <div className="case-stack"><b>Stack:</b> {c.stack}</div>
          </div>
        ))}
      </div></section>

      <section id="principles"><div className="wrap">
        <SectionHead num="05" title="How I solve problems" />
        <p className="ssub reveal">The tools change every year — the way I approach a hard problem doesn't. This is how I think when something's broken, slow, or doesn't exist yet.</p>
        <div className="princ">
          {principles.map((p) => (
            <div className="pr reveal" key={p.n}>
              <span className="pn">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section id="ai"><div className="wrap">
        <SectionHead num="06" title="Working with AI, deliberately" />
        <p className="ssub reveal">AI is part of how the best backend work gets done now — both as a tool that makes me faster, and as a capability I can build into your product. The skill isn't using AI; it's directing it well and knowing when it's wrong.</p>
        <div className="ai-grid">
          <div className="ai-col use reveal">
            <h3>How I use AI to ship faster</h3>
            <div className="sub">My day-to-day workflow</div>
            {aiUse.map((x, i) => (
              <div className="ai-item" key={i}><span className="k">→</span><p>{x}</p></div>
            ))}
          </div>
          <div className="ai-col build reveal">
            <h3>AI features I can build for you</h3>
            <div className="sub">Capability · for your product</div>
            {aiBuild.map((x, i) => (
              <div className="ai-item" key={i}><span className="k">→</span><p>{x}</p></div>
            ))}
          </div>
        </div>
        <div className="fullpkg reveal">
          <h3>What makes me a full package</h3>
          <p>{fullPackage}</p>
        </div>
      </div></section>

      <section id="process"><div className="wrap">
        <SectionHead num="07" title="How we'd work together" />
        <p className="ssub reveal">Clear, low-risk, and built around your goals — not surprises.</p>
        <div className="steps">
          {process.map((p) => (
            <div className="step reveal" key={p.s}>
              <div className="s">{p.s}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section id="skills"><div className="wrap">
        <SectionHead num="08" title="Full tech stack" />
        <div className="skills reveal">
          {techStack.map((g) => (
            <div className="skill" key={g.h}>
              <h4>{g.h}</h4>
              <div className="chips">{g.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
            </div>
          ))}
        </div>
      </div></section>

      <section id="contact" className="contact"><div className="wrap">
        <div className="shead reveal" style={{ justifyContent: "center", marginBottom: 8 }}>
          <span className="snum">09</span>
        </div>
        <div className="stitle reveal">Have a system that needs building — or fixing?</div>
        <p className="ssub reveal cssub">Tell me what you're working on. I'll reply within a day with honest thoughts on whether and how I can help.</p>
        <div className="reveal cform-wrap"><ContactForm /></div>
        <div className="row2 reveal">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          {profile.github && <a href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>}
          <a href={profile.phoneHref}>{profile.phone}</a>
          <span>{profile.location}</span>
        </div>
      </div></section>

      <footer><div className="wrap">© {new Date().getFullYear()} {profile.name} · {profile.role} · {profile.location}</div></footer>
    </>
  );
}
