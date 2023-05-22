"use client"; // This is a client component 👈🏽
import React, { useState } from "react";

export const metadata = {
  title: 'calorie Calculator | FitnessCalcAdvisor',
  description: 'Estimate the number of calories you need to consume each day.',
}

const CalorieCalculator = () => {
  const [weight, setWeight] = useState<number | null>(null);
  const [heightFeet, setHeightFeet] = useState<number | null>(null);
  const [heightInches, setHeightInches] = useState<number | null>(null);
  const [heightCm, setHeightCm] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [activityLevel, setActivityLevel] = useState<string>("sedentary");
  const [unitSystem, setUnitSystem] = useState<string>("metric");
  const [caloriesResult, setCaloriesResult] = useState<number | null>(null);

  const calculateCalories = () => {
    if (weight && age) {
      let height: number | null;
      if (unitSystem === "metric") {
        height = heightCm;
      } else {
        height = heightFeet && heightInches ? heightFeet * 12 + heightInches : null;
      }

      if (height) {
        let calories: number;
        if (unitSystem === "metric") {
          const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
          calories = calculateCaloriesWithActivityLevel(bmr);
        } else {
          const weightInKg = weight * 0.453592;
          const heightInCm = height * 2.54;
          const bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
          calories = calculateCaloriesWithActivityLevel(bmr);
        }
        setCaloriesResult(calories);
      }
    }
  };

  const calculateCaloriesWithActivityLevel = (bmr: number) => {
    switch (activityLevel) {
      case "sedentary":
        return bmr * 1.2;
      case "lightlyActive":
        return bmr * 1.375;
      case "moderatelyActive":
        return bmr * 1.55;
      case "veryActive":
        return bmr * 1.725;
      case "extraActive":
        return bmr * 1.9;
      default:
        return bmr;
    }
  };

  const handleUnitSystemToggle = () => {
    setUnitSystem(unitSystem === "metric" ? "us" : "metric");
    setWeight(null);
    setHeightFeet(null);
    setHeightInches(null);
    setHeightCm(null);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center ">Calorie Calculator</h2>

      {/* Unit System Toggle */}
      <div className="flex justify-center mb-4">
        {/* <p className="mr-2">Units: </p> */}
        <button
            className="hover:bg-blue-light bg-blue-dark text-white font-semibold py-2 px-4 rounded-md"
            onClick={handleUnitSystemToggle}
        >
          Switch to {unitSystem === "metric" ? "Metric" : "US"} Units
        </button>
      </div>

      {/* Calorie Calculator Form */}
      <div className=" flex justify-center " >
        <div>
            <form className="w-full max-w-m mb-4">
                <div className="  mb-4">
                <label htmlFor="weight" className="block font-semibold mb-2">
                    Weight:
                </label>
                <input
                    type="number"
                    id="weight"
                    className=" p-2 border border-gray-300 rounded-md"
                    placeholder={`Enter weight in ${unitSystem === "metric" ? "kg" : "lbs"}`}
                    value={weight ?? ""}
                    onChange={(e) => setWeight(Number(e.target.value))}
                />
                </div>
                {unitSystem === "metric" ? (
                <div className="mb-4">
                    <label htmlFor="heightCm" className="block font-semibold mb-2">
                    Height (cm):
                    </label>
                    <input
                    type="number"
                    id="heightCm"
                    className=" p-2 border border-gray-300 rounded-md"
                    placeholder="Enter height in cm"
                    value={heightCm ?? ""}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    />
                </div>
                ) : (
                <div className="mb-4">
                    <div className="flex">
                    <div className="mr-4">
                        <label htmlFor="heightFeet" className="block font-semibold mb-2">
                        Height (ft):
                        </label>
                        <input
                        type="number"
                        id="heightFeet"
                        className="p-2 border border-gray-300 rounded-md"
                        placeholder="Feet"
                        value={heightFeet ?? ""}
                        onChange={(e) => setHeightFeet(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label htmlFor="heightInches" className="block font-semibold mb-2">
                        Height (in):
                        </label>
                        <input
                        type="number"
                        id="heightInches"
                        className=" p-2 border border-gray-300 rounded-md"
                        placeholder="Inches"
                        value={heightInches ?? ""}
                        onChange={(e) => setHeightInches(Number(e.target.value))}
                        />
                    </div>
                    </div>
                </div>
                )}
                <div className="mb-4">
                <label htmlFor="age" className="block font-semibold mb-2">
                    Age:
                </label>
                <input
                    type="number"
                    id="age"
                    className=" p-2 border border-gray-300 rounded-md"
                    placeholder="Enter age"
                    value={age ?? ""}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
                </div>
                <div className="mb-4">
                <label htmlFor="activityLevel" className="block font-semibold mb-2">
                    Activity Level:
                </label>
                <select
                    id="activityLevel"
                    className=" p-2 border border-gray-300 rounded-md"
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                >
                    <option value="sedentary">Sedentary (little to no exercise)</option>
                    <option value="lightlyActive">Lightly active (light exercise/sports 1-3 days/week)</option>
                    <option value="moderatelyActive">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                    <option value="veryActive">Very active (hard exercise/sports 6-7 days/week)</option>
                    <option value="extraActive">Extra active (very hard exercise/sports & physical job)</option>
                </select>
                </div>
                <button
                type="button"
                className="hover:bg-blue-light bg-blue-dark text-white font-semibold py-2 px-4 rounded-md w-full"
                onClick={calculateCalories}
                >
                Calculate
                </button>
            </form>
        </div>
      {/* Calorie Calculator Results */}
      {caloriesResult && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Results:</h3>
          <p className="text-gray-700">Estimated daily calories needed: {Math.round(caloriesResult)} Calories/day</p>
          {/* Advice based on the result */}
          {caloriesResult < 1500 && (
            <p className="text-gray-700">Consider increasing your calorie intake for better health and energy levels.</p>
          )}
          {caloriesResult > 2500 && (
            <p className="text-gray-700">Consider reducing your calorie intake to manage your weight effectively.</p>
          )}
        </div>
      )}
      </div>

      {/* Additional Information */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
        <p className="text-gray-700">
          Are you trying to manage your weight or achieve specific fitness goals? Knowing your daily
          calorie needs can be instrumental in creating an effective plan. Our Calorie Calculator is
          here to help you estimate the number of calories your body requires to maintain its current
          weight or reach your desired weight.
        </p>
        <p className="text-gray-700">
          The calculator takes into account factors such as weight, height, age, and activity level to
          provide an estimate of your daily calorie needs. By understanding your calorie requirements,
          you can make informed decisions about your diet and exercise routine to support your health
          and fitness goals.
        </p>
        <p className="text-gray-700">
          It's important to note that the calculated calorie value is an estimate, and individual
          variations may apply. Factors like metabolism, muscle mass, and specific health conditions
          can influence your actual calorie needs. Therefore, it's always recommended to consult with
          a healthcare professional or registered dietitian for personalized guidance.
        </p>
        <p className="text-gray-700">
          Remember that the Calorie Calculator provides a general estimation. If your goal is to lose
          weight, creating a calorie deficit by consuming fewer calories than your calculated daily
          needs can be effective. Conversely, consuming more calories than your calculated needs can
          help you gain weight. However, it's essential to focus on the quality of the calories you
          consume, emphasizing nutrient-dense foods and maintaining a balanced diet.
        </p>
      </div>
    </div>
  );
};

export default CalorieCalculator;
