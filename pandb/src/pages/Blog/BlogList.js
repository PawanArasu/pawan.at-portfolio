import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({data}) => {
  return (
    <div className='container-bloglist'>{data.map(item => {
        return <BlogItem key={item.id} srcImg={item.coverImage} title={item.title} description={item.description} author={item.authorName} time={item.createdOn} id={item.id}/>
    })}</div>
  )
}

export default BlogList