
import myImg from "../assets/myimg.jpeg";
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hello, I'm <span className="name">Arthika</span> 😊</h1>
        <p>CSE Student | Learning MERNStack development</p>
      </div>

      <div className="hero-right">
        <img 
          src={myImg}
          alt="Arthika" 
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default Hero;
