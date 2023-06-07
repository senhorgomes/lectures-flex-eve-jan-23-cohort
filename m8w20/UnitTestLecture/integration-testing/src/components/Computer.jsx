const Computer = (props) => {
  const { state, setState } = props;

  const handleClick = () => {
    return setState(prev=>({
      // ...prev, cheating: true
      ...prev, cheating: !prev.cheating
    }
    ))
  }

  return (
    <section className="computer">
      <span
        data-testid="robot-icon"
        role="img"
        aria-label="robot"
        className={state.cheating ? "cheating" : null}
        onClick={handleClick}
      >
        🤖
      </span>
      <div>
        <h1>{state.cheating ? "EXTERRMINATE !" : "Good game to you"}</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              {state.compSelection === "Moai" ? "🗿" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              {state.compSelection === "Axe" ? "🪓" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              {state.compSelection === "Tree" ? "🌳" : " ? "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Computer;
