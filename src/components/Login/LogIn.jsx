import '../Login/login.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useState } from 'react';

export default function Login() {

    const [check, setForm] = useState(true)

    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            age: Yup.number().required('Required'),
            email: Yup.string().email('Email is invalid').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        }),
        onSubmit: () => {
            alert("logged succesfull")
        }
    })


    return (

        <>



            <div className="button-div container">

                <button className="signup-button" onClick={() => setForm(true)}>Signup</button>
                <button className="login-button" onClick={() => setForm(false)}>Login</button>

            </div>


            {check ? <div className="container" >

                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
                        <div className="card card-signin my-5 rounded-5">
                            <div className="card-body ">
                                <h5 className="card-title text-center">Sign In</h5>

                                <form className="form-signin" onSubmit={formik.handleSubmit}>


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

                :

                <div className="container" >

                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
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
            }

            {/*             <div className="container" >

                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
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
            </div> */}

        </>


    )
}


{/* <form className='d-flex flex-column gap-2' >

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

</form> */}