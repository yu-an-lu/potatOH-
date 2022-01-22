import logo from './logo.svg';
import './App.css';
import './aesthetic.css'

//import ScriptTag from 'react-script-tag';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          POTATOH!!! <br></br>

        </p>

      </header>
      <body>

        <div id="container">
        <div id="productDiv"class="input">Product:<input id="Product" type="text" placeholder="JS" />
        </div>
        <div class="input">ExpirationDate:<input id="Expiration Date" type="text" placeholder="231" />
        </div>
        
        <button id ="entry">Input entry</button>
        </div>

        <table id="display">
          <tr>
            <th>Product</th>
            <th>ExpirationDate</th>

          </tr>

        </table>
        <script src = "interaction.js"></script>
      </body>
    </div>
  );
}

export default App;
//const interaction = props => (
//  <ScriptTag type="text/javascript" src = "interaction.js" />
//)
