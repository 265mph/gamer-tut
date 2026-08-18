import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Abakaliki", "Benue", "Markurdi"];

  return (
    <div>
      <ListGroup items={items} header="States"></ListGroup>
    </div>
  );
}

export default App;
