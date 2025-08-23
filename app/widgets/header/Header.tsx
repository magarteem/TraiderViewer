"use client";

import { useState } from "react";
import styles from "./header.module.scss";
import { SearchToken } from "./searchToken/SearchToken";
import { MyFavorits } from "./myFavorits/MyFavorits";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import { useReadLocalStorage } from "usehooks-ts";

export const Header = () => {
  const favoritsLs = useReadLocalStorage<MyFavoritsType[]>("myVavorits");
  const [showSearching, useShowSearching] = useState(false);

  return (
    <section className={styles.header}>
      {showSearching ? (
        <SearchToken useShowSearching={useShowSearching} favoritsLs={favoritsLs} />
      ) : (
        <MyFavorits useShowSearching={useShowSearching} favoritsLs={favoritsLs} />
      )}
    </section>
  );
};
