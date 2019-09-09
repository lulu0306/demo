import React from 'react'
import {Link} from 'react-router-dom'
import './PageNav.css'

class PageNav extends React.Component{
    render(){
        return(
         <nav className='page-nav'>
             <ul>
                 <li>
                    <Link to='/'>Home</Link>
                 </li>
                 <li>
                    <Link to='/contact/'>Contact</Link>
                 </li>
             </ul>
         </nav>
        )
    }
}

export default PageNav