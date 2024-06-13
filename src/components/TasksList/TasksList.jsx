import Task from '../Task/Task';

export default function TasksList({ tasks }) {
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
