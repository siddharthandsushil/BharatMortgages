import React, { useState, type JSX } from "react";
import "./index.css";

// Helper to create section ids from menu text
const toId = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const navGroups = [
  {
    label: "About",
    items: ["About Us", "Course Overview", "Curriculum", "Features", "Duration & Fees"],
  },
  {
    label: "Opportunities",
    items: ["Careers", "Testimonials", "FAQs"],
  },
  {
    label: "Resources",
    items: ["Blog", "Contact"],
  },
] as const;

export default function App(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header>
        <h1>Bharat Mortgages</h1>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Nav */}
        <nav className={menuOpen ? "open" : ""}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

          {navGroups.map((group) => (
            <div className="dropdown" key={group.label}>
              <button type="button">{group.label}</button>
              <div className="dropdown-content">
                {group.items.map((item) => (
                  <a
                    key={item}
                    href={`#${toId(item)}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Home */}
        <section id="home">
          <h2>Build Your Career in Banking & Finance with Mortgage Expertise</h2>
          <p>
            Learn from Mortgage Specialists & Get Job-Ready for Banks, HFCs, and NBFCs.
          </p>
          <div>
            <button className="cta" type="button">Enroll Now</button>
            <button className="cta-outline" type="button">Download Brochure</button>
          </div>
        </section>

        {/* About Us */}
        <section id="about-us">
          <h2>About Bharat Mortgages</h2>
          <p>
            Bharat Mortgages is an initiative by banking professionals with over 12 years of experience in Mortgages & Home Loans.
            Our mission is simple: to bridge the gap between students and the BFSI industry by offering specialized mortgage training that
            leads to direct employability.
          </p>
          <div className="card">
            <ul>
              <li>✅ Courses conducted by Industry Specialists</li>
              <li>✅ Practical & Job-Oriented Curriculum</li>
              <li>✅ Placement Support with Leading Banks & HFCs</li>
            </ul>
          </div>
        </section>

        {/* Course Overview */}
        <section id="course-overview">
          <h2>Why Learn Mortgages?</h2>
          <p>
            Mortgages are the backbone of lending institutions like Banks, HFCs, and NBFCs. With India’s growing demand for home loans,
            professionals skilled in mortgage processes are highly valued.
          </p>
          <div className="card">
            <h4>By enrolling in Bharat Mortgages, you will:</h4>
            <ul>
              <li>Understand real-world lending processes.</li>
              <li>Gain practical skills in credit assessment, compliance, and customer handling.</li>
              <li>Enhance your job opportunities in the BFSI sector.</li>
            </ul>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum">
          <h2>Course Content</h2>
          <div className="card-grid">
            {[
              "Introduction to Mortgages & Housing Finance",
              "Loan Eligibility & Income Assessment",
              "Legal & Technical Aspects in Mortgages",
              "RBI Guidelines, KYC & Compliance",
              "Customer Handling & Communication Skills",
              "Case Studies & Practical Scenarios",
            ].map((mod, i) => (
              <div className="card" key={i}>
                <strong>Module {i + 1}: {mod}</strong>
                <p style={{ marginTop: ".5rem" }}>
                  Learn in-depth about {mod} with practical insights and real-world examples.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features">
          <h2>Course Features</h2>
          <div className="card-grid">
            {[
              "🎓 Live Online / Classroom Sessions",
              "📚 Industry Case Studies & Practical Learning",
              "📜 Certificate of Completion",
              "💼 Resume Building & Interview Prep",
              "🤝 Placement Assistance with Banks/HFCs/NBFCs",
            ].map((text, i) => (
              <div className="card" key={i}>{text}</div>
            ))}
          </div>
        </section>

        {/* Duration & Fees */}
        <section id="duration-fees">
          <h2>Duration & Fees</h2>
          <div className="card">
            <ul>
              <li>Course Duration: 6 Weeks / 40 Hours</li>
              <li>Mode: Online + Offline</li>
              <li>Fees: ₹15,000</li>
              <li>Discounted Price (Introductory Offer): ₹9,999</li>
              <li>Easy EMI Options Available</li>
            </ul>
            <div className="btn-row">
              <button className="cta" type="button">Enroll Now</button>
              <button className="cta-outline" type="button">Book Free Demo</button>
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers">
          <h2>Career Path After This Course</h2>
          <div className="card">
            <p><strong>Roles:</strong></p>
            <ul>
              <li>Credit Analyst</li>
              <li>Relationship Manager</li>
              <li>Loan Officer</li>
              <li>Operations Executive</li>
            </ul>
          </div>
          <div className="card recruiters">
            <p><strong>Recruiters:</strong> ICICI HFC | Axis Bank | Kotak Bank | HDFC Ltd | DCB Bank | Mahindra Finance</p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <h2>What Our Students Say</h2>
          <div className="card quote">
            🗣️ “The course gave me complete confidence to crack my bank interview. I got placed at Axis Bank as a Credit Analyst.” – Rohan, Pune
          </div>
          <div className="card quote">
            🗣️ “Learning directly from mortgage specialists made a huge difference. The real-life examples helped me understand how the industry works.” – Sneha, Mumbai
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs">
          <h2>Frequently Asked Questions</h2>
          <div className="card">
            <p><strong>Q: Who can join this course?</strong><br />A: Graduates (B.Com, BBA, MBA, B.Tech) and freshers aspiring for BFSI jobs.</p>
          </div>
          <div className="card">
            <p><strong>Q: Is prior banking knowledge required?</strong><br />A: No. We start from basics and build up to advanced topics.</p>
          </div>
          <div className="card">
            <p><strong>Q: Is this course online or classroom?</strong><br />A: Both options available.</p>
          </div>
          <div className="card">
            <p><strong>Q: Will I get placement support?</strong><br />A: Yes, we provide interview preparation and connect you with BFSI recruiters.</p>
          </div>
        </section>

        {/* Blog */}
        <section id="blog">
          <h2>Learn More About Mortgages</h2>
          <div className="card">Top 5 Skills to Get Placed in Banking & Finance</div>
          <div className="card">How Mortgage Lending Works in India</div>
          <div className="card">Role of NBFCs in Affordable Housing</div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact Us</h2>
          <p>📧 info@bharatmortgages.com &nbsp;&nbsp;|&nbsp;&nbsp; 📱 +91-XXXXXXXXXX</p>
          <div className="card">
            <form onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Name" />
              <input placeholder="Email" />
              <input placeholder="Phone" />
              <textarea placeholder="Message" rows={5} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
