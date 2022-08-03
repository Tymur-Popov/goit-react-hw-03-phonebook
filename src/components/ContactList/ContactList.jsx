import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};


