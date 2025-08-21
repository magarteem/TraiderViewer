import styles from "./page.module.css";
import SolChart from "./widgets/SolChart";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: "90%", height: "500px" }}>
          <SolChart />
        </div>
      </main>
    </div>
  );
}
