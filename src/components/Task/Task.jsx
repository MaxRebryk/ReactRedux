import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../redux/operations';

export default function Task({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <h3>text: {task.text}</h3>
      <p>id: {task.id}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
