import { useEffect } from 'react';
import Balance from '../Balance/Balance';
import './App.css';
import TasksList from '../TasksList/TasksList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../redux/operations';

import Loader from '../Loader/Loader';
import TaskForm from '../TaskForm/TaskForm';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const tasks = useSelector(state => state.tasks.items);

  return (
    <>
      <Balance />
      <TaskForm />
      {tasks ? <TasksList tasks={tasks} /> : <Loader />}
    </>
  );
}

export default App;
