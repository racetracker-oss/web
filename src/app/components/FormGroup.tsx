//* This is a floating form group :)

import { ChangeEventHandler } from "react";

type FormGroupProps = {
  title: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  id: string;
  className?: string;
  placeholder?: string;
  isRequired?: boolean;
};

const FormGroup = ({
  title,
  value,
  onChange,
  type,
  id,
  className,
  placeholder = " ",
  isRequired = false,
}: FormGroupProps) => {
  return (
    <div className={`relative z-0 w-full mb-5 group ${className && className}`}>
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        name={id}
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-light-300 focus:border-lead-dark focus:outline-none focus:ring-0 peer"
        placeholder={placeholder}
        required={isRequired}
      />
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-lead peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {title}
      </label>
    </div>
  );
};

export default FormGroup;
