import { useHistory, useParams } from "react-router-dom";
import Bloglist from "./blogList";
import useFetch from "./useFetch";




const BlogDetail = () => {
    const{id}=useParams();
    const { data: blog,isPending,error}=useFetch( 'http://localhost:8000/blog/'+ id)
    const history=useHistory()
    const handleDelete=()=>{
        fetch( 'http://localhost:8000/blog/'+blog.id,{
            method:"DELETE",
    }).then(
        history.push("/")
    );
    }
    return ( 
    <div className="blogDetails">
        {isPending && <div>loading....</div>}
        {error && <div>{error}</div>}
        {blog && <article>
            <h2>{blog.title}</h2>
            <h5><i>This is from the mind of </i>:{blog.author}</h5>
            <p>{blog.body}</p>

            
            </article>}
            <button onClick={handleDelete}>Trash article</button>
    </div>
     );
}
 
export default BlogDetail;