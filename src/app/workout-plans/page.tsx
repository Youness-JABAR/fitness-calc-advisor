import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Workout Plans | FitnessCalcAdvisor',
  description: 'Discover personalized workout plans tailored to your goals. Whether you\'re a beginner or seeking weight loss, our expertly crafted plans will help you achieve results.',
}

const WorkoutPlansPage = () => {
  return (
    <>
      <Head>
        <title>Workout Plans | FitnessCalcAdvisor</title>
        <meta name="description" content="Discover personalized workout plans tailored to your goals. Whether you're a beginner or seeking weight loss, our expertly crafted plans will help you achieve results." />
        <link rel="canonical" href="https://www.fitnesscalcadvisor.com/workout-plans" />
      </Head>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4  text-center text-blue-light">Workout Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-6">
          <div className="bg-blue-dark text-white p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Beginner Workout Plan</h2>
            <p className="text-gray-300 mb-4">Kickstart your fitness journey with this beginner workout plan designed for all fitness levels.</p>
            <Link href="/workout-plans/beginner" className="text-blue-light hover:underline">View Beginner Workout Plan
            </Link>
          </div>

          <div className="bg-blue-dark text-white p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Weight Loss Workout Plan</h2>
            <p className="text-gray-300 mb-4">Achieve your weight loss goals with this specialized workout plan focused on burning calories and shedding pounds.</p>
            <Link href="/workout-plans/weight-loss" className="text-blue-light hover:underline">View Weight Loss Workout Plan
            </Link>
          </div>

          {/* Add more workout plan boxes as needed */}

        </div>
      </div>
      <div className='pt-40'></div>
    </>
  );
};

export default WorkoutPlansPage;
