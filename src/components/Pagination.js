import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <nav className='bottom-nav'>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button className="page-link" href="#" onClick={() => paginate(number)}></button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination