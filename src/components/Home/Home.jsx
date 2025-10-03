import codingImage from '../../assets/coding.webp';
import './Home.css'
import CV from '../../assets/CV.pdf'
function Home() {
  return (
    // Personal information
  
    <div className=' grid grid-cols-3 gap-5 items-center my-16'>
      <div className="col-span-2">
        <div className="full-name">Md Sahin Alam</div>
        <div className="my-title">Full Stack Developer</div>
        <div className="article">A Full Stack Developer and problem solver with over 900 challanges solved across various online judges. I build full stack web applications using React, Next.js, and Node.js, focusing on writing efficient and maintainable code. I’m passionate about creating clean, scalable solutions and continuously learning new technologies to tackle real-world problems.</div>
        
      </div>
      <div className="col-span-1">
        <img src={codingImage} alt="Coding" />
      </div>

    </div>
  );
}

export default Home;