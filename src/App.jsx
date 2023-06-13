import React from 'react';
import Header from './Header';
import TaskList from './TaskList';

const App = () => {
  const tasks = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: true },
    { name: 'Task 3', completed: false },
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;

