import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - FitnessCalcAdvisor</title>
      </Head>
      <main>
        <section className="bg-blue-dark text-white py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-8">About Us</h1>
            <p className="text-lg">Who we are and what we stand for</p>
          </div>
        </section>
        <section className="container mx-auto px-6 my-10 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <Image
                src="/images/aboutus-bg.webp"
                alt="About Us Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg mb-6">
                FitnessCalcAdvisor is a dedicated platform for individuals seeking accurate fitness calculations and personalized workout plans to achieve their health and fitness goals. We believe in empowering individuals with the knowledge and tools they need to take control of their fitness journey.
              </p>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg mb-6">
                Our mission is to provide a comprehensive and user-friendly platform that enables individuals of all fitness levels to make informed decisions about their health. We strive to deliver expert fitness calculations, personalized workout plans, and ongoing support to help our users achieve long-term success.
              </p>
              <h2 className="text-3xl font-bold mb-4">Get Started</h2>
              <p className="text-lg mb-6">
                Ready to take the next step towards achieving your fitness goals? Calculate your fitness and start your personalized workout plan today.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="fitness-calculators" className="bg-blue-light hover:bg-blue-dark text-white px-6 py-3 rounded-lg font-medium text-lg">
                  Calculate Your Fitness
                </Link>
                <Link href="workout-plans" className="bg-blue-light hover:bg-blue-dark text-white px-6 py-3 rounded-lg font-medium text-lg">
                  Start Your Workout
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
