import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
<Link href="/items">
  <a>items
sell
signup
orders
me</a>
</Link>
<Link href="/sell">
  <a>
</Link>
<Link href="/signup">
  <a>
</Link>
<Link href="/orders">
  <a>
</Link>
<Link href="/me">
  <a>
</Link>
  </NavStyles>
);

export default Nav;
