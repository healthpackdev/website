interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  header: string;
}
const Container: React.FC<ContainerProps> = ({ header, children, ...props }) => (
  <section className="container px-4 py-10" {...props}>
    <header className="text-4xl text-center my-7 font-semibold">{header}</header>
    {children}
  </section>
);

// eslint-disable-next-line import/prefer-default-export
export { Container };
