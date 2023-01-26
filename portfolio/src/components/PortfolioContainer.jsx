import './portfolioContainer.css'
import NavBar from './NavBar'
import About from './pages/About/About'
import ProjectList from './pages/ProjectList/ProjectList'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'
import { useState } from 'react'

const PortfolioContainer = () => {
  const [currentPage,setCurrentPage]=useState('About')
  const renderPage=()=>{
    if (currentPage==='About'){
      return <About></About>;
    }
    if (currentPage==='ProjectList'){
      return <ProjectList></ProjectList>;
    }
    if (currentPage==='Contact'){
      return <Contact></Contact>;
    }
    return <Resume></Resume>;
  }
  const handelPageChange=(page)=>setCurrentPage(page);
  return (
    <div>
    <NavBar currentPage={currentPage} handelPageChange={handelPageChange}></NavBar>;
    <div class= "container-sm">
      {renderPage()}
      </div>;
    <footer>
    <a href='https://github.com/AbeerTannous' target="_blank"><i class="fa-brands fa-github fa-lg fa-beat"></i></a>
    <a href="https://www.linkedin.com/in/abeertannous/" target="_blank"><i class="fa fa-linkedin fa-lg fa-beat"></i></a> 
    {/* <i class="fa fa-twitter fa-lg"></i> */}

    </footer>
    </div>
  )
}

export default PortfolioContainer