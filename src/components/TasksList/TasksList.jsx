import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { selectTasks } from '../../../redux/tasksSlice';

export default function TasksList({ tasks }) {
  console.log(tasks);
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
