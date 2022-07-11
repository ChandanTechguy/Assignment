import './App.css';
import { TypeOfFood} from "./component/food/typeofFood";
import {Parent} from "./component/parent"

function App() {
  return (
    <div>
      <h1>TechMojo</h1>

<p><u>TechMojo is an outsourced product development and technology services company,specialising in building massively scalable web based products</u></p>
<ul>
<li>Juice</li>
  <li>Coffee</li>
  <li>Coffeelatte</li>
</ul>
      <Parent/>
      <TypeOfFood />
    </div>
  );
}

export default App;
