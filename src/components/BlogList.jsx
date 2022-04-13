const BlogList = ({list, title, handleDelete}) => {       //destructuring the props

    // const list = props.list              
    // const title = props.title
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {list.map((lists) => (
                <div className="blog-preview" key={lists.id}>
                    <h2>{lists.name}</h2>
                    <p>{lists.title}</p>
                    <p>{lists.blog}</p>
                    <button className="button" onClick={() => handleDelete(lists.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;