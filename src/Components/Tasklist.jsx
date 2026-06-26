import React from 'react'

export default function Tasklist({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
  const updatedTask = {
    ...tasks[index],
    completed: !tasks[index].completed
  };
  updateTask(updatedTask, index);
};

  const formatDueDate = (dueDate) => {
    const date = new Date(dueDate);
    return date.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
  };

  const isOverdue = (dueDate, completed) => {
    return !completed && dueDate && new Date(dueDate) < new Date();
  };

  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <div>
            <span>{task.text}</span>
            <small>({task.priority}, {task.category})</small>
            {task.dueDate && (
              <small className={`due-date ${isOverdue(task.dueDate, task.completed) ? 'overdue' : ''}`}>
                {formatDueDate(task.dueDate)}
              </small>
            )}
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Completed"}
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}