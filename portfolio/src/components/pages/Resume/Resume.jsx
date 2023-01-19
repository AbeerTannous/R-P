import './resume.css';
import resume from '../Resume/resume.pdf';


const Resume = () => {
  return (
    <div>Resume
      <a href={resume} download>Downloud my Resume</a>
    </div>
  )
}

export default Resume