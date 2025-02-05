import React, { useEffect, useRef, useState } from "react";
import useTheme from "../theme/theme";
import useAPI from "../theme/theme";

export default function ThemeBtn() {

    const { theme, lightTheme, darkTheme } = useTheme();
    const imgRef = useRef(null);
    const [img, setImg] = useState(() => {
        const storedImg = localStorage.getItem("img");
        if (storedImg) {
            return storedImg;
        }
        return "/dark.png"
    })

    const { showMenuBar } = useAPI();

    const onChangeBtn = (e) => {
        showMenuBar();
        const darkModeStatus = theme
        if (darkModeStatus == "light") {
            darkTheme();
            setImg("/light.png")
        }
        else {
            lightTheme();
            setImg("/dark.png")

        }
    }
    useEffect(() => {
        localStorage.setItem("img", img);
    }, [img])
    const mode = theme == "dark" ? "Light" : "Dark";
    return (

        <button class="bg-gray-800 text-white font-medium py-2 px-4 rounded-full  flex 
                 hover:bg-gray-700 dark:bg-slate-300 dark:text-black dark:hover:bg-gray-200"
            onClick={onChangeBtn}
        >
            <img ref={imgRef} src={img} alt="" className="invert p-1 dark:invert-0" />
            {mode}
        </button>


    );
}