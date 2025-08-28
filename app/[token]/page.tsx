"use client";

import { use } from "react";
import { useGetCointItem } from "../api/requests/useGetCointItem";
import { Button } from "../shared/ui";
import { useRouter } from "next/navigation";
import SolChart from "../widgets/SolChart";
import { CalcSumm } from "../widgets/calcSumm/CalcSumm";
import styles from "./item.module.scss";

type Params = { token: string };

export default function Page({ params }: { params: Promise<Params> }) {
  const { token } = use(params);
  const { data, isLoading } = useGetCointItem(token);
  const { push } = useRouter();

  if (isLoading || !data) {
    return <p>Loading ... </p>;
  }

  return (
    <div className={styles.details}>
      <div className={styles.info}>
        <p>{data.symbol}</p>
        <p>{data.price}</p>
      </div>

      <CalcSumm summ={data.price} />

      <div>
        <Button
          size="large"
          btnTypeStyle="second"
          onClick={() => {
            push("/");
          }}
        >
          Go Back
        </Button>
      </div>
      <SolChart nameToken={token} />
    </div>
  );
}
