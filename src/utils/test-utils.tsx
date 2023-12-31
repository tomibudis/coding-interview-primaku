import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";

import { store } from "../store";

const queryClient = new QueryClient({});

const ReactQueryProvider: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: ReactQueryProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
