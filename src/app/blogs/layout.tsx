
export default function BlogsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section  className="mx-6 pt-[10%]">
        {children}
      </section>
    );
  }