import React, {useState} from 'react'

export default function Taskform({addTask}) {
    const[task, setTask] = useState("");
    const[priority, setPriority] = useState("Medium");
    const[category, setCategory] = useState("General");
    const[dueDate, setDueDate] = useState("");
    const handlesubmit = (e)=> {
      e.preventDefault();
      addTask({text:task, priority, category, completed: false, dueDate});

      //Reset State:

      setTask("");
      setPriority("Medium")
      setCategory('General')
      setDueDate("")
    }
  return (
    <form onSubmit = {handlesubmit} className = 'task-form'>
        <div id ='inp'>
            <input type = 'text' 
            placeholder='Enter your task'
            value = {task}
             onChange = {(e) => setTask(e.target.value)}/>
            <span><button type = 'submit'>Add Task</button></span>
        </div>

        <div id = 'btns'>
           <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                <option value = "high">High</option>
                <option value = "medium">Medium</option>
                <option value = "low">Low</option>
           </select>

           
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value = "general">General</option>
                <option value = "work">Work</option>
                <option value = "personal">Personal</option>
           </select>

           <input type='datetime-local'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)} />
        </div>
    </form>
  )
}