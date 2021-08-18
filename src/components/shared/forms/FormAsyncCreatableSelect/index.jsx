// utils
import AsyncCreatableSelect from 'react-select/async-creatable';

export default function FormAsyncCreatableSelect ({ field, promiseOptions, form, className, ...props }) {
  const { touched, errors } = form
  const hasError = touched[field.name] && Boolean(errors[field.name]);
  const inputClassName = `w-full placeholder-gray-400 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-auto shadow-sm rounded-md${hasError ? ' ring-2 ring-red-500' : ''} ${className}`
  return (
    <AsyncCreatableSelect
      cacheOptions={true}
      name={field.name}
      id={props.id}
      onBlur={field.onBlur}
      createOptionPosition="first"
      className={inputClassName}
      defaultOptions
      loadOptions={promiseOptions}
      onChange={option => form.setFieldValue(field.name, { value: { woeid: option?.value?.woeid || '', label: option?.label || '' }, label: option?.label || ''})}
      {...props}
      isClearable={true}
      value={field?.value?.value || ''}
      placeholder={field?.value?.label || props.placeholder}
    />
  );
};