import React from 'react'

import "../style/Education.css"
function Education({edu}) {
return (
<section id="education">
    <div className="card">

<h2>Education</h2>
{edu.map((item, index) => (
    <div key={index} className='Content'>
<h3>{item.degree}</h3>
<li>{item.college}</li>
<li>{item.year}</li>
</div>
))}
</div>
</section>

)
}

export default Education