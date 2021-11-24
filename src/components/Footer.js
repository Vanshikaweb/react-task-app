
   
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021 Built and Designed by Vanshika</p>
      <Link to='/about'className='btn'>About</Link>
    </footer>
  )
}

export default Footer