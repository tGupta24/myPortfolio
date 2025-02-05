import React from "react";
import useAPI from "../theme/theme";


export default function Menubtn() {

    const { isMenubar, showMenuBar } = useAPI();
    const open = () => {
        showMenuBar();
    }
    return (
        <div>
            <button className="h-10"
                onClick={open}
            >
                <img
                    id="menubtn"
                    className="w-10 filter invert dark:invert-0"
                    src="/menu.svg"
                    alt="Menu"
                />
            </button>
        </div>
    );
}