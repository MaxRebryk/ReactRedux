import { useEffect } from 'react';
import Balance from '../Balance/Balance';
import './App.css';
import TasksList from '../TasksList/TasksList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../redux/operations';

import Loader from '../Loader/Loader';
import TaskForm from '../TaskForm/TaskForm';
import TextFilter from '../TextFilter/TextFilter';
import { selectTasks } from '../../../redux/tasksSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const tasks = useSelector(selectTasks);

  return (
    <>
      <Balance />

      <TaskForm />

      <TextFilter />
      {tasks ? <TasksList tasks={tasks} /> : <Loader />}
    </>
  );
}

export default App;
