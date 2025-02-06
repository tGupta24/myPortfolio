import React from "react"
import { Link } from "react-router-dom"

export default function Img({
    tag,
    src,
    to,

}) {
    return (
        <>  <div className="flex flex-col justify-between items-center ">
            <img
                src={src}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
            <Link to={to}
                className="sm:text-xl font-bold dark:text-white p-2"> {tag}
            </Link>
        </div>
        </>
    )
}