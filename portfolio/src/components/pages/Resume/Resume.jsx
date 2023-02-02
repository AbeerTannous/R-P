import './resume.css';
import resume from '../Resume/resume.pdf';


const Resume = () => {
  return (
    <div className='resume-container'>
      <i class="fa-solid fa-badge-check"></i>
      <h2 className='title'>My Skills</h2>
      <h4 className='resume-dawnload'><span>Download My</span> <a href={resume} download>Resume <i class="fa-solid fa-file-arrow-down"></i></a></h4>
      <div className="skills-container">
        <div className="frontend-backend-container">
          <h5>Front-End Proficiencies</h5>
          <ul>
            <li><i class="fa-solid fa-square-check"></i> HTML</li>
            <li><i class="fa-solid fa-square-check"></i> CSS</li>
            <li><i class="fa-solid fa-square-check"></i> JavaScript</li>
            <li><i class="fa-solid fa-square-check"></i> Bootstrap</li>
            <li><i class="fa-solid fa-square-check"></i> Responsive Design</li>
            <li><i class="fa-solid fa-square-check"></i> React</li> 
         </ul>
        </div>
      <div className="frontend-backend-container">
        <h5>Back-End Proficiencies</h5>
          <ul>
            <li><i class="fa-solid fa-square-check"></i> Node</li>
            <li><i class="fa-solid fa-square-check"></i> Express</li>
            <li><i class="fa-solid fa-square-check"></i> API's</li>
            <li><i class="fa-solid fa-square-check"></i> MySql, sequalize</li>
            <li><i class="fa-solid fa-square-check"></i> MongoDB, Mangoose</li>
            <li><i class="fa-solid fa-square-check"></i> REST</li>
            <li><i class="fa-solid fa-square-check"></i> GraphQL</li> 
          </ul>
       </div>

      </div>
   </div>
  )
}

export default Resume