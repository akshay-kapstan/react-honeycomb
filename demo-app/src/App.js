import logo from "./logo.svg";
import "./App.css";
import { Hexagon, ResponsiveHoneycomb } from "react-honeycomb-v2";

function App() {
  return (
    <div className="App">
      <ResponsiveHoneycomb
        defaultWidth={1024}
        size={64}
        items={Array.from({ length: 1 }, (_, i) => i)}
        renderItem={(item) => (
          <Hexagon>
            <img
              src={`https://picsum.photos/${64 * 2}?random=${item}`}
              alt={`Random #${item}`}
            />
          </Hexagon>
        )}
      />
    </div>
  );
}

export default App;
