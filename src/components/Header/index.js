import { AiOutlineLogout } from 'react-icons/ai';

import './styles.scss'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">WS Solutions</a>
      </div>

      <div className="menu">
        <div className="info-user">
          WA
        </div>

        <a href="/">
        <AiOutlineLogout size="25" color="#D80000"/>
        </a>
      </div>
    </header>
  )
}