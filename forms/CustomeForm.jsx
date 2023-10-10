import { useState } from 'react';

const CustomeForm = () => {
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const isButtonDisabled =
    name.trim().length === 0 ||
    email.trim().length === 0 ||
    errorName ||
    errorEmail;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };

  const handleValidateName = () => {
    if (name.trim() === '') {
      setErrorName('Поле Name не може бути пустим');
    } else if (name.trim().length < 8) {
      setErrorName('Поле Name має бути більше 8 символів');
    } else {
      setErrorName('');
    }
  };

  const handleValidateEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorEmail('Введіть коректний email адрес');
    } else {
      setErrorEmail('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            placeholder='Name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleValidateName}
          />
          {errorName && <p className='error-message'>{errorName}</p>}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleValidateEmail}
          />
          {errorEmail && <p className='error-message'>{errorEmail}</p>}
        </div>
        <button type='submit' disabled={isButtonDisabled}>
          Submit
        </button>
      </form>
    </>
  );
}

export default CustomeForm;
