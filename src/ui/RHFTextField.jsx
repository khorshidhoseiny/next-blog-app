export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  disabled,
  validationSchema = {},
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        disabled={disabled}
        id={name}
        dir={dir}
<<<<<<< HEAD
        className={`textField__input ${disabled && "text-secondary-600 "} ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
=======
        className={`textField__input bg-secondary-300/30 ${
          disabled && "text-secondary-600 "
        } ${dir === "ltr" ? "text-left" : "text-right"}`}
>>>>>>> fix resposive mobile bugs
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
