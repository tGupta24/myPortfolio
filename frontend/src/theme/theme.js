import React, { createContext, useContext } from "react";

export const Context = createContext({
    theme: "light",
    darkTheme: () => { },
    lightTheme: () => { },

    isMenuBar: "false",
    showMenuBar:()=>{ },
    hideMenuBar:()=>{ }
});

export const Provider = Context.Provider;

export default function useAPI() {
    return useContext(Context);
}