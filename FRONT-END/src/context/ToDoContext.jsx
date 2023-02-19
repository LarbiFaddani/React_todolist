import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL="http://127.0.0.1:8000/api/V1/"

const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {
    const initialForm = {
        titre:"",
        completed:""
      }
  const [formValues, setFormValues] = useState(initialForm);
  const [ToDos, setToDos] = useState([]);
  const [ToDo, setToDo] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
    const getToDos = async () => {
        const apiToDos = await axios.get("ToDos");
        setToDos(apiToDos.data.data);
    };
    const getToDo = async (id) => {
        const response = await axios.get('ToDos/'+id);
        const apiToDo = response.data.data
        setToDo(apiToDo);
        setFormValues({
            titre: apiToDo.titre,
            completed: apiToDo.completed
        })
    };

    const storeToDo = async (e) => {
        e.preventDefault();
        try{
            await axios.post("ToDos", formValues);
            setFormValues(initialForm);
            navigate("/ToDos");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    };

    const updateToDo = async (e) => {
        e.preventDefault();
        try{
            await axios.put("ToDos/" + ToDo.id, formValues);
            setFormValues(initialForm);
            navigate("/ToDos");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

    const deleteToDo = async (id) => {
        if(!window.confirm("Vous êtes sur le point de supprimer cet utilisateur")){
            return;
        }
        await axios.delete("ToDos/"+ id);
        getToDos();
    }

    return <ToDoContext.Provider value={{ ToDo, ToDos,getToDo, getToDos, onChange, formValues, storeToDo, errors, updateToDo, deleteToDo }}>{children}</ToDoContext.Provider>
}
export default ToDoContext;