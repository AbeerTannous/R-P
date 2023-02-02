import './projectList.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';


const ProjectList = () => { 

const [isModalOpen,setIsModalOpen]= useState(false);

const [projects] = useState([
  {
    name: 'Buddget Tracker',
    live: 'https://pacific-coast-49689.herokuapp.com',
    github:'https://github.com/AbeerTannous/Budget-Tracker',
    description:
      'This is a Progrisive web application (PWA) for tracking Budget , where users can track their budget even when they dont have network access',
      screenshot:require ('../../../images/Budget-Tracker.png')
  },
  {
    name: 'Tasklead',
    live: 'https://tasklead.herokuapp.com/',
    github:'https://github.com/raealejandrino/Tasklead-repo',
    description: 'Full-Stack project management application using Model View Controller semantics with Handlebars.js, Sequelize Object Relational Mapper, Bcrypt, Sass, and more.',
    screenshot:require('../../../images/tasklead.png') 
  },
  {
    name: 'MyInventory',
    live: 'https://glacial-beach-24640.herokuapp.com/',
    github:'https://github.com/AbeerTannous/My-Inventory',
    description: 'This is a sample of an Inventory Tracking System web application , the project uses Object-Relational-Mapping(ORM) to communicate with the database and Model-View-Controller(MVC) that dynamically generate user interface , the database follow the CRUD functionality and hooked using REST API architectural patterns.',
    screenshot:require('../../../images/myInventory.png') 
  },
  {
    name: 'MyPet',
    live: 'https://jessvarghese.github.io/the_pet_project/',
    github:'https://github.com/JessVarghese/the_pet_project',
    description: 'MyPet is an application that allows a user to easily find a Dog or Cat to potentially adopt.',
   screenshot: require('../../../images/the-pet-project.png') 
  },
  {
    name: 'Book Search',
    live: 'https://fierce-caverns-88786.herokuapp.com/',
    github:'https://github.com/AbeerTannous/Book-Saerch-Engine',
    description: 'Google Books API search engine built in MERN Stack. users can sign up and login their account to save their favorite books.',
   screenshot:require ('../../../images/book-search.png')
  },
  {
    name: 'Social Network API',
    live: 'https://github.com/AbeerTannous/Social-Network-API',
    github:'https://github.com/AbeerTannous/Social-Network-API',
    description: 'An API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. This application uses Express, Node, MongoDB and Mongoose.',
   screenshot:require ('../../../images/hire-social-media-api-developers.jpg')
  },
  {
    name: 'Recipe Rendezvous',
    live: 'https://github.com/AbeerTannous/Recipe-Rendezvous',
    github:'https://github.com/AbeerTannous/Recipe-Rendezvous',
    description: 'Recipe API search engine built in MERN Stack. users can sign up and login their account to save their favorite recipes',
   screenshot:require ('../../../images/recipe.png')
  },
  {
    name: 'Photo Port',
    live: 'https://abeertannous.github.io/React-Project/',
    github:'https://github.com/AbeerTannous/React-Project',
    description: 'A photographer single page portfolio ,done with React',
   screenshot:require ('../../../images/photo-port.png')
  },
 
])
 const [currentProject,setCurrentProject]=useState();
const toggleModal=(project,i)=>{
  setCurrentProject({...project,index :i})
  setIsModalOpen(!isModalOpen);
}


  return (
<div>
<h2 className='title'>My Portfolio</h2>
<div className='portfolio-container'>
  {isModalOpen && (<Modal currentProject={currentProject} onClose={toggleModal}/>)}
{projects.map((project,i)=>(
  <article className='portfolio-item'>
    <div onClick={() => toggleModal(project, i)}  >
      <img className='portfolio-item-img' src={project.screenshot} alt={project.name} />
    </div>
    <h5>{project.name}</h5>
    <a href={project.github} target="_blank" className='hover'><i class="fa-brands fa-github fa-2xl "></i></a>
    <a href={project.live} target="_blank" className='hover'><i class="fa-solid fa-link fa-2xl"></i></a>
  </article>
  ))}
</div>
</div>
    )}


export default ProjectList
    

  