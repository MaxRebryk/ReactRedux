import { useEffect, useState } from 'react';
import Balance from '../Balance/Balance';
import './App.css';
import TasksList from '../TasksList/TasksList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../redux/operations';
import { selectTasks } from '../../../redux/tasksSlice';
import Loader from '../loader/Loader';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const tasks = useSelector(state => state.tasks.items);

  return (
    <>
      <Balance />
      {tasks ? <TasksList tasks={tasks} /> : <Loader />}
    </>
  );
}

export default App;
