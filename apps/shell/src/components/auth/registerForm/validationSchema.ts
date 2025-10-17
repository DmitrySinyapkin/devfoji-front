import * as yup from 'yup'

export const validationSchema = yup.object({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Passwords must match'),
    agree: yup.boolean().required(),
})
