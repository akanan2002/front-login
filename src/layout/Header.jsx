import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: 'เข้าสู่ระบบ' },
  { to: '/register', text: 'ลงทะเบียน' },
  { to: '/', text: 'Home' },
]

const userNav = [
  { to: '/', text: 'Home' },
  { to: '/new', text: 'New Todo' },
]

const navnbars = [
  { to: '/', text: 'Home' },
  { to: '/new', text: 'New Todo' },
]

export default function Header() {
  const { user, logout } = useAuth()
  const finalNav = user?.id ? userNav : guestNav 

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }



  return (
    
    <div className='bg-white'>
      <div className="navbar bg-gray-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">LOGO {user?.id ? user.username : ''}</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {finalNav.map(el => (
              <li key={el.to} >
                <Link to={el.to}>{el.text}</Link>
              </li>
            ))}
            {user?.id && (
              <li>
                <Link to='#' onClick={hdlLogout}>Logout</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );

}
