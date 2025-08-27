"use client";

import { useGetCointList } from "@/app/api/requests/useGetCointList";
import { MultiValue } from "react-select";
import AsyncSelect from "react-select/async";
import { MyFavoritsType } from "@/app/shared/types/myFavoritsCoints";
import styles from "./asyncSelectToken.module.scss";

interface Props {
  stateData: MultiValue<MyFavoritsType> | [];
  setStateData: (selected: MultiValue<MyFavoritsType>) => void;
}

export const AsyncSelectToken = ({ stateData, setStateData }: Props) => {
  const { data, isLoading } = useGetCointList();

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
    if (selected) setStateData(selected);
  };

  if (isLoading) return <h1 style={{ color: "red" }}>Loading...</h1>;

  return (
    <AsyncSelect
      cacheOptions
      isMulti
      value={stateData}
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
