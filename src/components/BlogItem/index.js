import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog

  return (
    <li className="blogItem-container">
      <div className="list-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <div className="description">
        <p className="paragraph1">{description}</p>
      </div>
    </li>
  )
}

export default BlogItem
