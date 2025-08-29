import Link from "next/link";
import { Button } from "../shared/ui";
import styles from "./liquidationPercentage.module.scss";

export default function LiquidationPercentage() {
  return (
    <div className={styles.liquidationPercentage}>
      <table>
        <thead>
          <tr>
            <td>Плечо</td>
            <td>% от депозита</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>x2</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>x5</td>
            <td>20%</td>
          </tr>

          <tr>
            <td>x10</td>
            <td>10%</td>
          </tr>

          <tr>
            <td>x20</td>
            <td>5%</td>
          </tr>

          <tr>
            <td>x30</td>
            <td>4%</td>
          </tr>

          <tr>
            <td>x31</td>
            <td>3.9%</td>
          </tr>

          <tr>
            <td>x32</td>
            <td>3.8%</td>
          </tr>

          <tr>
            <td>x40</td>
            <td>3%</td>
          </tr>

          <tr>
            <td>x50</td>
            <td>2%</td>
          </tr>

          <tr>
            <td>X100 - X125</td>
            <td>1%</td>
          </tr>
        </tbody>
      </table>

      <Link className={styles.link} href="/">
        Go Back
      </Link>
    </div>
  );
}
