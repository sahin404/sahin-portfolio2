import codingImage from '../../assets/coding.webp';
import './Home.css'
function Home() {
  return (
    <div className='Home'>
      <div className="details">
        <div className="full-name">Md Sahin Alam</div>
        <div className="my-title">MERN Stack Developer</div>
        <div className="article">I design and develop scalable and high-performance digital solutions to meet the needs of modern businesses.</div>
        <button className="glow-button mt-6">
          Download CV
          <span className="sparkle-circle"></span>
        </button>
      </div>
      <div className="codingimage">
        <img src={codingImage} alt="Coding" />
      </div>

    </div>
  );
}

export default Home;