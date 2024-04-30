import Contact from '../Contact/Contact';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
