import Head from 'next/head';
import BlogList from '@/components/BlogList';

const Blogs = () => {
  return (
    <>
      <Head>
        <title>All Blogs - FitnessCalcAdvisor</title>
      </Head>
      <main className="container mx-auto px-6 py-10">
        <BlogList />
      </main>
      <div className='pt-40'></div>

    </>
  );
};

export default Blogs;
