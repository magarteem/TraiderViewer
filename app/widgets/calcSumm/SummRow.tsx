import { useState } from "react";
import styles from "./calcSumm.module.scss";

interface Props {
  summ: number;
  procent: number;
}

export const SummRow = ({ summ, procent }: Props) => {
  const [value, setValue] = useState("");
  const s = +value.replace(/[,;:\s]+/g, ".");

  return (
    <div className={styles.calcSumm}>
      <h1>{summ.toFixed(3)}</h1>
      {procent} % <b style={{ color: "blue", width: "50px" }}>{summ.toFixed(3)}</b>
      &nbsp;&nbsp;
      {/*<b style={{color:"green", width:"50px"}}> {float(s + result)}</b>
<b style={{color:"red", width:"50px"}}>-${float(s - result)}</b>*/}
    </div>
  );
};
