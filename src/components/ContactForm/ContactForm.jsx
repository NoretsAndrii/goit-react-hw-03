import { useId } from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  tel: '',
};

export default function ContactForm() {
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId}></Field>

        <label htmlFor={telFieldId}>Number</label>
        <Field type="tel" name="tel" id={telFieldId}></Field>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
