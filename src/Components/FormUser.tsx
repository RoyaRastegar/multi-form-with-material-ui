import React, { useState } from "react";
import { FormUserDetail } from "./FormUserDetail";
import { FormPersonalDetail } from "./FormPersonalDetail";
import { Confirm } from "./Confirm";
import { Success } from "./Success";

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  country: string;
  phone: string;
};

function FormUser() {
  // states
  const [step, setStep] = useState(1);
  const [user, setUser] = useState<User>({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    phone: "",
  });
  // functions
  function nextStep(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep((step) => step + 1);
  }
  function prevStep(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep((step) => step - 1);
  }
  function handelInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser((values) => ({ ...values, [name]: value }));
  }
  switch (step) {
    case 1:
      return <FormUserDetail />;
    case 2:
      return <FormPersonalDetail />;
    case 3:
      return <Confirm />;
    case 4:
      return <Success />;
    default:
      return <div>Error: Invalid step</div>;
  }
}
export default FormUser;
