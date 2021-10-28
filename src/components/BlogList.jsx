const BlogList = (props) => {
    
    const list = props.list
    
    return (
        <div className="blog-list">
            {list.map((lists) => (
                <div className="blog-preview" key={lists.id}>
                    <h2>Name : {lists.name}</h2>
                    <p>Email : {lists.email}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;