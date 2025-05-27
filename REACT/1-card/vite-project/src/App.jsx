import Card from "./Components/card/Card.jsx";
import ColorPicker from "./Components/colorPicker/ColorPicker.jsx";
import Form from "./Components/form/Form.jsx";
import Increment from "./Components/Increment/Increment.jsx";

function App(){
  return(
    <>
      <br /><hr /><hr />
      <h1>Using Components</h1>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <br /><hr /><hr />
      <Increment></Increment>
      <br /><hr /><hr />
      <Form></Form>
      <br /><hr /><hr />
      <ColorPicker></ColorPicker>
      
    </>
  );
}

export default App