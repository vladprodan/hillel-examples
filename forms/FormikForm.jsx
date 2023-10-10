import { useFormik } from 'formik';
import { formikSchema } from './formikSchema';

const FormikForm = () => {
  const onSubmitForm = () => console.log('Form Submitted');

  const formik = useFormik({
    initialValues: {
      email: 'default@gmail.com',
      age: 0,
      password: '',
      confirmPassword: '',
    },
    validationSchema: formikSchema,
    onSubmit: onSubmitForm,
  });

  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          value={formik.values.email}
          type='email'
          placeholder='Email'
          id='email'
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p className='error-message'>{formik.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor='age'>Age</label>
        <input
          value={formik.values.age}
          type='number'
          placeholder='Age'
          id='age'
          onChange={formik.handleChange}
        />
        {formik.errors.age && formik.touched.age && (
          <p className='error-message'>{formik.errors.age}</p>
        )}
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          value={formik.values.password}
          type='password'
          placeholder='Password'
          id='password'
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <p className='error-message'>{formik.errors.password}</p>
        )}
      </div>

      <div>
        <label htmlFor='confirmPassword'>Confirm password</label>
        <input
          value={formik.values.confirmPassword}
          type='password'
          placeholder='Confirm password'
          id='confirmPassword'
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword  && formik.touched.confirmPassword && (
          <p className='error-message'>{formik.errors.confirmPassword}</p>
        )}
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormikForm;
