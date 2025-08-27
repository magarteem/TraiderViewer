import styles from "./input.module.scss";
import { forwardRef } from "react";
import classNames from "classnames";

type Props = {
  containerClassName?: string;
  children?: React.ReactNode;
} & React.HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ children, containerClassName, ...props }, ref) => {
    return (
      <div className={classNames(styles.container, containerClassName)}>
        <input ref={ref} {...props} />
        {children}
      </div>
    );
  }
);
