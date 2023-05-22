import Head from 'next/head';

export const metadata = {
  title: 'Beginner Workout Plan for Fitness Beginners | FitnessCalcAdvisor',
  description: 'Welcome to our Beginner Workout Plan, designed specifically for fitness beginners who are ready to embark on their fitness journey. This comprehensive plan is tailored to help you build strength, improve fitness, and establish a solid foundation for your exercise routine.',
}

const BeginnerWorkoutPlanPage = () => {
  return (
    <>
      <div className="container mx-auto py-8 px-[10%] text-justify">
      <h1 className="text-3xl font-bold mb-4 text-blue-light mt-[10%]">Beginner Workout Plan for Fitness Beginners</h1>
        <p>Welcome to our Beginner Workout Plan, designed specifically for fitness beginners who are ready to embark on their fitness journey. This comprehensive plan is tailored to help you build strength, improve fitness, and establish a solid foundation for your exercise routine.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Overview</h2>
        <p>Our Beginner Workout Plan is carefully crafted to introduce you to various exercises and techniques while ensuring safety and effectiveness. By following this plan, you'll gradually progress towards your fitness goals and develop the confidence to take on more advanced workouts.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Workout Schedule</h2>
        <p>We recommend following this workout plan three days a week, allowing for rest and recovery in between sessions. Each workout should last approximately 30 to 45 minutes, making it easy to fit into your busy schedule.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">Day 1</h3>
        <p>
          <strong>Warm-up:</strong> Begin with a 5-10 minute warm-up, such as brisk walking or light jogging, to prepare your body for exercise.<br />
          <strong>Strength Training:</strong> Perform two sets of 10-12 repetitions of exercises like squats, push-ups, lunges, and planks. Focus on maintaining proper form throughout.<br />
          <strong>Cardiovascular Exercise:</strong> Engage in 10-15 minutes of moderate-intensity cardio, such as brisk walking, cycling, or using an elliptical machine.<br />
          <strong>Cool-down and Stretching:</strong> Finish the workout with 5-10 minutes of stretching exercises to improve flexibility and prevent muscle soreness.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Day 2</h3>
        <p>
          <strong>Rest or Active Rest:</strong> Day 2 is your opportunity to rest and allow your body to recover. However, you can engage in light activities like walking, yoga, or stretching to stay active and promote blood circulation.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Day 3</h3>
        <p>
          <strong>Warm-up:</strong> Start with a 5-10 minute warm-up to prepare your body for the workout ahead.<br />
          <strong>Strength Training:</strong> Perform exercises like assisted pull-ups or lat pulldowns, dumbbell shoulder presses, dumbbell rows, and bodyweight or assisted tricep dips. Aim for two sets of 10-12 repetitions for each exercise.<br />
          <strong>Cardiovascular Exercise:</strong> Incorporate 10-15 minutes of moderate-intensity cardio to further enhance your cardiovascular health.<br />
          <strong>Cool-down and Stretching:</strong> Conclude the workout with 5-10 minutes of stretching exercises to promote muscle recovery and flexibility.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Day 4</h3>
        <p>
          <strong>Rest or Active Rest:</strong> Take another day of rest or engage in light activities like walking, yoga, or stretching to keep your body active without overexerting yourself.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2">Day 5</h3>
        <p>
          <strong>Warm-up:</strong> Begin with a 5-10 minute warm-up to prepare your body for the workout ahead.<br />
          <strong>Strength Training:</strong> Perform three sets of 10-12 repetitions of exercises like squats, push-ups, lunges, and planks. Focus on maintaining proper form and gradually increase the intensity.<br />
          <strong>Cardiovascular Exercise:</strong> Dedicate 10-15 minutes to moderate-intensity cardio to boost your heart rate and burn calories.<br />
          <strong>Cool-down and Stretching:</strong> Finish the workout with 5-10 minutes of stretching exercises to promote flexibility and prevent muscle tightness.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tips for Success</h2>
        <ul className="list-disc pl-6">
          <li>Focus on maintaining proper form and technique throughout each exercise.</li>
          <li>Listen to your body and modify exercises as needed to avoid injury.</li>
          <li>Stay consistent with your workout routine and aim for gradual progression.</li>
          <li>Combine your workouts with a balanced diet to maximize results.</li>
          <li>Remember, fitness is a journey, so be patient with yourself and celebrate small victories along the way.</li>
        </ul>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-dark hover:bg-blue-darker text-white font-semibold py-2 px-4 rounded-md">
            Start Your Fitness Journey
          </button>
        </div>
      </div>
    </>
  );
};

export default BeginnerWorkoutPlanPage;
