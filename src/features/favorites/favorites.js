import React from "react";
import { selectFavoriteArticles } from "./favoritesSlice";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Favorites() {
    const favoriteArticles = useSelector(selectFavoriteArticles);


    return (
        <div>
            <h2>Your top picks</h2>
            {favoriteArticles.map((article) => (
                <div className="cardDiv" key={article.data.id}>
                        <div className="cardHeader">
                            <h4>{article.data.title}</h4>
                            <div>
                                <button>
                                    <i className="fa-regular fa-heart" article={article.data.id}></i>
                                </button>
                            </div>
                        </div>
                    <Link to={article.data.url} target="_blank">
                        <img src={article.data.thumbnail} alt="Article image"></img>
                </Link>
                    </div>
            ))}
        </div>
    )
}