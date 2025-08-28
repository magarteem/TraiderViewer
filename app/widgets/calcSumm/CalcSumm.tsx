import { arraySum } from "@/app/shared/const/calcProcent";
import { SummRow } from "./SummRow";
import styles from "./calcSumm.module.scss";
import { useState } from "react";
import { Input } from "@/app/shared/ui";

interface Props {
  summ: string;
}

export const CalcSumm = ({ summ }: Props) => {
  const [value, setValue] = useState(summ);
  const v = !!value ? value : summ;
  const modifyValue = +v.replace(/[,;:\s]+/g, ".");

  return (
    <div className={styles.calcSumm}>
      <Input
        containerClassName={styles.widthInput}
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
        onFocus={() => {
          setValue("");
        }}
        onBlur={() => {
          setValue("");
        }}
      />

      <h1>{modifyValue.toFixed(3)}</h1>

      <div className={styles.mainCalc}>
        <div className={styles.div1}>
          {arraySum.slice(0, 9).map((x) => (
            <SummRow key={x} summ={modifyValue} procent={x} />
          ))}
        </div>
        <div className={styles.div2}>
          {arraySum.slice(9).map((x) => (
            <SummRow key={x} summ={modifyValue} procent={x} />
          ))}
        </div>
      </div>
    </div>
  );
};
