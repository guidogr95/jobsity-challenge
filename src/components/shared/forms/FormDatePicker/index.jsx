export default function FormDatePicker ({ field, form: { touched, errors }, className, ...props }) {
  const hasError = touched[field.name] && Boolean(errors[field.name]);
  const inputClassName = `placeholder-gray-400 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block shadow-sm rounded-md${hasError ? ' ring-2 ring-red-500' : ''} ${className}`
  // if role not defined explicitly it cannot be targeted by testin-library
  return (
    <input
      type="date"
      role="textbox"
      data-testid="date"
      className={inputClassName}
      {...field}
      {...props}
    />
  );
};