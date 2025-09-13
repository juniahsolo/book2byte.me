import React from "react";
import styles from "./Spinner.module.css";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <div
      className={[styles.spinner, styles[size], className].filter(Boolean).join(" ")}
      {...props}
      role="status"
      aria-label="Loading"
    >
      <div className={styles.spinnerInner}></div>
      <span className={styles.srOnly}>Loading...</span>
    </div>
  );
};
