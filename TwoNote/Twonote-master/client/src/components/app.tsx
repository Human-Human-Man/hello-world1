import Home from "../pages/home";
import Notes from "../pages/notes";
import Chat from "../pages/chat";
import Calendar from "../pages/calendar"
import NotFound from "../pages/not-found";
import React from "react";
import Sidebar from "./sidebar";
import { useRoutes } from "hookrouter";
import { style } from "typestyle";

export default function App(): JSX.Element {
  return (
    <>
      <Sidebar />
      <main className={style({ paddingLeft: "20px" })}>
        {useRoutes({ "/": Home, "/notes": Notes, "/chat": Chat, "/calendar": Calendar }) ?? <NotFound />}
      </main>
    </>
  );
}
