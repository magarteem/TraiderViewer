//arraySum.forEach((elem) => {
//  const s = +summ.value.replace(/[,;:\s]+/g, ".");
//  const sringProcent = document.getElementById(elem);
//  const data = sringProcent.getAttribute("data-" + elem);
//  const result = (s * +data) / 100;

//  sringProcent.innerHTML =
//    data +
//    " % = " +
//    ` <b style="color:blue; width:50px"> ${float(result)} </b>` +
//    `$ &nbsp;&nbsp;<b style="color:green; width:50px">+${float(
//      s + result
//    )}</b> <b style="color:red; width:50px">-${float(s - result)}</b>`;
//});

import { arraySum } from "@/app/shared/const/calcProcent";
import { SummRow } from "./SummRow";
import styles from "./calcSumm.module.scss";
import { Input } from "@/app/shared/ui";

interface Props {
  summ: number;
}

export const CalcSumm = ({ summ }: Props) => {
  return (
    <div className={styles.calcSumm}>
      <h1>{summ}</h1>
      <Input />
      {arraySum.map((x) => (
        <SummRow key={x} summ={+summ} procent={x} />
      ))}
    </div>
  );
};
