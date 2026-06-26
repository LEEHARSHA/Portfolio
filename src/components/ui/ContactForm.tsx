import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  requirement: string;
  budget: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  requirement: "",
  budget: "",
  message: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-xl glass text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      return "Please enter a valid phone number.";
    }
    if (!form.company.trim()) return "Please enter your company name.";
    if (!form.requirement.trim()) return "Please describe your project requirement.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus("error");
      setErrorMessage(error);
      return;
    }

    setStatus("success");
    setErrorMessage("");
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={form.name}
          onChange={update("name")}
          className={inputClass}
          aria-label="Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={update("email")}
          className={inputClass}
          aria-label="Email"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={update("phone")}
          className={inputClass}
          aria-label="Phone Number"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name *"
          value={form.company}
          onChange={update("company")}
          className={inputClass}
          aria-label="Company Name"
        />
      </div>

      <input
        type="text"
        name="requirement"
        placeholder="Project Requirement *"
        value={form.requirement}
        onChange={update("requirement")}
        className={inputClass}
        aria-label="Project Requirement"
      />

      <input
        type="text"
        name="budget"
        placeholder="Budget (Optional)"
        value={form.budget}
        onChange={update("budget")}
        className={inputClass}
        aria-label="Budget"
      />

      <textarea
        name="message"
        placeholder="Message *"
        rows={4}
        value={form.message}
        onChange={update("message")}
        className={`${inputClass} resize-none`}
        aria-label="Message"
      />

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm"
            role="status"
          >
            <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
            <span>
              Thank you! Your message has been received. We&apos;ll get back to you shortly.
            </span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm"
            role="alert"
          >
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <MagneticButton type="submit" className="w-full">
        Submit <Send size={16} />
      </MagneticButton>
    </form>
  );
}
