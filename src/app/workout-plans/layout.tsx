
export default function WorkoutPlansLayout({
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