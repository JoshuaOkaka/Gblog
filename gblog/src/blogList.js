import { Link } from "react-router-dom";

const Bloglist = ({blogs , title }) => {
    // const blogs =props.blogs;
    // const title =props.title;
    return (  
        <div className="blog-list">
              <h2>{title}</h2>
             {blogs.map(blog=>(   
                <div className="blog-preview " key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>

                 
                </div>
                 ))}  
        </div>
    );
}
 
export default Bloglist;

//i like to call this a reuseable logic component.

 