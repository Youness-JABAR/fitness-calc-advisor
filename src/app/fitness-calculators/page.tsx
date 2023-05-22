import  Head from "next/head";
import Link from "next/link";
import calculators from '@/styles/calculators.module.css';
export const metadata = {
    title: 'Fitness Calculators | FitnessCalcAdvisor',
    description: 'Use our fitness calculators to measure your BMI, calculate calories burned, and determine body fat percentage. Get accurate fitness assessments to track your progress.',
  }
  
const FitnessCalculator = () => {
    return (
        <>
            <div className="container mx-auto py-8  ">
                <h1 className="text-3xl font-bold mb-4 text-center text-blue-light ">Fitness Calculators</h1>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mx-6">
                <div className="bg-blue-dark text-white p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">BMI Calculator</h2>
                    <p className="text-gray-300 mb-4">Calculate your Body Mass Index (BMI) to assess your weight status.</p>
                    <Link href="/fitness-calculators/bmi-calculator" className="text-blue-light hover:underline">Go to BMI Calculator
                    </Link>
                </div>

                <div className="bg-blue-dark text-white p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Calorie Calculator</h2>
                    <p className="text-gray-300 mb-4">Estimate the number of calories you need to consume each day.</p>
                    <Link href="/fitness-calculators/calorie-calculator" className="text-blue-light hover:underline">Go to calorie Calculator
                    </Link>
                </div>

                <div className="bg-blue-dark text-white p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Body Fat Percentage Calculator</h2>
                    <p className="text-gray-300 mb-4">Measure your body fat percentage to evaluate your fitness level.</p>
                    <Link href="/fitness-calculators/body-fat-percentage-calculator" className="text-blue-light hover:underline">Go to Body Fat Percentage Calculator
                    </Link>
                </div>

                {/* <div className="bg-blue-dark text-white p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Calories Burned Calculator</h2>
                    <p className="text-gray-300 mb-4">Estimate the number of calories burned during various activities.</p>
                    <Link href="/calories-burned-calculator" className="text-blue-light hover:underline">Go to Calories Burned Calculator
                    </Link>
                </div> */}


                {/* Add more calculator boxes as needed */}
                </div>
            </div>
        </>
    )
}

export default FitnessCalculator;
