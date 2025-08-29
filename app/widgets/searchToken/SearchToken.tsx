"use client";

import styles from "./searchToken.module.scss";
import { MultiValue } from "react-select";
import { useEffect, useState } from "react";
import { Button } from "@/app/shared/ui";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import { AsyncSelectToken } from "@/app/shared/components";
import { useLocalStorage } from "usehooks-ts";
import { useMountedPage } from "@/app/shared/hooks/useMountedPage/useMountedPage";

interface Props {
  useShowSearching: (state: boolean) => void;
  stateFavorites: MultiValue<MyFavoritsType> | null;
  savedToLS: (data: MultiValue<MyFavoritsType> | []) => void;
}

export const SearchToken = ({ useShowSearching, stateFavorites, savedToLS }: Props) => {
  const [stateData, setStateData] = useState<MultiValue<MyFavoritsType> | []>(stateFavorites ?? []);
  const { mounted } = useMountedPage();
  const [favoritsLs, setFavoritsLs] = useLocalStorage<MultiValue<MyFavoritsType> | []>(
    "myVavorits",
    []
  );

  if (!mounted) return null;

  const editFavorits = (token: MyFavoritsType) => {
    if (stateFavorites) {
      console.log(token);

      const filter = stateFavorites.filter((x) => x.value !== token.value);
      setFavoritsLs(filter);
    }
  };

  return (
    <div className={styles.searchToken}>
      <div className={styles.searchBlock}>
        <div className={styles.searchField}>
          <AsyncSelectToken setStateData={setStateData} stateData={stateData} />

          <div>
            <Button
              size="sm"
              onClick={() => {
                savedToLS(stateData);
              }}
            >
              Save to LSe
            </Button>
          </div>
        </div>
        <div>
          <Button
            onClick={() => {
              useShowSearching(false);
            }}
            size="sm"
          >
            CLOSE
          </Button>
        </div>
      </div>

      {stateFavorites && (
        <div className={styles.favoritContent}>
          {stateFavorites.map((x) => (
            <div
              key={x.value}
              className={styles.token}
              onClick={() => {
                editFavorits(x);
              }}
            >
              <span className={styles.item}>{x.label}</span>
              <span className={styles.itemDell}>DELL</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
