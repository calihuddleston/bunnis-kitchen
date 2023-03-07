import React from "react";
import { AiOutlineHeart } from "react-icons/ai"
import strawberries1 from "../assets/strawberries1.jpg"


export default function Home () {
    return (
        <div>
            <div>
                <header>
                    <button>ORDER HERE</button>
                </header>
            </div>
            <div id="menu">
                <div id="heart">
                <AiOutlineHeart />
                <p>Valentine's</p>
                <AiOutlineHeart />
                </div>
                <div><p>Sweet's & Treat's</p></div>
                <div id="chocolate-strawberries">
                <p id="chocolate">Chocolate Strawberries</p>
                <img src={strawberries1} height="400px" id="strawberries1"></img>
                </div>
            </div>
        </div>
    )
}