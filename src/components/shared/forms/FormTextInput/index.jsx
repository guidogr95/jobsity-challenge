// props are passed from formik field component
export default function FormTextInput({ field, form: { touched, errors }, className, ...props }) {

  const hasError = touched[field.name] && Boolean(errors[field.name]);
  const inputClassName = `placeholder-gray-400 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-auto shadow-sm rounded-md${hasError ? ' ring-2 ring-red-500' : ''} ${className}`

  return (
    <input
      type="text"
      className={inputClassName}
      {...field}
      {...props}
    />
  );
}
