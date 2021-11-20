import { Formik, Field, Form } from "formik";
import {
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Visibility  from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useLoginForm from './hooks/useLoginForm';
import useStyles from './Login.style';
import config from './config';

const Login = () => {
  const classes = useStyles();
  const { 
    showPassword,
    handleShowPassword,
    initialValues,
    validationSchema,
    handleOnSubmit,
    showErrorMsg,
  } = useLoginForm();
  const { username, password } = config;
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={classes.container}>
              <div className={classes.username}>
                <Field 
                  {...username}
                  as={TextField}
                  helperText={showErrorMsg("username")}
                />
              </div>
              <div className={classes.password}>
                <Field 
                  {...password}
                  as={TextField}
                  type={showPassword ? 'text' : 'password'}
                  helperText={showErrorMsg("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <IconButton data-testid="eye-button"  onClick={handleShowPassword} edge="end">
                          {showPassword ? <Visibility /> : <VisibilityOffIcon />} 
                          </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <div className={classes.btnContainer}>
                <Button
                  variant="contained" 
                  color="secondary"
                  className={classes.btn}
                  onClick={() => { navigate(-1)}}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained" 
                  color="primary"
                  disabled={isSubmitting}
                  className={classes.btn}
                >
                  Login
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Login;