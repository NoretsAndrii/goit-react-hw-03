import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  tel: Yup.number('Not a number').required('Required'),
});

const initialValues = {
  name: '',
  tel: '',
};

export default function ContactForm({ contacts, setContacts }) {
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    setContacts([...contacts, { ...values, id: nanoid() }]);
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId}></Field>
        <ErrorMessage name="name" component="span" />

        <label htmlFor={telFieldId}>Number</label>
        <Field type="tel" name="tel" id={telFieldId}></Field>
        <ErrorMessage name="tel" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
