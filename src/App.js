import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/add">
          <Protected Cmp={AddProduct} />
        </Route>

        <Route path="/update">
          <UpdateProduct />
        </Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
