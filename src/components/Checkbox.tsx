import { InputHTMLAttributes } from "react";

const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} type="checkbox" />;
};

export default Checkbox;
