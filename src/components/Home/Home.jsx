import codingImage from '../../assets/coding.webp';
import './Home.css'
function Home() {
  return (
    // Personal information
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center my-16">
    <div className="lg:col-span-2 md:col-span-1">
      <div className="full-name text-xl font-bold"><a href="/">Md. Sahin Alam</a></div>
      <div className="my-title text-lg font-medium">Full Stack Developer</div>
      <div className="article text-gray-700 mt-2">
        A Full Stack Developer and problem solver with over 900 challenges solved across various online judges. 
        I build full stack web applications using React, Next.js, and Node.js, focusing on writing efficient and 
        maintainable code. I’m passionate about creating clean, scalable solutions and continuously learning new 
        technologies to tackle real-world problems.
      </div>
    </div>
  
    <div className="lg:col-span-1 md:col-span-1 flex justify-center mt-6 md:mt-0">
      <div className="image-container">
        <div className="image-wrapper">
          <img src={codingImage} alt="Coding" className="coding-image" />
          <div className="image-overlay"></div>
          <div className="floating-elements">
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>
            <div className="floating-dot dot-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Home;