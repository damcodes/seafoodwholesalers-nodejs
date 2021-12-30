import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user }) => {
  const [ activeItem, setActiveItem ] = useState(null)

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
  }

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }
  
  return(
    <Menu pointing widths={10}>
      {(user && !isEmpty(user) && user.role === 'customer') || !localStorage.getItem('auth_key') ? <Menu.Item
        as={NavLink} to='/home'
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      :
      null
      }


      {/* {(user && !isEmpty(user) && user.role === 'customer') || !localStorage.getItem('auth_key') ? <Menu.Item
        as={NavLink} to='/about'
        name='about'
        active={activeItem === 'about'}
        onClick={handleItemClick}
      />
      : 
      null
      } */}

      {user && !isEmpty(user) ? <Menu.Item 
          name='profile'
          as={NavLink} to='/profile'
          active={activeItem === 'profile'}
          onClick={handleItemClick}/>
      : 
      null
      }

      {user && !isEmpty(user) ? <Menu.Item
        name='new order'
        as={NavLink} to='/new-order'
        active={activeItem === 'new order'}
        onClick={handleItemClick}/> 
      :
      null 
      }

      {user && !isEmpty(user) && user.admin ?
        <Menu.Item
              name={user ? 'inventory' : null}
              as={NavLink} to={ user ? '/inventory' : '/login' }
              active={activeItem === 'login'}
              onClick={handleItemClick}
         /> 
      : 
      null
      }

      {user && !isEmpty(user) && (user.role === 'transportation' || user.admin) ? 
        <Menu.Item
          name={user ? 'routes' : null }
          as={NavLink} to='/routes'
          active={activeItem === 'routes'}
          onClick={handleItemClick} 
          /> 
      : 
      null 
      }

      {user && !isEmpty(user) && user.admin ? 
        <Menu.Item
          name={user ? 'customers':null }
          as={NavLink} to="/companies"
          active={activeItem === 'companies'}
          onClick={handleItemClick}
          /> 
      : 
      null
      }

      <Menu.Item
        name={user && !isEmpty(user) ? 'logout' : 'login'}
        as={NavLink} to={ user && !isEmpty(user) ? '/logout' : '/login' }
        active={activeItem === 'login'}
        onClick={handleItemClick}
      />
    </Menu>
  )
}

export default NavBar