import type { ButtonProps } from "./Button.type";


export function Button({
    variant = "primary",
    children,
}: ButtonProps) {
    return (
        <button
            style={{
                background: variant === "primary" ? "#2563eb" : "#e5e7eb",
                color: variant === "primary" ? "white" : "black",
                padding: "8px 12px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    );
}
