import './portfolioContainer.css'
import NavBar from './NavBar'
import About from './pages/About/About'
import ProjectList from './pages/ProjectList/ProjectList'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'
import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


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
    <div className='none-on-mediaquery'>
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
   
  
   {/* display only on small devices  */}


<Accordion className='display-none-on-big-devices'>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                        About Me
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <About></About>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Portfolio
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ProjectList></ProjectList>
                </AccordionItemPanel>
            </AccordionItem>
        
        <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Contact Me
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Contact></Contact>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Rusume
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Resume></Resume>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>

        </div>
  )
}

export default PortfolioContainer