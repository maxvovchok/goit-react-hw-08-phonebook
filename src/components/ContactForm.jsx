export const ContactForm = ({ addContact }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    addContact(form.elements.name.value, form.elements.number.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          border: '2px solid black',
          width: '500px',
        }}
      >
        <h2>Name</h2>
        <input type="text" name="name" required />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </div>
    </form>
  );
};
