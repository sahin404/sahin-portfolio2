import codingImage from '../../assets/coding.webp';
import './Home.css'
function Home() {
  return (
    <div className='Home'>
      <div className="details">
        <div className="full-name">Md Sahin Alam</div>
        <div className="my-title">MERN Stack Developer</div>
        <div className="article">I am a versatile MERN Stack Developer with a passion for both web development and competitive programming. My expertise lies in React, Tailwind CSS, and JavaScript, crafting seamless and user-friendly interfaces. On the backend, I am proficient in Node.js, Express.js, and MongoDB, ensuring scalable and efficient solutions.</div>
      </div>
      <div className="codingimage">
        <img src={codingImage} alt="Coding" />
      </div>
    </div>
  );
}

export default Home;