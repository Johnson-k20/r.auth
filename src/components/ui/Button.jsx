function Button({
  as: Component = "button",
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-cyan-500 text-slate-950 hover:bg-cyan-400",

    secondary:
      "border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-white",
  };

  return (
    <Component
      className={`rounded-full px-6 py-3 font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;