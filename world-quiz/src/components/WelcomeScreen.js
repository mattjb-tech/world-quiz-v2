function WelcomeScreen({ onStart }) {
    return (
      <div className="welcome fade-in">
        <h1>World Capitals Challenge</h1>
  
        <h3 className="discover">
          How well do you really know the world?
        </h3>
  
        <p className="intro">
          Test your knowledge of capital cities across the globe - from the icy north to the sizzling equator.  
          Choose how many countries you want to challenge yourself with, and dive in!  
          Whether you're a geography genius or just guessing your way through, it's time to prove it!
        </p>
  
        <button onClick={onStart} className="start">
          Start Quiz
        </button>
      </div>
    );
}
  
export default WelcomeScreen;  