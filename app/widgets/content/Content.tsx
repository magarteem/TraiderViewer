"use client";

import styles from "./content.module.scss";
import { useReadLocalStorage } from "usehooks-ts";
import { MultiValue } from "react-select";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import SolChart from "../SolChart";

export const Content = () => {
  const favoritsLs = useReadLocalStorage<MultiValue<MyFavoritsType> | []>("myVavorits") ?? [];

  return (
    <section className={styles.content}>
      {favoritsLs.map((x) => (
        <div key={x.value} className={styles.wrapGraphik}>
          <SolChart nameToken={x.value} />
        </div>
      ))}
    </section>
  );
};
