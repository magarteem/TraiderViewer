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
  return (
    <div className={styles.myFavorits}>
      <div className={styles.myFavoritsItemBlock}>
        {stateFavorites?.map((x) => (
          <Button key={x.value} size="sm" btnTypeStyle="second" onClick={() => push(x.value)}>
            {x.label}
          </Button>
        ))}
      </div>

      <div className={styles.btnGroup}>
        <Button
          size="sm"
          onClick={() => {
            useShowSearching(true);
          }}
        >
          EDIT
        </Button>
        <Button
          size="sm"
          onClick={() => {
            push("/liquidationPercentage");
          }}
        >
          Likvidation
        </Button>
      </div>
    </div>
  );
};
