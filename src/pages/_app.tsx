import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import {CustomFonts} from '../../Global.js'
import "../styles/global.css"

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{
          components: {
            Input:{
              styles: {
                input: {
                  fontFamily: "Visuelt"
                },
                value: {
                  fontFamily: "Visuelt"
                }
              }
            }
          }
        }}
      >
        <Component {...pageProps} />
        <CustomFonts />
      </MantineProvider>
    </>
  );
}