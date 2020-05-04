import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href='/items'></Link>
    <Link href='/sell'></Link>
    <Link href='/signup'></Link>
    <Link href='/orders'></Link>
    <Link href='/me'></Link>
  </NavStyles>
);

export default Nav;
