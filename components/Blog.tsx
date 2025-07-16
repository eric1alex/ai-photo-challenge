
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering Composition: The Rule of Thirds and Beyond',
    author: 'Jane Doe',
    date: 'October 26, 2023',
    excerpt: 'Dive deep into one of the most fundamental principles of photography. We explore the rule of thirds and when it\'s okay to break it for more dynamic shots.',
    category: 'Technique',
  },
  {
    id: 2,
    title: 'A Guide to Long Exposure Photography',
    author: 'John Smith',
    date: 'October 22, 2023',
    excerpt: 'Transform moving water into silky smooth surfaces and capture stunning light trails at night. This guide covers the gear and settings you need to get started.',
    category: 'Tutorial',
  },
  {
    id: 3,
    title: 'Photo Challenge Winner Spotlight: "Urban Solitude"',
    author: 'Admin',
    date: 'October 18, 2023',
    excerpt: 'We sit down with last month\'s competition winner to discuss their winning shot, their creative process, and their journey in photography.',
    category: 'Community',
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">The PhotoChallenge Blog</h1>
      <div className="space-y-12">
        {blogPosts.map(post => (
          <div key={post.id} className="grid md:grid-cols-4 gap-6 items-start">
            <div className="md:col-span-1 text-sm text-gray-400">
              <p className="font-semibold text-teal-400">{post.category}</p>
              <p>{post.date}</p>
              <p>by {post.author}</p>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold text-white hover:text-teal-400 transition-colors cursor-pointer">{post.title}</h2>
              <p className="mt-2 text-gray-300 leading-relaxed">{post.excerpt}</p>
              <a href="#" className="mt-4 inline-block font-semibold text-teal-500 hover:text-teal-400">Read More &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
