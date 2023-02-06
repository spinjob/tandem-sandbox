import { useState } from 'react';
import {useFormik} from 'formik'
import {Text, Button, PasswordInput, PasswordInputProps} from '@mantine/core'
import * as yup from 'yup'

function LoginForm() {
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values)
            setMessage('Form submitted')
            setSubmitted(true)
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email address').required('An email is required.'),
            password: yup.string().required('A password is required.'),
        }),
    });

    return (
        <div>
            <div style={{display:'flex', flexDirection:'column', width:'100%',height:'100vh', justifyContent:'center', alignItems:'center'}}>
                <div hidden={!submitted} className="alert alert-primary" role="alert">
                    {message}
                </div>
                <div style={{width: '100%',alignItems:'left'}}>
                    <Text className='header' style={{paddingBottom: 30}}>Sign Up</Text>
                    <form onSubmit={formik.handleSubmit}>
                        <div style={{height: 15}}/>
                        <div style={{display:'block'}}>
                            <Text className='formFieldLabel'>Email Address</Text>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="mail@example.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={{borderColor: '#cbd5e0'}}
                            />
                            {formik.errors.email && <Text className='validationErrorLabel' >{formik.errors.email}</Text>}

                        </div>
                        <div style={{height: 15}}/>
                        <div style={{display:'block'}}>
                            <Text className='formFieldLabel'>Password</Text>
                            <PasswordInput style={{borderColor: '#cbd5e0',width:'400px', height: '44px'}} name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} radius="md" placeholder={"Enter Password"} value={formik.values.password} size={'lg'} id="your-password" />
                            {formik.errors.password && <Text className='validationErrorLabel' >{formik.errors.password}</Text>}

                        </div>
                        <div style={{paddingTop: 20}}>
                            <Button type="submit" style={{backgroundColor: 'black', height: '44px',width: '400px', borderRadius: 8}}>
                                <Text className='registrationButtonText'>Sign Up</Text>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;