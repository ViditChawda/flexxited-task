import React from 'react'
import '../styles/filters.css'

function Filters({ mySet, handleFilter, tag }) {
    const setToArray = Array.from(mySet);

    return (
        <div>
            <div>
                <h1> Filtered By: Genre </h1>
            </div>
            <div className='genresWrapper'>
                {setToArray.map((element, index) => (
                    <div className='genreContainer'>
                        <p onClick={() => {
                            handleFilter(element)
                        }} className={`genres ${tag.includes(element) ? 'active' : ''}`} key={index}>{element}</p>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Filters