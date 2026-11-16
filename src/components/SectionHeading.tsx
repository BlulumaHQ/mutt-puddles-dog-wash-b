import { motion } from "framer-motion";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ overline, title, description, centered = false }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className={`mb-12 ${centered ? "text-center" : ""}`}
  >
    {overline && <p className="overline mb-3">{overline}</p>}
    <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] text-secondary" style={{ textWrap: "balance" } as any}>{title}</h2>
    <span className={`squiggle ${centered ? "mx-auto" : ""}`} aria-hidden />
    {description && (
      <p className={`mt-5 text-lg text-muted-foreground leading-relaxed max-w-[65ch] ${centered ? "mx-auto" : ""}`}>{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
