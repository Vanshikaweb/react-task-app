import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h2 className='name'>VANSHIKA SHARMA</h2>
      <h4>I'm in my third years of studies towards a bachelor's in Electronics and Instrumentation engineering. I'm committed to learning and
self-development so that I can consistently achieve better results. I have been able to deliver a consistent approach throughout a
challenging period of development. I can quickly embrace new ideas and methods.</h4>
      <Link to='/' className='btn-goback'>Go Back</Link>
    </div>
  )
}

export default About