"use client";

import { useState } from "react";
import styles from "./header.module.scss";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import { useLocalStorage } from "usehooks-ts";
import { SearchToken } from "../searchToken/SearchToken";
import { MyFavorits } from "../myFavorits";
import { MultiValue } from "react-select";

export const Header = () => {
  const [favoritsLs, setFavoritsLs] = useLocalStorage<MultiValue<MyFavoritsType> | []>(
    "myVavorits",
    []
  );
  const [showSearching, useShowSearching] = useState(false);

  const savedToLS = (data: MultiValue<MyFavoritsType> | []) => {
    if (data.length > 0) {
      setFavoritsLs(data);
      useShowSearching(false);
    }
  };

  return (
    <section className={styles.header}>
      {showSearching || !favoritsLs ? (
        <SearchToken
          useShowSearching={useShowSearching}
          stateFavorites={favoritsLs}
          savedToLS={savedToLS}
        />
      ) : (
        <MyFavorits useShowSearching={useShowSearching} stateFavorites={favoritsLs} />
      )}
    </section>
  );
};
