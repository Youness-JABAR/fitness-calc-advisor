"use client"; // This is a client component 👈🏽

import { useState } from 'react';
import Head from 'next/head';

    
const BmiCalculatorPage = () => {
  const [weight, setWeight] = useState<string>('');
  const [heightFeet, setHeightFeet] = useState<string>('');
  const [heightInches, setHeightInches] = useState<string>('');
  const [heightCm, setHeightCm] = useState<string>('');
  const [bmi, setBmi] = useState<string>('');
  const [unitSystem, setUnitSystem] = useState<'metric' | 'us'>('metric');

  const calculateBMI = () => {
    let weightValue = parseFloat(weight);
    let heightValue = 0;

    if (unitSystem === 'us') {
      // Convert weight from pounds to kilograms
      weightValue = weightValue * 0.453592;

      // Convert height from feet and inches to centimeters
      const feetToCm = parseFloat(heightFeet) * 30.48;
      const inchesToCm = parseFloat(heightInches) * 2.54;
      heightValue = feetToCm + inchesToCm;
    } else {
      // Metric unit system
      heightValue = parseFloat(heightCm);
    }

    if (weightValue && heightValue) {
      const bmiValue = weightValue / ((heightValue / 100) * (heightValue / 100));
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi('');
    }
  };

  const handleUnitSystemToggle = () => {
    const newUnitSystem = unitSystem === 'metric' ? 'us' : 'metric';
    setUnitSystem(newUnitSystem);
    setWeight('');
    setHeightFeet('');
    setHeightInches('');
    setHeightCm('');
    setBmi('');
  };

  const getBmiRangeInfo = () => {
    if (unitSystem === 'us') {
      return (
        <>
          <p>Underweight: BMI &lt; 18.5</p>
          <p>Normal weight: 18.5 &ndash; 24.9</p>
          <p>Overweight: 25 &ndash; 29.9</p>
          <p>Obese: BMI &ge; 30</p>
        </>
      );
    }

    // Metric unit system
    return (
      <>
        <p>Underweight: BMI &lt; 18.5</p>
        <p>Normal weight: 18.5 &ndash; 24.9</p>
        <p>Overweight: 25 &ndash; 29.9</p>
        <p>Obese: BMI &ge; 30</p>
      </>
    );
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">BMI Calculator</h1>

        <div className="flex justify-center mb-6">
          <button
            className="hover:bg-blue-light bg-blue-dark text-white font-semibold py-2 px-4 rounded-md"
            onClick={handleUnitSystemToggle}
          >
            Switch to {unitSystem === 'us' ? 'Metric Units' : 'US Units'} Units
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="mt-6">
              <label htmlFor="weight" className="block font-semibold mb-2">Weight:</label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="weight"
                  className="border border-gray-300 px-4 py-2 rounded-md w-40 mr-2"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                {unitSystem === 'us' ? (
                  <span className="ml-2">lb</span>
                ) : (
                  <span className="ml-2">kg</span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="height" className="block font-semibold mb-2">Height:</label>
              <div className="flex items-center mb-4">
                {unitSystem === 'us' ? (
                  <>
                    <input
                      type="number"
                      id="feet"
                      className="border border-gray-300 px-4 py-2 rounded-md w-20 mr-2"
                      placeholder="Feet"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                    />
                    <input
                      type="number"
                      id="inches"
                      className="border border-gray-300 px-4 py-2 rounded-md w-20 mr-2"
                      placeholder="Inches"
                      value={heightInches}
                      onChange={(e) => setHeightInches(e.target.value)}
                    />
                    <span className="ml-2">ft'in"</span>
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      id="cm"
                      className="border border-gray-300 px-4 py-2 rounded-md w-40"
                      placeholder="Centimeters"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                    />
                    <span className="ml-2">cm</span>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6">
              <button
                className="hover:bg-blue-light bg-blue-dark text-white font-semibold py-2 px-4 rounded-md w-full"
                onClick={calculateBMI}
              >
                Calculate BMI
              </button>
            </div>

            {bmi !== '' && (
              <div className="mt-6">
                <p className="font-semibold">Your BMI: {bmi}</p>
                <div className="mt-2">
                  <h3 className="font-semibold">BMI Range:</h3>
                  {getBmiRangeInfo()}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">About BMI</h2>
          <p>
            Body Mass Index (BMI) is a widely used indicator of body fat percentage. It helps individuals assess their weight category (underweight, normal weight, overweight, or obese) based on their height and weight.
          </p>
          <p>
            BMI is calculated by dividing a person's weight (in kilograms or pounds) by the square of their height (in meters or inches). The resulting value indicates the person's body composition and potential health risks associated with their weight.
          </p>
          <p>
            It's important to note that while BMI is a useful screening tool, it doesn't directly measure body fat percentage or account for factors such as muscle mass, bone density, and distribution of fat. Therefore, it's always advisable to consult with a healthcare professional for a comprehensive assessment of your health and weight.
          </p>
        </div>
        <div className="mt-8">
  <h2 className="text-2xl font-bold mb-4">BMI Ranges</h2>
  <p className="text-gray-700 mb-2">BMI values can be categorized into the following ranges:</p>
  <ul className="list-disc list-inside mb-6">
    <li className="text-red-500 mb-2">
      <strong>Underweight:</strong> BMI less than 18.5
      <br />
      Advice: If you are underweight, it's important to focus on gaining weight in a healthy way. Consult with a healthcare professional or a registered dietitian for personalized guidance.
    </li>
    <li className="text-green mb-2">
      <strong>Normal weight:</strong> BMI between 18.5 and 24.9
      <br />
      Advice: Maintaining a healthy weight is important for overall well-being. Continue to eat a balanced diet and engage in regular physical activity.
    </li>
    <li className="text-yellow-500 mb-2">
      <strong>Overweight:</strong> BMI between 25 and 29.9
      <br />
      Advice: If you are overweight, consider making lifestyle changes such as adopting a balanced diet, increasing physical activity, and seeking support from a healthcare professional or a registered dietitian.
    </li>
    <li className="text-red-500 mb-2">
      <strong>Obese:</strong> BMI of 30 or higher
      <br />
      Advice: Obesity is associated with various health risks. It's important to seek professional guidance to develop a comprehensive weight management plan that includes a balanced diet, regular exercise, and potential medical interventions.
    </li>
  </ul>
</div>

      </div>
    </>
  );
};

export default BmiCalculatorPage;
