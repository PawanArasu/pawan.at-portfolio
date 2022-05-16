import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({data}) => {
  return (
    <div>{data.map(item => {
        return <BlogItem srcImg={item.coverImage} title={item.title} description={item.description} author={item.authorName} time={item.createdOn} id={item.id}/>
    })}</div>
  )
}

export default BlogList