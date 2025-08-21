import styles from "./page.module.css";
import SolChart from "./widgets/SolChart";
import { Content } from "./widgets/content/Content";

export default function Home() {
  return (
  
      <main className={styles.page}>
        <div style={{ width: "90%", height: "500px" }}>
          {/*<SolChart />*/}
        </div>

        <Content/>
      </main>
  );
}
