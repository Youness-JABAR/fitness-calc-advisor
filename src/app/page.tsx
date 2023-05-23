import Head from 'next/head';
import styles from '@/styles/styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <main>
         <section className={styles.hero}>
          <div className=" text-center  flex flex-col items-center justify-center h-screen ">
            <h1 className={styles['hero-title']}>Achieve Your Fitness Goals with Fitness Calc Advisor</h1>
            <p className={styles['hero-description']}>Get accurate fitness calculations and personalized workout plans to achieve your health and fitness goals. Sign up now!</p>
            <div className='grid sm:grid-cols-2 gap-2'>
              <Link href="fitness-calculators" className={styles['hero-button']}>Calculate Your Fitness</Link>
              <Link href="workout-plans" className={styles['hero-button']}>Start Your Workout</Link>
            </div>
          </div>
        </section>
        <section className="`${styles.intro}` container px-6 my-10 text-center">
          <div className="`${styles['content-wrapper']}` grid sm:grid-cols-2 gap-4">
            <div className={styles['image-wrapper']} >
              <img src="/images/Build-your-body-now.webp" alt="Build your body now" />
            </div>
            <div className={styles['text-wrapper']}>
              <h2 className={styles['hero-title']} >Take control of your fitness journey with FitnessCalcAdvisor.</h2>
              <p className={styles.paragraph}>
                Whether you're a beginner looking to kickstart your health or a weight loss seeker on a mission, our platform is here to support you every step of the way. By making use of our personalized workout plans and expert calculations, you'll be able to track your progress effectively and stay on top of your fitness goals. Consistency and focus are key to achieving long-lasting results, and we're here to provide the guidance and motivation you need.
              </p>
              <div className='grid sm:grid-cols-2 gap-2'>
                <Link href="fitness-calculators" className={styles['hero-button']}>Calculate Your Fitness</Link>
                <Link href="workout-plans" className={styles['hero-button']}>Start Your Workout</Link>
              </div>
            </div>
            
          </div>

        </section>
      </main> 
    </>
  );
};

export default Home;
