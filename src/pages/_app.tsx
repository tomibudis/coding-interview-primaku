import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";

import "../../src/styles/globals.css";
import { store } from "../store";

const configQuery = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  const isDevEnv = process.env.NEXT_PUBLIC_ENV === "development";
  const [queryClient] = React.useState(() => new QueryClient(configQuery));
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
        {isDevEnv && <ReactQueryDevtools />}
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
