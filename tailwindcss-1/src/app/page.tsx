import Container from "@/container/container";
import Navbar from "@/container/Navbar";
import Hero from "@/container/Hero";
export default function page() {
  return (
    <div className="layout">
      <Container>
        <div className="left-line"></div>
        <div className="right-line"></div>
        <Navbar />
        <Hero />
      </Container>
      <div className="hero-image-container">
        <div className="horizontal-line"></div>
        <img  className="hero-image"
          src="hero-ui-v5.webp"></img>
      </div>
    </div>
  )
}
