import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.css";
import CardButton from "./CardButtons"

export default function Projects() {
    const sliderRef = useRef(null); // Ref to control the slider

    const data = [
        {
            ProjectName: "E-Cell",
            imgUrl: "/ecell.png",
            content: "Developed a simple website using HTML and CSS to strengthen my skills in design and responsiveness .",
        },
        {
            ProjectName: "Currency Converter",
            imgUrl: "/converter.png",
            content: "Created a currency converter using React to improve my skills in state management and API integration.",
        },
        {
            ProjectName: "Gaming Tools",
            imgUrl: "/game.png",
            content: "Developed a basic e-commerce web using HTML and CSS to practice building styling user interfaces.",
        },
        {
            ProjectName: "Todo App",
            imgUrl: "/todo.png",
            content: "Built a React-based to-do app with update, and delete functionality to strengthen my skills in state management.",
        },
        {
            ProjectName: "Password Generator",
            imgUrl: "/password.png",
            content: "Created a random password generator using react to enhance logic-building skills and user interface design.",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="appear w-full p-2 mt-5 bg-white dark:bg-black">
            <div className="m-auto border-solid p-2 border-2 border-slate-300 lg:px-20 shadow-md bg-white rounded-md relative dark:bg-black dark:border-[rgb(28,135,255)]">
                <h1 className="text-black text-3xl p-3 dark:text-white">Project Section</h1>
                <Slider ref={sliderRef} {...settings}>
                    {data.map((project, index) => (
                        <div key={index} className="p-2 transform hover:scale-102 transition duration-300">
                            <div className="flex flex-col h-full p-6 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 bg-white dark:bg-black dark:border-[rgb(28,135,255)]">
                                <img
                                    src={project.imgUrl}
                                    alt={project.ProjectName}
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                                <div className="flex flex-col justify-between flex-grow px-4 py-4 text-black dark:text-white">
                                    <h5 className="font-bold text-lg mb-2">{project.ProjectName}</h5>
                                    <p className="text-sm flex-grow">{project.content}</p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <CardButton
                                        to="https://reactjs-five-phi.vercel.app/"
                                        children="Live Demo"
                                        className="bg-orange-700"
                                        target="_blank"
                                    />

                                    <CardButton to="/" children="Source Code" className="bg-blue-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
