import React, { useEffect, useState } from "react";

const FormCustumHook = (inicialForm = {}) => {
  const [form, setFormState] = useState(inicialForm);

  const onInputchange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...form,
      [name]: value,
    });
  };
  return {
    ...form,
    form,
    onInputchange,
  };
};

export default FormCustumHook;
