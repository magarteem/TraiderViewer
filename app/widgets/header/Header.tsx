"use client"

import { PropsWithChildren, useState } from "react";
import s from "./header.module.scss";
import { useGetCointList } from "@/app/api/requests/useGetCointList";
import AsyncSelect from 'react-select/async';
import { CointsType, ResponseCointsType } from "@/app/api/types/cointsType";
import { MultiValue } from "react-select";
import { Button } from "@/app/shared/ui/button/Button";

type Option = {
  label: string;
  value: string;
  price: number;
};

interface Props {
  className?: string;
}
export const Header = () => {
  const [stateData, useStateData] = useState<MultiValue<Option> | []>([])
  const {data} = useGetCointList()

  if (!data)     return

  const loadOptions = async (inputValue: string): Promise<Option[]> => {
    if (!data) return [];
  
    // фильтруем по введенному тексту
    const filtered = data.filter((x) =>
      x.symbol.toLowerCase().includes(inputValue.toLowerCase())
    );
  
    return filtered.map((x) => ({
      label: `${x.symbol} — ${x.price}`,
      value: x.symbol,
      price: x.price,
    }));
  };

  const handleChange = (selected: MultiValue<Option> | null) => {
    if (selected) {
      console.log("Выбрано:", selected);
      useStateData(selected)
    }
  };

  return (
    <section className={s.header}>
 <AsyncSelect
        cacheOptions
        isMulti
        defaultOptions={data?.map((x) => ({
          label: `${x.symbol} — ${x.price}`,
          value: x.symbol,
          price: x.price,
        }))}
        onChange={handleChange}
        loadOptions={loadOptions}
        placeholder="Выберите токен..."
      />

      <Button >Save to Local Storage</Button>

      {
        stateData?.map(x=><p key={x.value}>{x.label}</p>)
      }
    </section>
  );
};
