function StartScreen({numQuestion}) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>Attempt {numQuestion} to test your React mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
