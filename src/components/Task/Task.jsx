export default function Task({ task }) {
  console.log(task);
  return (
    <div>
      <h3>text: {task.text}</h3>
      <p>id: {task.id}</p>
    </div>
  );
}
