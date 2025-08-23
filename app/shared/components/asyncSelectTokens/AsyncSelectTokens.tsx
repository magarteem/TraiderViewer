"use client";

import styles from "./asyncSelectTokens.module.scss";
import { useGetCointList } from "@/app/api/requests/useGetCointList";
import AsyncSelect from "react-select/async";
import { MultiValue } from "react-select";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import { useState } from "react";

interface Props {
  stateFavorites: MultiValue<MyFavoritsType> | [];
  setStateFavorits: (selected: MultiValue<MyFavoritsType>) => void;
}

export const AsyncSelectTokens = ({}: Props) => {
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
      //useStateData(selected);
    }
  };

  if (isLoading) {
    return <h1 style={{ color: "red" }}>Loading...</h1>;
  }

  return (
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
  );
};
