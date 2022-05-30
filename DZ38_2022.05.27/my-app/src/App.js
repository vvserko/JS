import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import './index.css'

function App() {
  const validationSchema = yup.object().shape({
    email: yup.string().typeError('Должна быть строка').required('Обязательно'),
    password: yup.string().typeError('Должна быть строка').required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('Обязательно'),
    
  })
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationSchema}

      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
          <div >
            <form className='myForm'>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                  type={'email'}
                  name={'email'}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              {touched.email && errors.email && <p>{errors.email}</p>}

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type={'password'}                
                name={'password'}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                className="form-control" id="exampleInputPassword1" />
              </div>
              {touched.password && errors.password && <p>{errors.password}</p>}

              <div className="mb-3">
                <label htmlFor="exampleConfirmPassword1" className="form-label">Confirm Password</label>
                <input 
                type={'password'}                
                name={'confirmPassword'}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                className="form-control" id="exampleConfirmPassword1" />
              </div>
              {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}

              
              <button
                disabled={!isValid}
                onClick={handleSubmit}
                type={"submit"}
                className="btn btn-primary">Submit</button>
            </form>
          </div>
        )}
      </Formik>

    </div>
  )

}
export default App
