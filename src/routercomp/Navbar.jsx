import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = useState(1);

  const activeTab = (id) => {
    setActive(id);
  }
  return (
    <>
    <nav className='navbar text-white mx-5 ' >
      <Link to='/' onClick={() => activeTab(1)} className={active === 1 ? 'tab' : 'nav-link'}>HOME </Link>
      <Link to='/quizeme' onClick={() => activeTab(2)} className={active === 2 ? 'tab' : 'nav-link'}>QUIZ ME <span className='line'></span></Link>
      <Link to='/myjarvis' onClick={() => activeTab(3)} className={active === 3 ? 'tab' : 'nav-link'}>MY JARVIS</Link>
      <Link to='/studymaterial' onClick={() => activeTab(4)} className={active === 4 ? 'tab' : 'nav-link'}>STUDY MATERIAL</Link>
      <Link to='/leaderboard' onClick={() => activeTab(5)} className={active === 5 ? 'tab' : 'nav-link'}>LEADERBOARD</Link>
      <Link to='/abcd' className='nav-link' > <span className='line'></span>
        {/* <div> */}
          {/* <div> */}
            {/* <span classNameName='profile-abcd rounded-5'><i className="fa-solid fa-user ps-1 pe-1 pt-1 pb-2"></i>
            </span>
            <button classNameName='btn abcd-dropdown text-white'>Abcd <i className="fa-solid fa-caret-down"></i></button> */}

<li className="nav-item dropdown  list-unstyled">
                <a className="nav-link dropdown-toggle col coustomusertxt" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user p-2 rounded-circle coustomuserbg me-2 text-black"></i>
                  Abcd
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
          {/* </div> */}
        {/* </div> */}
      </Link>
      <br />
    </nav>
    
          {/* <button classNameName='btn bg-transparent text-light ms-auto'>Droplist</button> */}

          <div className="dropdown ">
        <button className="float-end btn text-white border-1 border-white dropdown-toggle me-md-5 "  type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Droplist
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;