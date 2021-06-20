export interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  header: string;
}

export const Section: React.FC<SectionProps> = ({ header, children, ...props }) => (
  <section className="py-5 my-5" {...props}>
    <header className="text-4xl text-left my-3 font-semibold">{header}</header>
    {children}
  </section>
);
