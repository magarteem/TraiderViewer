"use client";

import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import styles from "./myFavorits.module.scss";
import { useReadLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";
import { Button } from "@/app/shared/ui";

interface Props {
  useShowSearching: (state: boolean) => void;
  favoritsLs: MyFavoritsType[] | null;
}

export const MyFavorits = ({ useShowSearching, favoritsLs }: Props) => {
  //const stored = useReadLocalStorage<MyFavoritsType[]>("myVavorits");
  //const [favorites, setFavorites] = useState<MyFavoritsType[] | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //useEffect(() => {
  //  setFavorites(stored ?? []);
  //}, [stored]);

  if (!mounted) {
    return null;
  }

  //if (!favorits) {
  //  return;
  //}
  return (
    <div className={styles.myFavorits}>
      <div className={styles.myFavoritsItemBlock}>
        {favoritsLs?.map((x) => (
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
