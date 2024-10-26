import { createContext } from "react";

const FormFieldContext = createContext({
  //
});

export const FormFieldProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <FormFieldContext.Provider value={{}}>{children}</FormFieldContext.Provider>
  );
};

export default FormFieldContext;
