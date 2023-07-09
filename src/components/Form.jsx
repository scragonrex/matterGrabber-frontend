import React, { useState } from 'react'
import * as yup from 'yup'  //* for importing every content of that module
import { Formik } from 'formik'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Box, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setLogin } from '../store/authSlice'
import Flex from './Flex'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from './Button'
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  cpassword: yup.string().required("required"),
  age: yup.number().required().positive().integer(),
})

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required")
})

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  cpassword: "",
  age: ""
}

const initialValuesLogin = {
  email: "",
  password: "",
}
const Form = (props) => {
  const [pageType, setPageType] = useState(props.pageType);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showCPassword, setShowCPassword] = React.useState(false);

  const handleClickShowCPassword = () => setShowCPassword((show) => !show);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (values, onSubmitProps) => {
    console.log("logging")
    const response = await fetch("http://localhost:5000/login",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" }
      });

    const loggedIn = await response.json();
    console.log(loggedIn);
    onSubmitProps.resetForm();
    if (loggedIn) {
      setOpen(true);
      dispatch(setLogin(
        {
          user: loggedIn.user,
          token: loggedIn.token,
        })
      )
      navigate('/home');
    }
  }

  const register = async (values, onSubmitProps) => {
    const response = await fetch("http://localhost:5000/signup",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" }
      });

    const registered = await response.json();
    onSubmitProps.resetForm();
    if (registered) {
      navigate('/');
    }
  }

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (pageType == "register") await register(values, onSubmitProps);
    if (pageType == "login") await login(values, onSubmitProps);

  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Formik onSubmit={handleFormSubmit}
      initialValues={pageType == "login" ? initialValuesLogin : initialValuesRegister}
      validationSchema={pageType == "login" ? loginSchema : registerSchema}>
      {
        ({
          values,
          errors,
          touched, //to determine if the particular filed is visited or not
          handleBlur, //updates touched
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", border: '1px solid balck', gap: '2rem' }}>
              {pageType == "register" && (
                <>
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <TextField name='firstName'
                      value={values.firstname}
                      required label="Firstname"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={Boolean(touched.firstName && Boolean(errors.firstName))}
                      helperText={touched.firstName && errors.firstName} />

                    <TextField name='lastName'
                      value={values.lastname}
                      required label="Lastname"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={Boolean(touched.lastName && Boolean(errors.lastName))}
                      helperText={touched.lastName && errors.lastName} />
                  </Box>

                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <TextField name='email'
                      value={values.email}
                      required label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={Boolean(touched.email && Boolean(errors.email))}
                      helperText={touched.email && errors.email} />

                    <TextField name='age'
                      value={values.age}
                      required label="Age"
                      type="number"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={Boolean(touched.age && Boolean(errors.age))}
                      helperText={touched.age && errors.age} />
                  </Box>


                  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      name='password' value={values.password}
                      type={showPassword ? 'text' : 'password'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.password && Boolean(errors.password))}
                      helperText={touched.password && errors.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>

                  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-cpassword">Confirm Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-cpassword"
                      name='cpassword' value={values.cpassword}
                      type={showCPassword ? 'text' : 'password'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.cpassword && Boolean(errors.cpassword))}
                      helperText={touched.cpassword && errors.cpassword}

                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowCPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showCPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                    />
                  </FormControl>

                </>
              )}
              {pageType == "login" && (<>
                <TextField
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={Boolean(touched.email && Boolean(errors.email))}
                  helperText={touched.email && errors.email}
                />

                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name='password' value={values.password}
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.password && Boolean(errors.password))}
                    helperText={touched.password && errors.password}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{ vertical:"top", horizontal:"center" }}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                  </Alert>
                </Snackbar>
              </>)}
              <Button
            type='submit'>{props.pageType === 'login' ?"Login" :"Register"}</Button>
              {
                pageType === "login" ? (
                  <div>Dont have an Account?. <Typography sx={{
                    fontSize:"1rem", display:"inline",
                    fontWeight:"bold", margin:"0 2px", transition:"0.3s", cursor:"pointer", color:"#027cff", "&:hover":{textDecoration:"underline"}
                  }} onClick={() => navigate('/signup')}> SignUp</Typography>here!</div>
                ) :
                  <div><span>Already have an account.</span><Typography sx={{
                    fontSize:"1rem", display:"inline",
                    fontWeight:"bold", margin:"0 2px", transition:"0.3s", cursor:"pointer", color:"#027cff", "&:hover":{textDecoration:"underline"}
                  }} onClick={() => navigate('/')}>Login</Typography><span>here</span></div>
              }
            </Box>
          </form>)
      }
    </Formik>
  )
}

export default Form
