import '../Login/login.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';

export default function Login() {


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email is invalid').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        }),
        onSubmit: () => {
            alert("logged succesfull")
        }
    })


    return (


        <form className='d-flex flex-column gap-2' onSubmit={formik.handleSubmit}>

            <h2>Log-In</h2>

            <label htmlFor="email">Email</label>
            <input
                placeholder='Email'
                type="email"
                name='email'
                onChange={formik.handleChange}
                error={formik.errors.email}
            />
            {formik.errors.email ? <div className='errorFormik'>{formik.errors.email}</div> : null}

            <label htmlFor="password">Password</label>
            <input
                placeholder='Provide a password'
                type="password"
                name='password'
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            {formik.errors.password ? <div className='errorFormik'>{formik.errors.password}</div> : null}


            <div>
                <button className='btn btn-secondary' type='submit'>Submit</button>
            </div>

        </form>
    )
}