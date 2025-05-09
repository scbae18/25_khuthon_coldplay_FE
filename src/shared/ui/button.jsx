export function Btn({
  variant = "default", // "default" | "cancel"
  disabled = false,
  onClick,
  children,
  className = "",
}) {
  const baseStyle =
    "py-3 rounded-xl text-center text-[16px] font-semibold transition-all";

  const styles = {
    default: "bg-green-500 text-white",
    cancel: "bg-gray-200 text-black",
    disabled: "bg-gray-300 text-white cursor-not-allowed",
  };

  const appliedStyle = disabled
    ? styles.disabled
    : styles[variant] || styles.default;

  return (
    <button
      className={`${baseStyle} ${appliedStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
