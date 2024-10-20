import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        }
    ]

    return (
        <header className='py-3 shadow bg-gray-500' >
            <Container >
                <nav className='flex'>
                    // 1st part if header
                    <div className=' mr-4'> // for logo
                        <Link to='/'>
                        // link does not reload page , it prevents the default behaviour of anchor tag which reloads the page.
                            <Logo width='70px' />
                        </Link>
                    </div>
                    // Header divided into 2 parts , 1st  part contains logout button and 2nd part contains navItems

                    // 2nd  part of header

                    <ul className='flex ml-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={() => navigate(item.slug)}
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    >
                                        {item.name}</button>
                                </li> // use key there only where the html element is repeated
                            ) : null
                            // if active then do the 1sy setting else 2nd 

                        )}
                        {authStatus && ( //  if authStatus is true then show logout button else show login/signup button

                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header