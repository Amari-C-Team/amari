import heroImg from '../assets/img/hero_1.svg'

export default function HeroSection() {
    return (
        <section id="home" className="hero-section d-flex align-items-center">
                <div className="bg-shape"></div>
                <div className="container">
                    <div className="row hero-wrap">
                        <div className="col-md-6 xs-padding">
                            <div className="hero-content">
                                <h1>Amary Consultancy Services <br/>Powering Innovation with Software Solutions.</h1>
                                <p>Cultivating Innovation and Streamlining Operations: <br/>Empowering Your Business through the Transformational Force of Technology.</p>
                                <a href="#" className="default-btn">Get Started Now</a>
                            </div>
                        </div>
                        <div className="col-md-6 xs-padding">
                            <div className="hero-img">
                                <img src={heroImg} alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
