import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, 'Password must be at least 10 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password must match',
    path: ['confirmPassword'],
  });

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: 'default@email.com',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type='email' placeholder='Email' />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register('password')} type='password' className='Password' />
      {errors.password && <p>{errors.password.message}</p>}
      <input
        {...register(
          'confirmPassword'
          // {
          //   required: 'Confirm password is required',
          //   validate: (value) =>
          //     value === getValues('password') || 'Password must match',
          // }
        )}
        type='password'
        className='Confirm password'
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <button disabled={isSubmitting} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
