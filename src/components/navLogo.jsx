import "../styles/hero.css";

const NavLogo = () => {
  return (
    <div className="video-div">
      <video autoPlay muted playsInline>
        <source src="/cloudexHeroVideo(black).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default NavLogo;
