import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/operations';

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addTask(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="text" placeholder="Enter yout task text" />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
}
