import {Routes, Route, Link} from 'react-router-dom';
import { ToDoProvider } from './context/ToDoContext';
import { ToDoIndex } from './components/ToDos/ToDoIndex';
import { ToDoCreate } from './components/ToDos/ToDoCreate';
import { ToDoEdit } from './components/ToDos/ToDoEdit';
import {Home} from './components/Home';
function App() {
  return (
    <ToDoProvider>
    <div className='mt-5 bg-light p-3'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <ul className="nav">
    <li className="nav-item">
      <Link className="btn btn-primary m-1" to="/">Acceuil</Link>
    </li>
    <li className="nav-item">
      <Link className="btn btn-primary m-1" to="/ToDos">ToDoList</Link>
    </li>
  </ul>
</nav>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/ToDos' element={<ToDoIndex />} />
  <Route path='/ToDos/create' element={<ToDoCreate />} />
  <Route path='/ToDos/:id/edit' element={<ToDoEdit />} />
</Routes>
    </div>
    </ToDoProvider>
  );
}

export default App;
