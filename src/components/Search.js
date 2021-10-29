import React from 'react'
import magnify from '../magnifier.png'

export default function Search({ handleSearchIcon, searchIcon, search, setSearch }) {
    return (
        <div className='search-info'>
            {searchIcon ?
                <input placeholder='Search Cars...' className='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                :
                <img className='search-icon' onClick={handleSearchIcon} src={magnify} alt='magnifying glass' />
            }
        </div>
    )
}