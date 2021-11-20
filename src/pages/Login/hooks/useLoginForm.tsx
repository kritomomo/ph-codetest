import React, { useState, useCallback } from 'react';
import { ErrorMessage } from 'formik';
import * as Yup from "yup";
import ILoginForm from "../../../common/interface/ILoginForm";
import useStyles from '../Login.style';
import * as api from '../../../utils/api';

const useLoginForm = () => {
  const classes = useStyles();
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
      const loginRes = await api.login({ username, password });
      if (loginRes.status === 200) {
      }
    } catch (error : any) {
      if (error.response.status === 401) {
      }
    }
  }, []);

  const showErrorMsg = (name : string) => (
    <ErrorMessage name={name}>
      {(msg) => (
        <span className={classes.errorMsg}>{msg}</span>
      )}
    </ErrorMessage>
  );

  return {
    showPassword,
    handleShowPassword,
    initialValues,
    validationSchema,
    handleOnSubmit,
    showErrorMsg,
  };
};

export default useLoginForm;