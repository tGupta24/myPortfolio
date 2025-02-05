import React from "react";

export default function Card() {


    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black border-solid">
                <img src="" alt="" class="w-full" />
                <div class="px-6 py-4">
                    <h5 class="font-bold text-xl mb-2">Card title</h5>
                    <p class="text-gray-700 text-base">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <a href="#" class="inline-block bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600">
                        Go somewhere
                    </a>
                </div>
            </div>

        </>
    );
}