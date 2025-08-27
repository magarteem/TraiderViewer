import styles from "./calcSumm.module.scss";

interface Props {
  summ: string;
}

export const SummRow = ({ summ }: Props) => {
  return (
    <div className={styles.calcSumm}>
      <h1>{summ}</h1>
    </div>
  );
};
