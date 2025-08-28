"use client";

import styles from "./content.module.scss";
import { useLocalStorage } from "usehooks-ts";
import { MultiValue } from "react-select";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import SolChart from "../SolChart";

export const Content = () => {
  const [favoritsLs, setFavoritsLs] = useLocalStorage<MultiValue<MyFavoritsType> | []>(
    "myVavorits",
    []
  );

  return (
    <section className={styles.content}>
      {favoritsLs.map((x) => (
        <div className={styles.wrapGraphik}>
          <SolChart nameToken={x.value} />
        </div>
      ))}
    </section>
  );
};
