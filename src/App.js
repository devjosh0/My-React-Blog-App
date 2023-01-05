
import Cars from './components/components';
import {Car,Counter} from './components/components'
import List from './components/useState';
import{Try1} from './components/useState';
import './components/components.css'
import Btn from './components/stateful-vs-stateless';
import Navbar from './components/navbar';
import Home from './components/homepage';
import Hub from './components/try';
import Bloglist from './components/blog-list';
function App() {

  return (
    <div className="App">
      <Navbar/>
<div className="content">
<Home/>
</div>
    </div>
  );
}
/**<Cars />
 <Hub/>
<Car/>
<Counter/>
<List/>
<Try1/>
<Btn/> */
export default App;
