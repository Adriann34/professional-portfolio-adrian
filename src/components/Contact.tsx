import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../data/content";
import { useFadeIn } from "../hooks/useFadeIn";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

// Each entry renders one row in the contact-info list. `href` is omitted
// for non-link rows (e.g. Location), which renders as plain text instead.
const CONTACT_ITEMS: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
}[] = [
  {
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.26 6.26l1-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "Location",
    value: contactInfo.location,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: "GitHub",
    value: contactInfo.githubHandle,
    href: contactInfo.githubUrl,
    external: true,
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
    ),
  },
  {
    label: "LinkedIn",
    value: contactInfo.linkedinHandle,
    href: contactInfo.linkedinUrl,
    external: true,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "OnlineJobs.ph",
    value: contactInfo.onlineJobsHandle,
    href: contactInfo.onlineJobsUrl,
    external: true,
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
];

const ContactIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="contact-icon-wrap">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5b7fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </div>
);

const ExternalLinkGlyph: React.FC = () => (
  <svg
    className="contact-item-external"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ContactItem: React.FC<(typeof CONTACT_ITEMS)[number]> = ({
  label,
  value,
  href,
  external,
  icon,
}) => {
  const body = (
    <>
      <ContactIcon>{icon}</ContactIcon>
      <div className="contact-item-text">
        <div className="contact-item-label">{label}</div>
        <div className="contact-item-val">{value}</div>
      </div>
      {external && <ExternalLinkGlyph />}
    </>
  );

  if (!href) {
    return <div className="contact-item">{body}</div>;
  }

  return (
    <a
      className="contact-item"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {body}
    </a>
  );
};

const Contact: React.FC = () => {
  const titleRef = useFadeIn<HTMLDivElement>();
  const infoRef = useFadeIn<HTMLDivElement>();
  const formRef = useFadeIn<HTMLDivElement>();
  const formElRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot — real users never see/fill this
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Honeypot tripped — silently bail without sending or showing an error,
    // so bots think it worked and don't retry with adjusted payloads.
    if (company) {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="fade-in" ref={titleRef}>
          <div className="section-eyebrow">Let's Connect</div>
          <div className="section-title">Get in Touch</div>
        </div>
        <div className="contact-grid">
          <div className="contact-info fade-in" ref={infoRef}>
            {CONTACT_ITEMS.map((item) => (
              <ContactItem key={item.label} {...item} />
            ))}
          </div>

          <div
            className="contact-form-card fade-in"
            style={{ "--delay": "0.1s" } as React.CSSProperties}
            ref={formRef}
          >
            <div className="form-title">Send a message</div>
            <div className="form-sub">I'll get back to you within 24 hours.</div>

            <form onSubmit={handleSubmit} ref={formElRef}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Send me a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Honeypot field — hidden from real visitors via CSS, but most
                  bots fill in every field they find in the DOM. Anything
                  other than a sighted human leaving this blank gets caught. */}
              <div className="visually-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn-grad btn-grad-block"
                disabled={status === "submitting"}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="form-status success">
                  Message sent — thanks for reaching out!
                </div>
              )}
              {status === "error" && (
                <div className="form-status error">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
