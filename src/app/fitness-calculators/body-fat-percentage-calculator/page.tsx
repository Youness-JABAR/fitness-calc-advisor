"use client"; // This is a client component 👈🏽
import { useState } from 'react';
import Head from 'next/head';


export const metadata = {
    title: 'Body Fat Percentage Calculator | FitnessCalcAdvisor',
    description: 'Calculate your body fat percentage to assess your body composition based on your age, weight, height measurements.',
  }


const BodyFatCalculatorPage = () => {
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [heightFeet, setHeightFeet] = useState<string>('');
  const [heightInches, setHeightInches] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unitSystem, setUnitSystem] = useState<'metric' | 'us'>('metric');
  const [bodyFatPercentage, setBodyFatPercentage] = useState<string>('');


  
const getBodyFatAdviceForMale = (bodyFatPercentage: number) => {
    // Add your advice for males based on body fat percentage thresholds
    if (bodyFatPercentage < 10) {
      return "You have a very low body fat percentage.";
    } else if (bodyFatPercentage < 20) {
      return "You have a low body fat percentage. Keep up the good work!";
    } else if (bodyFatPercentage < 25) {
      return "You have a healthy body fat percentage. Maintain your current lifestyle to stay fit.";
    } else {
      return "You have a high body fat percentage. Consider adopting a healthier lifestyle.";
    }
  };
  
  const getBodyFatAdviceForFemale = (bodyFatPercentage: number) => {
    // Add your advice for females based on body fat percentage thresholds
    if (bodyFatPercentage < 20) {
      return "You have a very low body fat percentage.";
    } else if (bodyFatPercentage < 30) {
      return "You have a low body fat percentage. Keep up the good work!";
    } else if (bodyFatPercentage < 35) {
      return "You have a healthy body fat percentage. Maintain your current lifestyle to stay fit.";
    } else {
      return "You have a high body fat percentage. Consider adopting a healthier lifestyle.";
    }
  };

  const getAdvice = (): string => {
    if (gender === 'male') {
      return getBodyFatAdviceForMale(parseFloat(bodyFatPercentage));
    } else if (gender === 'female') {
      return getBodyFatAdviceForFemale(parseFloat(bodyFatPercentage));
    }
    return '';
  };

  const calculateBodyFatPercentage = () => {
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
      heightValue = parseFloat(heightFeet);
    }
    console.log("Values", heightValue,age);

    if (weightValue && heightValue) {
      let bodyFatPercentageValue = 0;
      const bmiValue = weightValue / ((heightValue / 100) * (heightValue / 100));

      if (gender === 'male') {
        bodyFatPercentageValue = (0.988 * bmiValue) + (0.242 * weightValue) + (0.094 * parseFloat(age)) - 30.180;
      } else if (gender === 'female') {
        bodyFatPercentageValue = (0.988 * bmiValue) + (0.344 * weightValue) + (0.094 * parseFloat(age)) - 30.180;
      }
      
      setBodyFatPercentage(bodyFatPercentageValue.toFixed(2));
      
    };
};
  

  const handleUnitSystemToggle = () => {
    const newUnitSystem = unitSystem === 'metric' ? 'us' : 'metric';
    setUnitSystem(newUnitSystem);
    setAge('');
    setWeight('');
    setHeightFeet('');
    setHeightInches('');
    setBodyFatPercentage('');
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Body Fat Percentage Calculator</h1>

        <div className="flex justify-center mb-6">
          <button
            className="hover:bg-blue-light bg-blue-dark text-white font-semibold py-2 px-4 rounded-md"
            onClick={handleUnitSystemToggle}
          >
            Switch to {unitSystem === 'us' ? 'Metric Units' : 'US Units'}
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="">
              <label htmlFor="age" className="block font-semibold mb-2">Age:</label>
              <input
                type="number"
                id="age"
                className="border border-gray-300 px-4 py-2 rounded-md  w-40 mr-2"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="weight" className="block font-semibold mb-2">Weight:</label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="weight"
                  placeholder={unitSystem === 'us' ? "pounds":"kg"}
                  className="border border-gray-300 px-4 py-2 rounded-md w-40 mr-2"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                
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
                      className="border border-gray-300 px-4 py-2 rounded-md w-20"
                      placeholder="Inches"
                      value={heightInches}
                      onChange={(e) => setHeightInches(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      id="meters"
                      className="border border-gray-300 px-4 py-2 rounded-md w-40"
                      placeholder="Centimeters"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                    />
                  </>
                )}
              </div>
            </div>

           

            <div className="mt-6">
              <label htmlFor="gender" className="block font-semibold mb-2">Gender:</label>
              <div className="flex items-center">
                <label htmlFor="male" className="mr-4">
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label htmlFor="female">
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            <div className="mt-8">
              <button
                className="hover:bg-blue-light bg-blue-dark text-white font-semibold py-2 px-4 rounded-md w-full"
                onClick={calculateBodyFatPercentage}
              >
                Calculate
              </button>
            </div>

            {bodyFatPercentage && (
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-semibold mb-2">Body Fat Percentage:</h2>
                <p className="text-3xl font-bold">{bodyFatPercentage}%</p>
                <p className="mt-4">{getAdvice()}</p>

              </div>
            )}
          </div>
        </div>
        <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Body Fat Percentage Using Heitmann BL Formulas:</h2>
      <p>

        Bodyfat(kg)male = (0.988 × BMI) + (0.242 × weight) + (0.094 × age) - 30.180
        <br />
        Bodyfat(kg)female = (0.988 × BMI) + (0.344 × weight) + (0.094 × age) - 30.180
      </p>
      <p>
        The formulas provide an estimation of body fat percentage based on BMI, weight, and age. It's important to note that these formulas have limitations and may not be highly accurate for everyone. Individual variations and factors such as muscle mass, bone density, and distribution of fat can influence the results.
      </p>
      <p>
        One study related to body fat estimation is the research conducted by Heitmann BL, titled "Evaluation of body fat estimated from body mass index, skinfolds, and impedance: A comparative study." The study was published in the European Journal of Clinical Nutrition in 1990 (44(11): 831-837). It evaluated different methods of estimating body fat, including BMI, skinfolds, and impedance.
      </p>
      <p>
        It's important to consult with a healthcare professional or a registered dietitian for a comprehensive assessment of body composition and personalized advice regarding body fat management.
      </p>
    </div>
      </div>
    </>
  );
};

export default BodyFatCalculatorPage;
