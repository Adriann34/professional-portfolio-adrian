import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../data/content";
import { useFadeIn } from "../hooks/useFadeIn";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

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
            <a className="contact-item" href={`tel:${contactInfo.phone}`}>
              <div className="contact-icon-wrap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5b7fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.26 6.26l1-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-val">{contactInfo.phone}</div>
              </div>
            </a>

            <a className="contact-item" href={`mailto:${contactInfo.email}`}>
              <div className="contact-icon-wrap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5b7fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">{contactInfo.email}</div>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-icon-wrap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5b7fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-val">{contactInfo.location}</div>
              </div>
            </div>

            <a
              className="contact-item"
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon-wrap">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5b7fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-val">
                  {contactInfo.linkedinHandle}
                </div>
              </div>
            </a>
          </div>

          <div
            className="contact-form-card fade-in"
            style={{ transitionDelay: "0.1s" }}
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
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              {/* Honeypot field — hidden from real visitors via CSS, but most
                  bots fill in every field they find in the DOM. Anything
                  other than a sighted human leaving this blank gets caught. */}
              <div
                style={{
                  position: "absolute",
                  width: 0,
                  height: 0,
                  overflow: "hidden",
                  opacity: 0,
                }}
                aria-hidden="true"
              >
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
                className="btn-grad"
                style={{ width: "100%", justifyContent: "center", marginTop: 4 }}
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
