import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import {
  selectFilteredTasks,
  selectTextFilter,
} from '../../../redux/filterTextSlice';

export default function TasksList({ tasks }) {
  const visibleTasks = useSelector(selectFilteredTasks);

  return (
    <div>
      <ul>
        {visibleTasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
