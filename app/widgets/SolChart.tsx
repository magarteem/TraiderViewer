"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ApexCharts from "apexcharts";

// Для Next.js — динамический импорт
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Candle = {
  x: Date;
  y: [number, number, number, number]; // [open, high, low, close]
};

interface Props {
  nameToken: string;
}

export default function SolChart({ nameToken }: Props) {
  const [series, setSeries] = useState<{ name: string; data: Candle[] }[]>([
    { name: "SOL/USDT", data: [] },
  ]);
  const [lastPrice, setLastPrice] = useState<number | null>(null);

  async function fetchData() {
    const res = await fetch(
      `https://data-api.binance.vision/api/v3/klines?symbol=${nameToken}&interval=1m&limit=100`
    );
    const raw = await res.json();

    const candles: Candle[] = raw.map((c: any) => ({
      x: new Date(c[0]),
      y: [
        parseFloat(c[1]), // open
        parseFloat(c[2]), // high
        parseFloat(c[3]), // low
        parseFloat(c[4]), // close
      ],
    }));

    setSeries([{ name: "SOL/USDT", data: candles }]);
    setLastPrice(parseFloat(raw[raw.length - 1][4])); // последний close
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000); // обновляем каждую секунду
    return () => clearInterval(interval);
  }, []);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "candlestick",
      height: 500,
      background: "#fff",
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "SOL/USDT — Binance",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true, // шкала цен справа
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
    },
    annotations: {
      yaxis: [
        lastPrice
          ? {
              y: lastPrice,
              borderColor: "#00E396",
              label: {
                borderColor: "#00E396",
                style: {
                  color: "#fff",
                  background: "#00E396",
                },
                text: `Текущая цена: ${lastPrice.toFixed(2)} USDT`,
              },
            }
          : {},
      ],
    },
  };

  return (
    <div className="p-4 bg-white shadow rounded-2xl">
      <ReactApexChart options={options} series={series} type="candlestick" height={500} />
    </div>
  );
}
