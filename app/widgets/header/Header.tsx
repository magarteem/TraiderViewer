"use client";

import { useState } from "react";
import styles from "./header.module.scss";
import { SearchToken } from "./searchToken/SearchToken";
import { MyFavorits } from "./myFavorits/MyFavorits";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { MultiValue } from "react-select";

export const Header = () => {
  //const favoritsLs = useReadLocalStorage<MyFavoritsType[]>("myVavorits");
  const [favorites, setFavorites] = useLocalStorage("myVavorits", {});
  const [stateFavorites, useStateFavorites] = useState<MultiValue<MyFavoritsType> | []>(favorites);

  const [showSearching, useShowSearching] = useState(false);

  const setStateFavorits = (selected: MultiValue<MyFavoritsType>) => {
    setFavorites(selected);
    useStateFavorites(selected);
  };

  return (
    <section className={styles.header}>
      {showSearching || !stateFavorites ? (
        <SearchToken
          stateFavorites={stateFavorites}
          useShowSearching={useShowSearching}
          setStateFavorits={setStateFavorits}
        />
      ) : (
        <MyFavorits useShowSearching={useShowSearching} setStateFavorits={setStateFavorits} />
      )}
    </section>
  );
};
