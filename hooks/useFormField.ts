import FormFieldContext from "@/context/FormFieldContext";
import { useContext } from "react";

const useFormField = () => {
  return useContext(FormFieldContext);
};

export default useFormField;
