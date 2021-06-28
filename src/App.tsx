import { Preview, print } from "react-html2pdf";
import "./styles.css";

export default function App() {
  return (
    <>
      <Preview id={"jsx-template"}>
        <div>
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              display: "grid",
              gridTemplateColumns: "20% 60% 20%",
              height: "100px"
            }}
          >
            <div>
              <h1>1</h1>
            </div>
            <div>
              <div>
                Transportador: 49.871.213/0001-88 - IC TRANSPORTES LTDA.
                SUMARÉ-SP
              </div>
            </div>
            <div>
              <h1>3</h1>
            </div>
          </div>
        </div>
      </Preview>
      <button onClick={() => print("a", "jsx-template")}> print</button>
    </>
  );
}
