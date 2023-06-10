import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
// import { JsxElement } from "typescript";

export type landingLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

