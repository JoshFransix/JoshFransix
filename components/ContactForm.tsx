"use client";

import { Send, CheckCircle, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShowSuccess(true);
      window.history.replaceState({}, "", "/#contact");
    }
  }, [searchParams]);

  const handleClose = () => {
    setShowSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setShowSuccess(true);
      form.reset();
      window.history.replaceState({}, "", "/#contact");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-background border border-border rounded-lg p-6 max-w-md w-full shadow-2xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Message Sent!
              </h3>
              <p className="text-muted">
                Thank you for reaching out! I&apos;ll get back to you soon.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
            placeholder="Hello, I'd like to discuss..."
          />
        </div>

        {/* ...existing code... */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}

export function ContactForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Suspense fallback={<ContactFormFallback />}>
        <ContactFormContent />
      </Suspense>
    </div>
  );
}

function ContactFormFallback() {
  return (
    <form className="space-y-6 animate-pulse">
      <div>
        <div className="h-4 w-24 bg-border rounded mb-2"></div>
        <div className="h-12 bg-border rounded"></div>
      </div>
      <div>
        <div className="h-4 w-24 bg-border rounded mb-2"></div>
        <div className="h-12 bg-border rounded"></div>
      </div>
      <div>
        <div className="h-4 w-24 bg-border rounded mb-2"></div>
        <div className="h-32 bg-border rounded"></div>
      </div>
      <div className="h-12 bg-border rounded"></div>
    </form>
  );
}
