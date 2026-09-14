import { FaHtml5, FaCss3Alt, FaJs, FaReact  } from 'react-icons/fa';

const skills = [
  {
    icon: <FaHtml5 size={36} color="#fff" />,
    name: 'HTML',
    color: '#e34c26',
    description: 'Building semantic and accessible web structures.',
  },
  {
    icon: <FaCss3Alt size={36} color="#fff" />,
    name: 'CSS',
    color: '#264de4',
    description: 'Creating responsive and modern user interfaces.',
  },
  {
    icon: <FaJs size={32} color="#1c232f" />,
    name: 'JavaScript',
    color: '#f0db4f',
    description: 'Adding functionality and interactivity to websites.',
  },
  {
    icon: <FaReact size={36} color="#fff" />,
    name: 'React',
    color: '#61dafb',
    description: 'Building reusable and dynamic user interfaces.',
  },
];



function Skills() {
  return (
    <section className="skill-sect" id='skills'>
      <div className="skill-heading">
        <h4>Skills</h4>
        <h2>What I work with</h2>
      </div>
    
      <div className="skill-items">
        {skills.map((skill) => (
          <div
            className='skill-item'
            key={skill.name}
            style={{borderTop: `3px solid ${skill.color}`}}
          >
            <div
              className='skill-icon'
              style={{backgroundColor: skill.color}}
            >
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills