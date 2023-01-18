import './navBar.css'

const NavBar = () => {
  return (
    <div>
      <h3 >Hello I Am Abeer!</h3>
    <ul class="nav justify-content-center">
    
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">About Me</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" >Resume</a>
      </li>
    </ul>
    </div>
  )
}

export default NavBar
