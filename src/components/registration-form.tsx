import { useState } from 'react';
import {useFormik} from 'formik'
import {Text, Button, PasswordInput, Anchor} from '@mantine/core'
import * as yup from 'yup'

function RegistrationForm() {
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
            name: yup.string().required('Your name is required.'),
            email: yup.string().email('Invalid email address').required('An email is required.'),
            password: yup.string().required('A password is required.'),
            organizationCode: yup.string().required('An organization code is required.')
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
                    <div style={{display:'block'}}>
                        <Text className='formFieldLabel'>Your Name</Text>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{borderColor: '#cbd5e0'}}
                        />
                        {formik.errors.name && <Text className='validationErrorLabel' >{formik.errors.name}</Text>}
                    <div style={{height: 15}}/>
                   <div style={{display:'block'}}>
                    <Text className='formFieldLabel'>Company Code</Text>
                        <input
                            type="text"
                            name="organizationCode"
                            className="form-control"
                            placeholder="Acme Unlimited Co."
                            value={formik.values.organizationCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{borderColor: '#cbd5e0'}}
                        />
                        {formik.errors.organizationCode && <Text className='validationErrorLabel' >{formik.errors.organizationCode}</Text>}
                    </div>
                    </div>
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
                    <div style={{height: 15}}/>
                    <div style={{display:'flex', width: '400px', justifyContent:'center', alignItems:'center'}}>
                        <Text>Already have an account? </Text><div style={{width: '5px'}}/> <Anchor color="gray" underline={true} href="https://mantine.dev/" target="_blank"> Sign In</Anchor>
                    </div>
                   
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;