import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert"
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "Abakaliki", "Benue", "Markurdi"];
  const handleClickedItem = (item: string) => {
    console.log(item);
  };

  const [showAlert, setShowAlert] = useState(true)

  return (
    <div>
      <ListGroup
        items={items}
        header="States"
        OnSelectItem={handleClickedItem}
      ></ListGroup>

      {showAlert && <Alert>Alert is showing</Alert>}

      <Button
        color="primary"
        OnSelectButton={() => {
          console.log(showAlert);
          setShowAlert(!showAlert)
        }}
      >
        Show Alert
      </Button>
    </div>
  );
}

export default App;
