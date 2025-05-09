export function Btn({
    variant = "default",         // default | cancel
    disabled = false,           // 비활성화 여부
    onClick,
    children,
    className = "",             // 외부 커스터마이징용
  }) {
    const baseStyle =
      "py-3 rounded-xl text-center text-[16px] font-semibold";
  
    const styles = {
      default: "bg-green-400 text-white hover:bg-green-500",
      cancel: "bg-gray-200 text-white hover:bg-gray-300",
      disabled: "bg-gray-400 text-gray-500 cursor-not-allowed",
    };
  
    const appliedStyle = disabled
      ? styles.disabled
      : styles[variant] || styles.default;
  
    return (
      <button
        type="button"
        className={`${baseStyle} ${appliedStyle} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  