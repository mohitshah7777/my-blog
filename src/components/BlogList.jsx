const BlogList = ({list, title}) => {       //destructuring the props

    // const list = props.list              
    // const title = props.title
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
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