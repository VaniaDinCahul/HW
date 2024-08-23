// import Title from "./Title"
// import Description from "./Description";
// import Logo from "./Logo";
import Flake from './flake/component'
import Snow from './snow/component'
import { randInt, randColor } from "../utils/generators";
import { useState}  from 'react'

function App() {

  let [showChild, setShowChild] = useState(true)

  return (
    <div className="App">
      

    <Snow 
    quantity={5}
    />


    </div>
  );
}

export default App;
