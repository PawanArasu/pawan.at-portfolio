import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import data from '../Blog/data.json';
import { Link } from 'react-router-dom';
import EmptyList from './EmptyList';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = data.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published on {blog.createdOn}</p>
            <p className='blog-author' href='/'>@{blog.authorName}</p>
            <h1 className='blog-title'>{blog.title}</h1>
          </header>
          <img src={blog.coverImage} alt='cover' className='cover-full' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;