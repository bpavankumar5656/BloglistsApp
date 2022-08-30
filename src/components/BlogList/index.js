// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="bg-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blog={eachBlog} />
      ))}
    </div>
  )
}

export default BlogList
