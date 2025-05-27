import Card from "./Components/card/Card.jsx";
import ColorPicker from "./Components/colorPicker/ColorPicker.jsx";
import Form from "./Components/form/Form.jsx";
import Increment from "./Components/Increment/Increment.jsx";
import Toggle from "./Components/toggle/Toggle.jsx";

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
      <br /><hr /><hr />
      <Toggle></Toggle>
      <br /><hr /><hr />
      
    </>
  );
}

export default App