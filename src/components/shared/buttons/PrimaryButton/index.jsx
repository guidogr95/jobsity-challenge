export default function PrimaryButton ({ children, className, ...props }) {
  const inputClassName = `uppercase w-full sm:w-auto flex flex-row flex-nowrap items-center justify-center gap-2 px-4 py-2 shadow rounded text-lg font-medium transition-colors duration-150 ${className}`;

  return (
    <button
      type="button"
      className={inputClassName}
      {...props}
    >
      {children}
    </button>
  );
};