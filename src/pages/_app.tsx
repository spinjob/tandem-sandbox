import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          "colors": {
            "purple": [
              "#E5E6FF",
              "#B8B8FF",
              "#8A8BFF",
              "#5C5DFF",
              "#2E30FF",
              "#0002FF",
              "#0002CC",
              "#000199",
              "#000166",
              "#000033"
            ],
            "green": [
              "#F1FDE8",
              "#D8F9BD",
              "#BFF693",
              "#A6F269",
              "#8DEE3F",
              "#73EB14",
              "#5CBC10",
              "#458D0C",
              "#2E5E08",
              "#172F04",
            ],
            "gray": [
              "#F4F2F1",
              "#E0DBD7",
              "#CCC4BD",
              "#B8ADA3",
              "#A49689",
              "#90806F",
              "#746658",
              "#574D42",
              "#3A332C",
              "#1D1A16"
            ],
            "orange": [
              "#FFF4E5",
              "#FFE1B8",
              "#FFCE8A",
              "#FFBA5C",
              "#FFA72E",
              "#FF9400",
              "#CC7600",
              "#995900",
              "#663B00",
              "#331E00"
            ],
            "red": [
              "#FFE7E5",
              "#FFBBB8",
              "#FF908A",
              "#FF645C",
              "#FF392E",
              "#FF0D00",
              "#CC0B00",
              "#990800",
              "#660500",
              "#330300"
            ],
            "yellow": [
              "#F4F2F1",
              "#E0DBD7",
              "#CCC4BD",
              "#B8ADA3",
              "#A49689",
              "#90806F",
              "#746658",
              "#574D42",
              "#3A332C",
              "#1D1A16"
            ]
          },
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}