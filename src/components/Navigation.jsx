import React from 'react'
import "../style/Navigation.css"
function Navigation({ data }) {
    return (
        <div className="navBar">
            <div className="logo ">
                <img src="src/assets/react.svg" alt="" />
            </div>
            <ul className='w-50'>
                {data.map((nav, index) => (
                    // key React ko lagi ho, yo chai each list item lai uniquely identify garna use huncha.
                    // Component re-render huda kun item add/remove/update bhayo bhanera React lai track garna help garcha.
                    <li key={index}><a href={`#${nav.toLowerCase()}`}>{nav}</a></li>
                ))
                }

            </ul>


        </div>
    )
}

export default Navigation