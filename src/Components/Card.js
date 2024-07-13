import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
// import {setLikedCourses} from "./Cards"

const Card = (props) => {

  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const clickHandler = () => {
    // logic
    if(likedCourses.includes(course.id)) {
      // already liked (phle se like hua pada h)
      setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id) ) );
      toast.warning("Liked Removed")
    }
    else {
      // pehele se like nhi kiya h ye course 
      // insert krna h ye course liked courses me
      if(likedCourses === 0) {
        setLikedCourses([course.id]);
      }
      else {
        // non empty phle se
        setLikedCourses( (prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully")
    }

  }
  return (
    <div className='w-[300px] bg-opacity-80 bg-bgDark rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt={course.title}  />
      
      <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] 
      grid place-items-center'>
        <button onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ?
             (<FcLike fontSize="1.75rem"/>) : 
             (<FcLikePlaceholder fontSize="1.75rem" />) 
            // likedCourses ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
          }
        </button>
      </div>
    </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg  leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            props.course.description.length > 100 ? 
            (props.course.description.substring(0,100) + "..." ) : 
            (props.course.description) 
          }
        </p>
      </div>

    </div>
  )
}

export default Card
