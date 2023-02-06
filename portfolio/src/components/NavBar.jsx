import './navBar.css'

const NavBar = ({currentPage,handelPageChange}) => {
  return (
    <div className='nav-bar-onFullscreen'>
      <h3 >Hello I Am Abeer!</h3>
    <ul class="nav justify-content-center">
    
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#About" onClick={()=>handelPageChange('About')} className={currentPage==='About'?'active':'nav-link'}>About Me</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#ProjectList" onClick={()=>handelPageChange('ProjectList')}className={currentPage==='ProjectList'?'active':'nav-link'}>Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Contact" onClick={()=>handelPageChange('Contact')} className={currentPage==='Contact'?'active':'nav-link'}>Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Resume"  onClick={()=>handelPageChange('Resume')} className={currentPage==='Resume'?'active':'nav-link'}>Resume</a>
      </li>
    </ul>
    </div>
  )
}

export default NavBar
