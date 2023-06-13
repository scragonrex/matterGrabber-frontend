import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {

        // const [Firstname, setFirstname] = useState('');
        // const [Lastname, setLastname] = useState('');
        // const [Email, setEmail] = useState('');
        // const [age, setAge] = useState('');
        // const [password, setPassword] = useState('');
        // const [cpassword, setCPassword] = useState('');

        const [user, setUser] = useState({
            firstname:"",
            lastname:"",
            email:"",
            age:"",
            password:"",
            cpassword:"",
        })
        const onChangeHandler = (e)=>{
            const {name, value} = e.target;
            setUser({
                ...user,
                [name]:value
            })

        }

        const submit = ()=>{
            console.log("user",user);
        }
        const [showPassword, setShowPassword] = React.useState(false);
      
        const handleClickShowPassword = () => setShowPassword((show) => !show);
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };

        const [showCPassword, setShowCPassword] = React.useState(false);
      
        const handleClickShowCPassword = () => setShowCPassword((show) => !show);
      
        // const handleMouseDownCPassword = (event) => {
        //   event.preventDefault();
        // };

  return (
    <Box>
        <TextField name='firstname' value={user.firstname} required label="Firstname" variant="outlined" onChange={onChangeHandler}/>

        <TextField name='lastname' value={user.lastname}required label="Lastname" variant="outlined" onChange={onChangeHandler}/>

        <TextField name='email' value={user.email} required label="Email" variant="outlined" onChange={onChangeHandler}/>

        <TextField name='age' value={user.age} required label="Age" type="number" variant="outlined" onChange={onChangeHandler}/>
        
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput 
            id="outlined-adornment-password"
            name='password' value={user.password}
            type={showPassword ? 'text' : 'password'}
            onChange={onChangeHandler}
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
            name='cpassword' value={user.cpassword}
            type={showCPassword ? 'text' : 'password'}
            onChange={onChangeHandler}
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

        <Button onClick={submit}>Submit</Button>
    </Box>
  )
}

export default Signup
