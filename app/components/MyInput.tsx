import { useField } from "remix-validated-form";

type MyInputProps = {
  name: string;
  label: string;
  
};

export const MyInput = ({ name, label }: MyInputProps) => {
  const { error, getInputProps } = useField(name);
  console.log(label,"label")
  return (
    <>
      <div>
        
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>

        <input
          {...getInputProps({ id: name })}

          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mt-2"> 
        {error && (
          <span className="my-error-class " style={{ color: "red" }}>
            *{error}
          </span>
        )}
      </div>
    </>
  );
};
