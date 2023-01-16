import { useState } from "react";

const useFormValidation = () => {
  const [input, setInput] = useState({});
  const [err, setErr] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInput({ ...input, [name]: value });
    setErr({...err, [name]: evt.target.validationMessage});
    setIsValid(evt.target.closest('form').checkValidity());
  };

  const setFirstValue = (value) => {
    setInput(value);
  };

  return {
    input,
    err,
    isValid,
    handleChange,
    setFirstValue,
  }
};

export default useFormValidation;
