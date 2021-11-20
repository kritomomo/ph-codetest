import React, { useState, useCallback } from 'react';
import { ErrorMessage } from 'formik';
import * as Yup from "yup";
import { InputAdornment, IconButton } from '@material-ui/core';
import ILoginForm from "../../../common/interface/ILoginForm";
import useStyles from '../Login.style';
import * as api from '../../../utils/api';

interface IEndAdornment {
  component: JSX.Element,
  handleOnClick: any;
}

const useLoginForm = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const initialValues: ILoginForm = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username Required'),
    password: Yup.string().required('Password Required'),
  });

  const handleOnSubmit = useCallback(async ({ username, password } : ILoginForm) => {
    try {
      setSuccess(false);
      setError(false);
      const loginRes = await api.login({ username, password });
      if (loginRes.status === 200) {
        setSuccess(true);
      }
    } catch (error : any) {
      if (error.response.status === 401) {
        setError(true);
      }
      setError(true);
    }
  }, []);

  const showErrorMsg = (name : string) => (
    <ErrorMessage name={name}>
      {(msg) => (
        <span className={classes.errorMsg}>{msg}</span>
      )}
    </ErrorMessage>
  );

  const showEndAdornemnt = useCallback(({ handleOnClick, component} : IEndAdornment) => ({
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleOnClick}>
          {component}
        </IconButton>
      </InputAdornment>
    )
  }), []);

  return {
    error,
    success,
    showPassword,
    handleShowPassword,
    initialValues,
    validationSchema,
    handleOnSubmit,
    showErrorMsg,
    showEndAdornemnt,
  };
};

export default useLoginForm;