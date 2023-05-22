
export default function CalculatorsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section  className="mx-6 pt-[5%]">
        {children}
      </section>
    );
  }