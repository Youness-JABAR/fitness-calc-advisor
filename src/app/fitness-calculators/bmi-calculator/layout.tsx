

export const metadata = {
    title: 'BMI Calculator  | FitnessCalcAdvisor',
    description: 'Calculate your Body Mass Index (BMI) to assess your weight category (underweight, normal weight, overweight, or obese) based on your height and weight.',
  }

export default function BmiCalculatorLayout({
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