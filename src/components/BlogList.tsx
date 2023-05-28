"use client"; // This is a client component 👈🏽
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  slug: string;
}

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: 'Getting Started with Fitness',
      slug: 'getting-started-with-fitness',
    },
    {
      id: 2,
      title: '10 Tips for a Healthy Lifestyle',
      slug: '10-tips-for-a-healthy-lifestyle',
    },
    // Add more blogs as needed
  ]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog Listing</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search blogs"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        />
      </div>
      <ul className="space-y-4">
        {filteredBlogs.map((blog) => (
          <li key={blog.id} className="bg-white p-4 rounded-md shadow-md">
            <Link href={`/blogs/${blog.slug}`} className="text-blue-500 hover:text-blue-700">
                {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
