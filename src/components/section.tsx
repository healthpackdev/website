export interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  header: string;
}

export const Section: React.FC<SectionProps> = ({ header, children, ...props }) => (
  <section className="px-4 py-10" {...props}>
    <header className="text-4xl text-center my-7 font-semibold">{header}</header>
    {children}
  </section>
);
