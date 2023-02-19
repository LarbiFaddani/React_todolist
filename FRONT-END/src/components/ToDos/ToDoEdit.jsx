import React, { useContext, useEffect } from 'react'
import ToDoContext from '../../context/ToDoContext'
import { useParams } from 'react-router-dom';

export const ToDoEdit = () => {
  const {formValues, onChange, errors, ToDo, getToDo, updateToDo}= useContext(ToDoContext);
  let {id} = useParams();

  useEffect(()=>{
    getToDo(id)
  }, [])
  return (
    <div>
      <form onSubmit={updateToDo}>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">titre</label>
          <input className="form-control" id="titre" name='titre' value={formValues["titre"]} onChange={onChange} required/>
          {errors.titre && ( <span className='text-danger text-sm'>{errors.name[0]}</span>)}
        </div>
        <div className="mb-3">
          <label htmlFor="completed" className="form-label">completed</label>
          <input type="number" className="form-control" id="completed" name='completed' value={formValues["completed"]} onChange={onChange} required/>
          {errors.completed && ( <span className='text-danger text-sm'>{errors.name[0]}</span>)}
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}
