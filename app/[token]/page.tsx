"use client";

import { use } from "react";
import { useGetCointItem } from "../api/requests/useGetCointItem";
import { Button } from "../shared/ui";
import { useRouter } from "next/navigation";
import SolChart from "../widgets/SolChart";

type Params = { token: string };

export default function Page({ params }: { params: Promise<Params> }) {
  const { token } = use(params);
  const { data, isLoading } = useGetCointItem(token);
  const { push } = useRouter();

  console.log(data);

  if (isLoading || !data) {
    return <p>Loading ... </p>;
  }

  return (
    <div>
      <h1>{token}</h1>
      <p>{data.symbol}</p>
      <p>{data.price}</p>

      <SolChart nameToken={token} />

      <Button
        size="sm"
        btnTypeStyle="second"
        onClick={() => {
          push("/");
        }}
      >
        Go Back
      </Button>
    </div>
  );
}
