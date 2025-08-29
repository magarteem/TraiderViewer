"use client";

import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import styles from "./myFavorits.module.scss";
import { useEffect, useState } from "react";
import { Button } from "@/app/shared/ui";
import { MultiValue } from "react-select";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useMountedPage } from "@/app/shared/hooks/useMountedPage/useMountedPage";

interface Props {
  useShowSearching: (state: boolean) => void;
  stateFavorites: MultiValue<MyFavoritsType> | [];
}

export const MyFavorits = ({ useShowSearching, stateFavorites }: Props) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { mounted } = useMountedPage();

  if (!mounted) return null;

  const openDetailsToken = (value: string) => {
    console.log("gggggggggggggggg", value, pathname);
    push(value);
  };

  return (
    <div className={styles.myFavorits}>
      <div className={styles.myFavoritsItemBlock}>
        {stateFavorites?.map((x) => (
          <Button
            key={x.value}
            size="sm"
            btnTypeStyle="second"
            onClick={() => openDetailsToken(x.value)}
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
