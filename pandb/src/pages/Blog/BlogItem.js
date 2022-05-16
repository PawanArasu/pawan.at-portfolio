import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = (props) => {
  return (
    <div className='post-wrap'>
        <img src={props.srcImg} alt="cover" className='cover-img'/>
        <h1 className='title'>{props.title}</h1>
        <p className='description'>{props.description}</p>
        <div className='name-time'>
            <h5 className='author'>@{props.author}</h5>
            <p className='time-created'>{props.time}</p>
        </div>
        <Link to={`/blogs/${props.id}`} className="link-to-post">Go To Post</Link>
    </div>
  )
}

export default BlogItem