import "../../App.css";

export function Loader() {
  return (
    <div className="container loader-section">
      <div className="globe-container">
        <div className="globe"></div>
        <div className="dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
        </div>
      </div>
    </div>
  );
}
