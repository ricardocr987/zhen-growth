require('./Landing.css');

export default function Landing() {
    return(
        <div className="landing-container">
            <div className="landing-background">
                <video className="video-background" autoPlay loop muted>
                    <source src={'/video.mp4'} type="video/mp4" />
                </video>            
            </div>
            <div className="landing-content">
                <h1 className="landing-title">
                    ZHEN GROWTH
                </h1>
                <p className="landing-subtitle">
                    We are here to grow
                </p>
            </div>
            <h1>Landing</h1>
        </div>
    )
}