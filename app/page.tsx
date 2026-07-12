"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#academics", label: "Academics" },
  { href: "#senior", label: "Class 11–12" },
  { href: "#facilities", label: "Campus" },
  { href: "#life", label: "Life at GAPS" },
  { href: "#notices", label: "Notices" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { kicker: "Legacy", num: "20", sup: "+ yrs", label: "Two decades of educating North West Delhi" },
  { kicker: "Community", num: "1,200", sup: "+", label: "Students currently enrolled across all grades" },
  { kicker: "Faculty", num: "60", sup: "+", label: "Qualified, experienced English-medium educators" },
  { kicker: "Outcomes", num: "100", sup: "%", label: "Class 10 board result — cumulative last 5 years" },
];

const pillars = [
  {
    title: "Academic Excellence",
    desc: "A structured CBSE-aligned curriculum with focus on concept mastery, critical thinking and consistent board-exam performance across Class 10 and 12.",
    icon: <AcademicIcon />,
  },
  {
    title: "Holistic Development",
    desc: "Sports, performing arts, cultural festivals, service projects and leadership programmes woven into everyday school life — because learning happens far beyond the classroom.",
    icon: <HolisticIcon />,
  },
  {
    title: "Modern Infrastructure",
    desc: "Bright classrooms, well-equipped science and computer labs, a stocked library, dedicated art and music rooms, and safe transport — designed for a full and secure school day.",
    icon: <InfrastructureIcon />,
  },
];

const programs = [
  { stage: "Stage 01", title: "Pre-Primary", age: "Nursery — KG · Ages 3–5", desc: "A gentle, play-led foundation. Language, numeracy and social skills built through stories, music and structured play." },
  { stage: "Stage 02", title: "Primary", age: "Class 1 — 5 · Ages 6–10", desc: "Reading fluency, foundational mathematics, environmental studies and the beginnings of scientific curiosity." },
  { stage: "Stage 03", title: "Middle", age: "Class 6 — 8 · Ages 11–13", desc: "Deeper subject engagement, second-language proficiency, project work and the first steps into digital literacy." },
  { stage: "Stage 04", title: "Secondary", age: "Class 9 — 10 · Board", desc: "Rigorous board preparation across Science, Mathematics, Social Studies and Languages with individual mentoring." },
  { stage: "Stage 05", title: "Senior Secondary", age: "Class 11 — 12 · New", desc: "Streamed pathways in Science, Commerce and Humanities — with career guidance and entrance-exam mentoring." },
];

const streams = [
  { num: "Ⅰ", title: "Science Stream", desc: "Physics · Chemistry · Mathematics / Biology · English · Computer Science / Physical Education" },
  { num: "Ⅱ", title: "Commerce Stream", desc: "Accountancy · Business Studies · Economics · English · Mathematics / Applied Mathematics" },
  { num: "Ⅲ", title: "Humanities Stream", desc: "History · Political Science · Geography · Economics · Psychology · English" },
];

const facilities = [
  { className: "fac-library", title: "Library & Reading Room", desc: "A curated collection of over 5,000 titles — a quiet retreat for reading, research and study." },
  { className: "fac-lab", title: "Science & Computer Labs", desc: "Physics, Chemistry and Biology labs alongside a modern computer suite for practical, hands-on learning." },
  { className: "img-4", title: "Playground & Sports", desc: "Open playing fields for cricket, football, kho-kho and athletics — the everyday joy of an active school life." },
  { className: "fac-arts", title: "Arts, Music & Dance", desc: "Dedicated studios where students discover expression through classical arts, modern music and performance." },
];

const lifeTiles = [
  { className: "tile-a", image: "/assets/campus-3.jpg", alt: "Grand Amar Public School main campus", kicker: "Our Campus", title: "The Main Building" },
  { className: "tile-b", image: "/assets/campus-1.jpg", alt: "Janmashtami celebration at GAPS", kicker: "Cultural Day", title: "Janmashtami Celebrations" },
  { className: "tile-c", image: "/assets/campus-2.jpg", alt: "Kids Literacy Day at GAPS", kicker: "Awards Ceremony", title: "Kids Literacy Day" },
  { className: "tile-d", image: "/assets/campus-4.jpg", alt: "School arches and courtyard", kicker: "Everyday Campus", title: "The Grand Amar Arches" },
];

const notices = [
  { date: "14", month: "Jul", tag: "Admissions", title: "Class 11 & 12 seats now open for 2026–27" },
  { date: "02", month: "Jul", tag: "Results", title: "Class 10 board results — a proud milestone" },
  { date: "28", month: "Jun", tag: "Event", title: "Annual Sports Day — schedule and team lists" },
  { date: "10", month: "Jun", tag: "Parents", title: "Parent-Teacher Meeting circular — Term I" },
];

const contactCards = [
  {
    title: "Visit the Campus",
    body: ["Budhanpur, Majra Dabas,", "North West Delhi"],
    sub: "Delhi – 110081, India",
    icon: <LocationIcon />,
  },
  {
    title: "Call the Office",
    body: ["+91 98184 57864", "+91 95608 44405"],
    sub: "Mon – Sat · 8:00 AM to 3:00 PM",
    icon: <PhoneIcon />,
  },
  {
    title: "Write to Us",
    body: ["admissions@grandamar", "publicschool.in"],
    sub: "We respond within one working day",
    icon: <MailIcon />,
  },
];

const footerLinks = [
  { title: "School", items: ["About Us", "Academics", "Class 11 & 12", "Facilities", "Gallery"] },
  { title: "Admissions", items: ["Process", "Prospectus", "Fee Structure", "Book a Visit", "Notices"] },
  { title: "Reach Us", items: ["Budhanpur, Majra Dabas", "North West Delhi", "Delhi – 110081", "+91 98184 57864", "admissions@grandamarpublicschool.in"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 40);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.05 },
    );

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", updateScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav">
          <a href="#top" className="brand" aria-label="Grand Amar Public School home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              <SchoolMark />
            </span>
            <span className="brand-name">
              <span className="b1">Grand Amar</span>
              <span className="b2">Public School</span>
            </span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta">
            <a href="tel:+919818457864" className="phone-chip">
              <PhoneIcon />
              +91 98184 57864
            </a>
            <a href="#admissions" className="btn btn-primary">
              Apply Now
              <ArrowIcon />
            </a>
            <button className="hamburger" type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-top">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <SchoolMark />
            </span>
            <span className="brand-name">
              <span className="b1">Grand Amar</span>
              <span className="b2">Public School</span>
            </span>
          </div>
          <button className="close" type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#admissions" onClick={() => setMenuOpen(false)} style={{ color: "var(--gold-400)" }}>
              Apply Now →
            </a>
          </li>
        </ul>
        <div className="drawer-foot">
          <div>Budhanpur, Majra Dabas, North West Delhi – 110081</div>
          <a href="tel:+919818457864">+91 98184 57864</a>
        </div>
      </div>

      <main>
        <section className="hero" id="top">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-noise" />
          <div className="container hero-inner">
            <div className="hero-brackets" aria-hidden="true">
              <span className="tl" />
              <span className="tr" />
              <span className="bl" />
              <span className="br" />
            </div>

            <div className="hero-content">
              <span className="location-chip reveal">
                <span className="dot" />Budhanpur · Majra Dabas · North West Delhi
              </span>

              <h1 className="reveal delay-1">
                Grand Amar
                <span className="accent">Public School</span>
              </h1>

              <div className="hero-tag reveal delay-2">Shaping Futures, Inspiring Minds</div>

              <p className="hero-lede reveal delay-2">
                A CBSE-pattern English-medium institution nurturing students from Nursery to Class 12.
                We build tomorrow&apos;s leaders through rigorous academics, character formation and a rich co-curricular life.
              </p>

              <div className="hero-ctas reveal delay-3">
                <a href="#admissions" className="btn btn-primary">
                  Begin Admission
                  <ArrowIcon />
                </a>
                <a href="#academics" className="btn btn-ghost">
                  Explore Academics
                </a>
              </div>

              <div className="hero-trust reveal delay-4">
                <div className="badges" aria-hidden="true">
                  <div className="b">S</div>
                  <div className="b">T</div>
                  <div className="b">P</div>
                  <div className="b">A</div>
                </div>
                <div className="trust-text">
                  Trusted by <strong>1,200+ families</strong> across North West Delhi<br />
                  <span className="muted">Est. 2004 · CBSE affiliated pattern</span>
                </div>
              </div>
            </div>

            <div className="hero-side">
              <div>Scroll</div>
              <div className="scroll-cue" />
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>
              Nursery to Class 12 <em className="sep">✦</em>
              English Medium <em className="sep">✦</em>
              CBSE Pattern <em className="sep">✦</em>
              Est. 2004 <em className="sep">✦</em>
              Majra Dabas, Delhi <em className="sep">✦</em>
              Science · Commerce · Humanities <em className="sep">✦</em>
              Shaping Futures, Inspiring Minds <em className="sep">✦</em>
            </span>
            <span>
              Nursery to Class 12 <em className="sep">✦</em>
              English Medium <em className="sep">✦</em>
              CBSE Pattern <em className="sep">✦</em>
              Est. 2004 <em className="sep">✦</em>
              Majra Dabas, Delhi <em className="sep">✦</em>
              Science · Commerce · Humanities <em className="sep">✦</em>
              Shaping Futures, Inspiring Minds <em className="sep">✦</em>
            </span>
          </div>
        </div>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div className={`stat reveal ${index > 0 ? `delay-${index}` : ""}`} key={stat.kicker}>
                  <span className="kicker">{stat.kicker}</span>
                  <div className="num">
                    {stat.num}
                    <span className="sup">{stat.sup}</span>
                  </div>
                  <div className="label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad why">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Why Grand Amar</span>
                <h2>
                  An education that <em> endures</em>.
                </h2>
              </div>
              <p>
                We believe great schools are built not on facilities alone, but on values — a rigorous academic culture,
                teachers who mentor, and an environment where every child is known, challenged and cared for.
              </p>
            </div>

            <div className="pillars">
              {pillars.map((pillar, index) => (
                <div className={`pillar reveal ${index > 0 ? `delay-${index}` : ""}`} key={pillar.title}>
                  <span className="num-mark">0{index + 1}</span>
                  <div className="icon">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad academics" id="academics">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow center">Academics</span>
              <h2>
                A continuous journey from <em>first steps</em> to first careers.
              </h2>
              <p>
                Five carefully designed stages, each with its own pedagogy, pace and purpose — guiding students seamlessly from Nursery to Senior Secondary.
              </p>
            </div>

            <div className="programs">
              {programs.map((program, index) => (
                <div className={`program reveal ${index > 0 ? `delay-${index}` : ""}`} key={program.stage}>
                  <div className="p-kicker">{program.stage}</div>
                  <h3>{program.title}</h3>
                  <div className="p-age">{program.age}</div>
                  <p>{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad senior" id="senior">
          <div className="container">
            <div className="senior-grid">
              <div className="reveal">
                <span className="senior-badge">
                  <span className="pulse" />Now Enrolling · Session 2026–27
                </span>
                <h2 className="senior-title">
                  Senior Secondary at GAPS
                  <em>Class 11 &amp; 12 pathway.</em>
                </h2>
                <p className="senior-lede">
                  Our newly launched Senior Secondary programme offers three focused streams,
                  purpose-built classrooms and dedicated subject mentors — preparing students for board excellence,
                  national entrances and the university years ahead.
                </p>

                <div className="cta-row">
                  <a href="#admissions" className="btn btn-primary">
                    Reserve a Seat
                    <ArrowIcon />
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    Talk to Counsellor
                  </a>
                </div>

                <div className="senior-metrics">
                  <div>
                    <div className="metric-value">3</div>
                    <div className="metric-label">Focused Streams</div>
                  </div>
                  <div>
                    <div className="metric-value">18:1</div>
                    <div className="metric-label">Student : Teacher</div>
                  </div>
                  <div>
                    <div className="metric-value">Advisor</div>
                    <div className="metric-label">1-on-1 Career Guide</div>
                  </div>
                </div>
              </div>

              <div className="streams">
                {streams.map((stream, index) => (
                  <div className={`stream reveal ${index > 0 ? `delay-${index}` : ""}`} key={stream.title}>
                    <span className="s-num">{stream.num}</span>
                    <div>
                      <h3>{stream.title}</h3>
                      <p>{stream.desc}</p>
                    </div>
                    <span className="s-arrow">
                      <ArrowIcon />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="facilities">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Campus &amp; Facilities</span>
                <h2>
                  A campus designed to <em>nurture</em>.
                </h2>
              </div>
              <p>Spacious, safe and purposeful spaces — every corner of our Majra Dabas campus is built to support how children actually learn.</p>
            </div>

            <div className="facilities-grid">
              {facilities.map((facility, index) => (
                <div className={`facility reveal ${index > 0 ? `delay-${index}` : ""}`} key={facility.title}>
                  <div
                    className={`fac-img ${facility.className}`}
                    aria-hidden="true"
                    style={facility.className.startsWith("img") ? { backgroundImage: `url(/assets/${facility.className.replace("img-", "campus-")}.jpg)` } : undefined}
                  />
                  <div className="fac-content">
                    <div className="fac-kicker">Facility 0{index + 1}</div>
                    <h3>{facility.title}</h3>
                    <p>{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad life" id="life">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Life at GAPS</span>
                <h2>
                  Moments from a year on our <em>campus</em>.
                </h2>
              </div>
              <p>Festivals, award ceremonies, sports days, cultural performances — school life at Grand Amar is rich, celebrated and remembered.</p>
            </div>

            <div className="life-grid">
              {lifeTiles.map((tile, index) => (
                <div className={`tile ${tile.className} reveal ${index > 0 ? `delay-${index}` : ""}`} key={tile.title}>
                  <img src={tile.image} alt={tile.alt} loading="lazy" />
                  <div className="tile-cap">
                    <div className="k">{tile.kicker}</div>
                    <div className="t">{tile.title}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="life-cta reveal">
              <a href="#contact" className="btn btn-outline">
                Visit Our Campus
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad admissions" id="admissions">
          <div className="container">
            <div className="adm-shell reveal">
              <div className="adm-grid">
                <div className="adm-lede">
                  <span className="eyebrow on-dark">Admissions 2026–27</span>
                  <h2>
                    Begin your child&apos;s journey with <em>Grand Amar</em>.
                  </h2>
                  <p>
                    Admissions are now open for Nursery through Class 12 for the 2026–27 academic session.
                    Our simple four-step process is designed to help families make an informed and unhurried decision.
                  </p>
                  <a href="tel:+919818457864" className="btn btn-primary">
                    Request a Prospectus
                    <ArrowIcon />
                  </a>
                </div>

                <ol className="steps">
                  <li className="step reveal">
                    <span className="step-num">01</span>
                    <div>
                      <h4>Enquire &amp; Visit</h4>
                      <p>Call our admissions office or drop by campus to meet the team and take a guided tour of our facilities.</p>
                    </div>
                  </li>
                  <li className="step reveal delay-1">
                    <span className="step-num">02</span>
                    <div>
                      <h4>Submit Application</h4>
                      <p>Complete the admission form along with previous school records, birth certificate and required documents.</p>
                    </div>
                  </li>
                  <li className="step reveal delay-2">
                    <span className="step-num">03</span>
                    <div>
                      <h4>Interaction &amp; Assessment</h4>
                      <p>A warm, age-appropriate interaction with the child and a brief conversation with parents.</p>
                    </div>
                  </li>
                  <li className="step reveal delay-3">
                    <span className="step-num">04</span>
                    <div>
                      <h4>Confirmation &amp; Welcome</h4>
                      <p>Offer of admission, fee confirmation and a formal welcome to the Grand Amar family.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad notices" id="notices">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Notices &amp; News</span>
                <h2>
                  The latest from the <em>school office</em>.
                </h2>
              </div>
              <p>Announcements, event dates and updates for parents and students, straight from Grand Amar Public School.</p>
            </div>

            <div className="notice-grid">
              <div className="notice-list">
                {notices.map((notice, index) => (
                  <a className={`notice reveal ${index > 0 ? `delay-${index}` : ""}`} href="#admissions" key={notice.title}>
                    <div className="notice-date">
                      <div className="d">{notice.date}</div>
                      <div className="m">{notice.month}</div>
                    </div>
                    <div className="notice-body">
                      <div className="n-tag">{notice.tag}</div>
                      <h4>{notice.title}</h4>
                    </div>
                    <div className="notice-arrow">
                      <ArrowIcon />
                    </div>
                  </a>
                ))}
              </div>

              <div className="principal-card reveal delay-1">
                <span className="quote-mark">"</span>
                <span className="eyebrow">From the Principal&apos;s Desk</span>
                <blockquote>
                  At Grand Amar, we do not simply teach — we mentor. Every child who walks through our gates carries the
                  promise of tomorrow, and it is our privilege to help shape that promise with patience, discipline and love.
                </blockquote>
                <div className="principal-meta">
                  <div className="principal-avatar">GA</div>
                  <div>
                    <div className="principal-name">The Principal</div>
                    <div className="principal-role">Grand Amar Public School</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="section-head center footer-head">
            <span className="eyebrow center on-dark">Get in Touch</span>
            <h2>
              We&apos;d love to <em>meet</em> your family.
            </h2>
          </div>

          <div className="contact-strip">
            {contactCards.map((card, index) => (
              <div className={`contact-card reveal ${index > 0 ? `delay-${index}` : ""}`} key={card.title}>
                <div className="contact-icon">{card.icon}</div>
                <div className="c-title">{card.title}</div>
                <div className="c-body">
                  {card.body.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
                <div className="c-sub">{card.sub}</div>
              </div>
            ))}
          </div>

          <div className="footer-main">
            <div className="footer-brand">
              <a href="#top" className="brand brand-light">
                <span className="brand-mark" aria-hidden="true">
                  <SchoolMark />
                </span>
                <span className="brand-name">
                  <span className="b1">Grand Amar</span>
                  <span className="b2">Public School</span>
                </span>
              </a>
              <p>An English-medium, CBSE-pattern school in North West Delhi, shaping students from Nursery to Class 12 through academic rigour and character formation.</p>
              <div className="socials">
                <a href="#" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="YouTube">
                  <YouTubeIcon />
                </a>
              </div>
            </div>

            {footerLinks.map((column) => (
              <div className="footer-col" key={column.title}>
                <h5>{column.title}</h5>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>
                      {item === "admissions@grandamarpublicschool.in" ? (
                        <a href="mailto:admissions@grandamarpublicschool.in">admissions@…school.in</a>
                      ) : item === "+91 98184 57864" ? (
                        <a href="tel:+919818457864">+91 98184 57864</a>
                      ) : (
                        <a href={item === "About Us" || item === "Academics" ? "#academics" : item === "Class 11 & 12" ? "#senior" : item === "Facilities" ? "#facilities" : item === "Gallery" ? "#life" : item === "Process" || item === "Prospectus" || item === "Fee Structure" ? "#admissions" : item === "Book a Visit" ? "#contact" : item === "Notices" ? "#notices" : "#contact"}>
                          {item}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <div>© 2026 Grand Amar Public School. All rights reserved.</div>
            <div>Shaping Futures, Inspiring Minds · Since 2004</div>
          </div>
        </div>
      </footer>
    </>
  );
}

function SchoolMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7c4-1 8-1 12 1v18c-4-2-8-2-12-1V7z" fill="currentColor" fillOpacity="0.18" />
      <path d="M28 7c-4-1-8-1-12 1v18c4-2 8-2 12-1V7z" fill="currentColor" fillOpacity="0.18" />
      <path d="M16 8v18" />
      <path d="M20 4c2 2 3 5 2 8-3-1-5-3-6-6 1-1 2-2 4-2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function AcademicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 2 8l10 5 10-5-10-5z" />
      <path d="M2 8v6" />
      <path d="m6 10 6 3 6-3v6l-6 3-6-3v-6z" />
    </svg>
  );
}

function HolisticIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="M5.6 5.6c4 4 8.8 4 12.8 0" />
      <path d="M5.6 18.4c4-4 8.8-4 12.8 0" />
    </svg>
  );
}

function InfrastructureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V10l9-6 9 6v11" />
      <path d="M9 21v-8h6v8" />
      <path d="M3 21h18" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.2-1.5 1.6-1.5H16V4.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7v3.1h2.8V22H13z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12s0-3.2-.4-4.7c-.2-.9-.9-1.5-1.7-1.7C18.4 5.2 12 5.2 12 5.2s-6.4 0-7.9.4c-.9.2-1.5.9-1.7 1.7C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.5 1.7 1.7 1.5.4 7.9.4 7.9.4s6.4 0 7.9-.4c.9-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  );
}