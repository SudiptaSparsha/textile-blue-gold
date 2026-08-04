import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}

const SectionWrapper = ({ children, className = "", alt = false, id }: SectionWrapperProps) => (
  <section id={id} className={`section-padding ${alt ? "bg-section-alt" : "bg-background"} ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export default SectionWrapper;

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-10 text-center md:mb-14">
    <h2 className="text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">{title}</h2>
    <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
    {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
  </div>
);
