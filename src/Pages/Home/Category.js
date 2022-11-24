import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { name, img } = category;
    return (
        <div>
            <article className="flex flex-col bg-blue-100 text-center rounded-full ">
                <Link className="flex flex-col flex-1 p-4">
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug flex items-center justify-center">
                        <span>
                            <img src={img} alt="" className="w-6 lg:w-8 mr-2" />
                        </span>
                        <span>{name}</span>
                    </h3>
                </Link>
            </article>
        </div>
    );
};

export default Category;
