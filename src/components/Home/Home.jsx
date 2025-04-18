import codingImage from '../../assets/coding.webp';
import './Home.css'
import CV from '../../assets/CV.pdf'
function Home() {
  return (
    // Personal information
  
    <div className='Home'>
      <div className="details">
        <div className="full-name">Md Sahin Alam</div>
        <div className="my-title">Full Stack Developer</div>
        <div className="article">I design and develop scalable and high-performance digital solutions to meet the needs of modern businesses.</div>
        <button className="glow-button mt-6">
          <a href={CV} target="_blank" className="preview-link">
            Download CV
            <span className="sparkle-circle"></span>
          </a>
        </button>
      </div>
      <div className="codingimage">
        <img src={codingImage} alt="Coding" />
      </div>

    </div>
  );
}

export default Home;