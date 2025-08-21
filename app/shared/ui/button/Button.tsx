import { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type ButtonTypes = "primary" | "second";

type Props = {
  btnTypeStyle?: ButtonTypes;
  children?: ReactNode;
  size?: "sm" | "large";
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  btnTypeStyle = "primary",
  className,
  children,
  size = "sm",
  ...props
}: Props) => {
  let typeButtonClass;
  switch (btnTypeStyle) {
    case "second":
      typeButtonClass = styles.second;
      break;
    default:
      typeButtonClass = styles.primary;
      break;
  }
  return (
    <button
      className={classNames(
        typeButtonClass,
        { [styles.large]: size === "large" },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
