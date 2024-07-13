// import React, { useState } from 'react';
// import Card from './Card';

// const Cards = (props) => {
//   let courses = props.courses;
//   let category = props.category;
//   const [likedCourses, setLikedCourses] = useState([]);


//   function getCourses() {
    
//     if (category === "All") {

//       let allCourses = [];
//     Object.values(courses).forEach(array => {
//       array.forEach(courseData => {
//         allCourses.push(courseData);
//       });
//     });
//     return allCourses;
//     }
//     else {
//       // return only data array of specific category 
//       return courses[category];
//     }
//   }

//   return (
//     <div className='flex flex-wrap justify-center gap-4 mb-4'>
//       {
//         getCourses().map((course) => (
//           <Card key={course.id} course={course} 
//           likedCourses={likedCourses}
//           setLikedCourses={setLikedCourses}/>
//         ))
//       }
//     </div>
//   );
// }

// export default Cards;









import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  const { courses = {}, category = 'All' } = props;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === 'All') {
      let allCourses = [];
      Object.values(courses).forEach(array => {
        if (Array.isArray(array)) {
          array.forEach(courseData => {
            allCourses.push(courseData);
          });
        }
      });
      return allCourses;
    } else {
      return Array.isArray(courses[category]) ? courses[category] : [];
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map(course => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;

