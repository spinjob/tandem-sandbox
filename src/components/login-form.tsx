import { useState } from 'react';
import {useFormik} from 'formik'
import * as yup from 'yup'

function LoginForm() {
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            organizationCode: ''
        },
        onSubmit: values => {
            console.log(values)
            setMessage('Form submitted')
            setSubmitted(true)
        },
        validationSchema: yup.object({
            name: yup.string().required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            password: yup.string().required('Required'),
            organizationCode: yup.string().required('Required')
        }),
    });

    return (
        <div>
            <div style={{display:'flex', flexDirection:'column', height:'vh', justifyContent:'center', alignItems:'center'}}>
            <div hidden={!submitted} className="alert alert-primary" role="alert">
                {message}
            </div>
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit}>
                <div style={{display:'block'}}>
                    <p>Your Name</p>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && (
                    <div className="text-danger">{formik.errors.name}</div>
                    )}
                <div style={{display:'block'}}>
                    <p>Organization Code</p>
                    <input
                        type="text"
                        name="organizationCode"
                        className="form-control"
                        placeholder="Your password"
                        value={formik.values.organizationCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.organizationCode && (
                    <div className="text-danger">{formik.errors.organizationCode}</div>
                    )}
                </div>
                </div>
                <div style={{display:'block'}}>
                    <p>Email</p>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="your-email@domain.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                    )}
                </div>
                <div style={{display:'block'}}>
                    <p>Password</p>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        placeholder="Your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && (
                    <div className="text-danger">{formik.errors.password}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default LoginForm;