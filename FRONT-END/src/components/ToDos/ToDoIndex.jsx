import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToDoContext from '../../context/ToDoContext';

export const ToDoIndex = () => {
  const {ToDos, getToDos, deleteToDo} = useContext(ToDoContext);
  useEffect(() => {
       getToDos();
  }, []);
  return (
    <div className='my-5'>
      <div className="justify-content-end d-flex m-2 p-2">
        <Link to="/ToDos/create" className="btn btn-primary">Nouvelle Tâche</Link>
      </div>
      <table className="table">
    <thead>
      <tr>
        <th scope="col">Titre</th>
        <th scope="col">Completed</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        {ToDos.map((ToDo) => {
          return(
          <tr key={ToDo.id}>
            <td>{ToDo.titre}</td>
            <td>{ToDo.completed===0?<span className='text-danger fw-bold'>False</span>:<span className='text-success fw-bold'>True</span>}</td>
            <td><div className='justify-content-center d-flex'>
              <Link to={`/ToDos/${ToDo.id}/edit`} className="btn btn-warning" >Modifier</Link>
              <button onClick={()=>deleteToDo(ToDo.id)} className="btn btn-danger mx-3" >Supprimer</button></div>
            </td>
          </tr>)
        })}
    </tbody>
  </table>
  </div>
  )
}
