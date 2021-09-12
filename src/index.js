import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TodoList from "./todolist";

// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   const [inProp, setInProp] = useState(false);

//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />

//       <div>
//         <CSSTransition in={inProp} timeout={2000} classNames="my-node">
//           <div>{"I'll receive my-node-* classes"}</div>
//         </CSSTransition>
//         <button type="button" onClick={() => setInProp(true)}>
//           Click to Enters
//         </button>
//       </div>
//     </div>
//   );
// }

ReactDOM.render(<TodoList />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();
