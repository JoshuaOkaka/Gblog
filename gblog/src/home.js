//  import {useEffect, useState } from "react"; //imported useEffect useState.
import Bloglist from "./blogList";
import useFetch from "./useFetch";



const Home = () => {
  const {isPending,data,error}=useFetch( 'http://localhost:8000/blog')



    return(
     <div className="home">
         {/* we passed  props for blogs info,title*/}
       
       {isPending && <div>loading....</div>}
       {error && <div>{error}</div>}
        {data &&    <Bloglist blogs={data} title='Posts.' />}

     </div>
    ); 
}

 
 
export default Home ; 
      