"use client";

import { useGetCointList } from "@/app/api/requests/useGetCointList";
import styles from "./searchToken.module.scss";
import AsyncSelect from "react-select/async";
import { MultiValue } from "react-select";
import { useState } from "react";
import { Button } from "@/app/shared/ui";
import { useLocalStorage } from "usehooks-ts";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";

interface Props {
  useShowSearching: (state: boolean) => void;
  favoritsLs: MyFavoritsType[] | null;
}

export const SearchToken = ({ useShowSearching, favoritsLs }: Props) => {
  const [stateData, useStateData] = useState<MultiValue<MyFavoritsType> | []>([]);
  const [favorites, setFavorites] = useLocalStorage("myVavorits", stateData);
  const { data, isLoading } = useGetCointList();

  if (!data) return;

  const loadOptions = async (inputValue: string): Promise<MyFavoritsType[]> => {
    if (!data) return [];

    // фильтруем по введенному тексту
    const filtered = data.filter((x) => x.symbol.toLowerCase().includes(inputValue.toLowerCase()));

    return filtered.map((x) => ({
      label: x.symbol,
      value: x.symbol,
      price: x.price,
    }));
  };

  const handleChange = (selected: MultiValue<MyFavoritsType> | null) => {
    if (selected) {
      useStateData(selected);
    }
  };

  const savedToLS = () => {
    if (stateData.length > 0) {
      setFavorites(stateData);
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
          <AsyncSelect
            cacheOptions
            isMulti
            defaultOptions={data?.map((x) => ({
              label: x.symbol,
              value: x.symbol,
              price: x.price,
            }))}
            onChange={handleChange}
            loadOptions={loadOptions}
            placeholder="Выберите токен..."
            className={styles.selector}
          />
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
