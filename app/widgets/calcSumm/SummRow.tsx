import styles from "./calcSumm.module.scss";

interface Props {
  summ: number;
  procent: number;
}

export const SummRow = ({ summ, procent }: Props) => {
  const result = (summ * procent) / 100;
  const float = (num: number) => Number(num.toFixed(3));

  return (
    <div className={styles.calcSumm}>
      {procent} % <b style={{ color: "blue", width: "50px" }}>{float(result)}</b>
      &nbsp;&nbsp;
      <b style={{ color: "green", width: "50px" }}> {float(summ + result)}</b>
      <b style={{ color: "red", width: "50px" }}>-${float(summ - result)}</b>
    </div>
  );
};
