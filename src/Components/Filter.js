import React from 'react'

const Filter = (props) => {
  
    let filterData = props.filterData; 
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHander(title) {
      setCategory(title)
    }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center' >
        {filterData.map( (data) => {
          return (
                <button
                className={`text-lg px-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 ranstition-all duration-300
                  ${
                    category === data.title
                      ? "bg-opacity-60 border-white border-2"
                      : "bg-opacity-40 border-transparent"
                  }`}
                onClick={() => filterHander(data.title)}
                key={data.id}> {data.title} </button>
          )
            })
          }
    </div>
  )
}

export default Filter
