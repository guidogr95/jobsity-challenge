export default function FormLabel ({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="block font-medium text-gray-700 ">
      {children}
    </label>
  );
};