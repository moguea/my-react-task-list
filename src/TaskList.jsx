import React from 'react';
import Task from './task.jsx';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
