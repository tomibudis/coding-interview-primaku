import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, createStore } from "~/store";

const queryClient = new QueryClient({});

const ReactQueryProvider: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider createStore={createStore}>{children}</Provider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: ReactQueryProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
