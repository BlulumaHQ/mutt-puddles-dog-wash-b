import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <h3 className="text-3xl text-secondary mb-2">Thanks!</h3>
        <p className="text-muted-foreground">Your message has been sent. We'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/mbdabbql"
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-extrabold text-secondary mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-button border-[3px] border-secondary bg-cream text-foreground text-base font-medium focus:outline-none focus:ring-4 focus:ring-primary/40"
          />
        </div>
        <div>
          <label className="block text-sm font-extrabold text-secondary mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-button border-[3px] border-secondary bg-cream text-foreground text-base font-medium focus:outline-none focus:ring-4 focus:ring-primary/40"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-extrabold text-secondary mb-1.5">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-3 rounded-button border-[3px] border-secondary bg-cream text-foreground text-base font-medium focus:outline-none focus:ring-4 focus:ring-primary/40"
        />
      </div>
      <div>
        <label className="block text-sm font-extrabold text-secondary mb-1.5">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-button border-[3px] border-secondary bg-cream text-foreground text-base font-medium focus:outline-none focus:ring-4 focus:ring-primary/40 resize-none"
        />
      </div>
      <button
        type="submit"
        className="btn-teal w-full sm:w-auto px-10"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
