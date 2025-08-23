"use client";

import { useGetCointList } from "@/app/api/requests/useGetCointList";
import styles from "./searchToken.module.scss";
import AsyncSelect from "react-select/async";
import { MultiValue } from "react-select";
import { useState } from "react";
import { Button } from "@/app/shared/ui";
import { useLocalStorage } from "usehooks-ts";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import { AsyncSelectTokens } from "@/app/shared/components";

interface Props {
  useShowSearching: (state: boolean) => void;
  stateFavorites: MultiValue<MyFavoritsType> | [];
  setStateFavorits: (selected: MultiValue<MyFavoritsType>) => void;
}

export const SearchToken = ({ useShowSearching, stateFavorites, setStateFavorits }: Props) => {
  const { data, isLoading } = useGetCointList();

  if (!data) return;

  const handleChange = (selected: MultiValue<MyFavoritsType> | null) => {
    if (selected) {
      setStateFavorits(selected);
    }
  };

  const savedToLS = () => {
    if (stateFavorites.length > 0) {
      setStateFavorits(stateFavorites);
      useShowSearching(false);
    }
  };

  if (isLoading) {
    return <h1 style={{ color: "red" }}>Loading...</h1>;
  }
  return (
    <div className={styles.searchToken}>
      <div className={styles.searchBlock}>
        <div className={styles.searchField}>
          <AsyncSelectTokens setStateFavorits={setStateFavorits} stateFavorites={stateFavorites} />

          <div>
            <Button size="sm" onClick={savedToLS}>
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

      {favoritsLs && (
        <div className={styles.favoritContent}>
          {favoritsLs.map((x) => (
            <div key={x.value} className={styles.token}>
              <span className={styles.item}>{x.label}</span>
              <span className={styles.itemDell}>DELL</span>
            </div>
          ))}

          <Button
            onClick={() => {
              //useShowSearching(false);
            }}
            size="sm"
          >
            UPDATE
          </Button>
        </div>
      )}
    </div>
  );
};
