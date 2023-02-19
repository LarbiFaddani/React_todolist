import React, { useContext} from 'react'
import ToDoContext from '../../context/ToDoContext'

export const ToDoCreate = () => {
  const {formValues, onChange, storeToDo, errors}= useContext(ToDoContext);
  
  return (
    <div>
      <form onSubmit={storeToDo}>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre du tâche</label>
          <input className="form-control" placeholder='Entrer le titre du tâche' id="titre" name='titre' value={formValues["titre"]} onChange={onChange} required/>
          {errors.titre && ( <span className='text-danger text-sm'>{errors.name[0]}</span>)}
        </div>
        <div className="mb-3">
          <label htmlFor="completed" className="form-label">Completed</label>
          <input type="number" placeholder='Tapez 0 pour False et 1 pour True' className="form-control" id="completed" name='completed' value={formValues["completed"]} onChange={onChange} required/>
          {errors.completed && ( <span className='text-danger text-sm'>{errors.name[0]}</span>)}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
