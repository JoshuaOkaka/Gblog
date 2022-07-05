
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
const [title,setTitle]=useState('');
const [body,setBody]=useState('');
const [author,setAuthor]=useState('FrontEndApe');
const [isPending ,setisPending]=useState(false)
const history=useHistory();

/**this a function that prevent how forms act when submit button is clicked
 *  by saving the imput data to json-server*/
const handleSubmit=(e)=>{
    //this prevent the form default attitude
    e.preventDefault();
    // this code is for form validatiion
    let validate =document.forms["form"]["fField"].value
    if(validate==null|| validate==""){
        document.getElementById("emptyForm").innerHTML="You have not written any article yet"
        // alert("You have not written any article yet")
        return false

    }
    /**this is an object that save input data 
    as values to the following specified keys.*/
    const blogObject ={title, body, author};
    fetch('http://localhost:8000/blog',{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(blogObject)
    
    }).then(()=>{
        setisPending(false)
        console.log("a new blog is added")
        history.push("/");
    }
    )

 }



    return (
        <div className='postDiv'>
            <h1>create a new blog </h1>
            <form onSubmit={handleSubmit} name="form">
                {/* input for creating the blog title */}
                <label>What is the title </label>
                <input type='text'
                    name="fField"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}   
                ></input>

                {/* input for creating blog content */}
                <label>Create blog content</label>
                <textarea type='text'
                 name="fField"
                 value={body}
                 onChange={(e)=>{setBody(e.target.value)}} 
                
                ></textarea>

                {/* input for specifing the blog author */}
                <label>Which ape is writting ?</label>
                <select type='text' 
                       value={author}
                       onChange={(e)=>{setAuthor('kingAPE')}}  
                       name="fField"
                >

                    <option value=''>FrontEndApe</option>
                    <option value=''>kingAPE</option>
                </select>
                <br/>
              <h2 id="emptyForm"></h2>
            {!isPending && <button>Add blog</button>}
            {isPending && <button>adding new...</button>}


            </form>
            <hr />
            <div className="viewBlog">
                 <h1>{title}</h1>
                 <h6><i>written by</i>:{author}</h6>
                 <hr></hr>
                 <article>{body}</article>
                
            </div>
        </div>
      );
}
 
export default Create;
