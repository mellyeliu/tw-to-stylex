import * as _stylex from "@stylexjs/stylex";
function App() {
  return <div {..._stylex.props(_styles.$1)}>
      <div {..._stylex.props(_styles.$2)}>
        <div {..._stylex.props(_styles.$3)}>
          <h1 {..._stylex.props(_styles.$4)}>
            Welcome to Our Platform
          </h1>
          <p {..._stylex.props(_styles.$5)}>
            Build amazing things with modern tools. Fast, reliable, and designed for developers who care about quality.
          </p>
          <button {..._stylex.props(_styles.$6)}>
            Get Started
          </button>
        </div>
      </div>
    </div>;
}
export default App;
const _styles = _stylex.create({
  $1: {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(to bottom right, #312e81, #581c87, #9d174d)"
  },
  $2: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: "1rem"
  },
  $3: {
    textAlign: "center"
  },
  $4: {
    marginBottom: "1.5rem",
    fontSize: "3rem",
    lineHeight: "1",
    fontWeight: "700",
    color: "#fff"
  },
  $5: {
    marginBottom: "2rem",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: "#e9d5ff"
  },
  $6: {
    borderRadius: ".5rem",
    backgroundColor: {
      default: "#fff",
      ":hover": "#f3e8ff"
    },
    paddingInline: "2rem",
    paddingBlock: ".75rem",
    fontWeight: "600",
    color: "#581c87",
    boxShadow: "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
    transitionProperty: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".2s"
  }
});