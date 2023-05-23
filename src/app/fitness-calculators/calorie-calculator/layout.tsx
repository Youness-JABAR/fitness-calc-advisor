
export const metadata = {
  title: 'calorie Calculator | FitnessCalcAdvisor',
  description: 'Estimate the number of calories you need to consume each day.',
}
export default function CalorieCalculatorLayout({
    children, 
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        {children}
      </>
    );
  }