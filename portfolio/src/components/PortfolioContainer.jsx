import './portfolioContainer.css'
import NavBar from './NavBar'

const PortfolioContainer = () => {
  return (
    <div>
    <NavBar></NavBar>;
    <div class= "content-container"></div>;
    <footer>
    <a href='https://github.com/AbeerTannous'><i class="fa-brands fa-github fa-lg fa-beat"></i></a>
   <a href="https://www.linkedin.com/in/abeertannous/"><i class="fa fa-linkedin fa-lg fa-beat"></i></a> 
    {/* <i class="fa fa-twitter fa-lg"></i> */}

    </footer>
    </div>
  )
}

export default PortfolioContainer