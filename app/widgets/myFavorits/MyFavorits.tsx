"use client";

import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import styles from "./myFavorits.module.scss";
import { useEffect, useState } from "react";
import { Button } from "@/app/shared/ui";
import { MultiValue } from "react-select";

interface Props {
  useShowSearching: (state: boolean) => void;
  stateFavorites: MultiValue<MyFavoritsType> | [];
}

export const MyFavorits = ({ useShowSearching, stateFavorites }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.myFavorits}>
      <div className={styles.myFavoritsItemBlock}>
        {stateFavorites?.map((x) => (
          <Button
            key={x.value}
            size="sm"
            btnTypeStyle="second"
            onClick={() => {
              useShowSearching(true);
            }}
          >
            {x.label}
          </Button>
        ))}
      </div>

      <Button
        size="sm"
        onClick={() => {
          useShowSearching(true);
        }}
      >
        EDIT
      </Button>
    </div>
  );
};
