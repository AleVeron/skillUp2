import './login.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [check, setForm] = useState(true)
    const navigate = useNavigate()

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
            localStorage.setItem("logged", "yes")
            navigate("/")
        }
    })

    
    

    return (

        <>



            <div className="button-div container">

                <button className="signup-button" onClick={() => setForm(true)}>Login</button>
                <button className="login-button" onClick={() => setForm(false)}>Signup</button>

            </div>


            {check ?

                <div className="container" >

                    <div className="row">
                        <div className="col-12 ">
                            <div className="card card-signin my-5 rounded-5">
                                <div className="card-body ">
                                    <h5 className="card-title text-center">Log In</h5>

                                    <form className="form-signin" onSubmit={formik.handleSubmit}>

                                        <div className="form-label-group">

                                            <input
                                                className="form-control"
                                                type="email"
                                                name='email'
                                                onChange={formik.handleChange}
                                                error={formik.errors.email}
                                                autoFocus
                                                placeholder='Email address'
                                            />

                                            {formik.errors.email ? <div className='errorFormik'>{formik.errors.email}</div> : null}



                                        </div>

                                        <div className="form-label-group">

                                            <input
                                                className="form-control"
                                                type="password"
                                                name='password'
                                                onChange={formik.handleChange}
                                                error={formik.errors.password}
                                                placeholder="Password"
                                            />
                                            {formik.errors.password ? <div className='errorFormik'>{formik.errors.password}</div> : null}


                                        </div>

                                        <div className='d-flex justify-content-center'>
                                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Log in</button>
                                        </div>
                                        <hr className="my-4" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                :

                <div className="container" >

                    <div className="row">
                        <div className="col-12">
                            <div className="card card-signin my-5 rounded-5">
                                <div className="card-body ">
                                    <h5 className="card-title text-center">Sign In</h5>

                                    <form className="form-signin" /* onSubmit={formik.handleSubmit} */>


                                        <div className="form-label-group">

                                            <input
                                                className="form-control"
                                                type="text"
                                                name='name'
                                                placeholder='Full Name'
                                            />


                                            {formik.errors.name ? <div className='errorFormik'>{formik.errors.name}</div> : null}

                                        </div>


                                        <div className="form-label-group">

                                            <input
                                                className="form-control"
                                                type="number"
                                                name='age'
                                                placeholder='Age'
                                            />


                                            {formik.errors.age ? <div className='errorFormik'>{formik.errors.age}</div> : null}

                                        </div>

                                        <div className="form-label-group">

                                            <input
                                                className="form-control"
                                                type="email"
                                                name='email'
                                                onChange={formik.handleChange}
                                                error={formik.errors.email}
                                                autoFocus
                                                placeholder='Email address'
                                            />

                                            {formik.errors.email ? <div className='errorFormik'>{formik.errors.email}</div> : null}



                                        </div>

                                        <div className="form-label-group">

                                            <input
                                                className="form-control"
                                                type="password"
                                                name='password'
                                                onChange={formik.handleChange}
                                                error={formik.errors.password}
                                                placeholder="Password"
                                            />
                                            {formik.errors.password ? <div className='errorFormik'>{formik.errors.password}</div> : null}


                                        </div>

                                        <div className='d-flex justify-content-center'>
                                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                        </div>
                                        <hr className="my-4" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }


        </>


    )
}



