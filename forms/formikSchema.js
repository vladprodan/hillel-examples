import * as Yup from 'yup';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
const passwordRegexErrorMessage =
  'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character';

export const formikSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  age: Yup.number().positive().integer().required(),
  password: Yup.string()
    .matches(passwordRegex, { message: passwordRegexErrorMessage })
    .required(),
  confirmPassword: Yup.string().required(),
});
