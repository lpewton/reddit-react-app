import React, { useEffect, useState } from "react";
import { selectFavoriteArticles } from "./favoritesSlice";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from "./favoritesSlice";


export default function Favorites() {
    const favoriteArticles = useSelector(selectFavoriteArticles);
    const [favoritesTitles, setFavoritesTitles] = useState([]);

    const dispatch = useDispatch();
    const onRemoveArticleHandler = (article) => {
            dispatch(removeFavorite(article));
    };

    useEffect(() => {
        // Using map to extract article titles and update state
        const titles = favoriteArticles.map(article => article.data.title);
        setFavoritesTitles(titles);
    }, [favoriteArticles]);

    return (
        <div>
            <h2>Your top picks</h2>
            {favoriteArticles.map((article) => (
                <div className="cardDiv" key={article.data.id}>
                    <div className="cardHeader">
                        <h4>{article.data.title}</h4>
                        <div>
                            <button className="likeButton">
                                <i className="fa-sharp fa-solid fa-xmark" article={article.data.id} onClick={() => onRemoveArticleHandler(article)}></i>
                            </button>
                        </div>
                    </div>
                    <Link to={article.data.url} target="_blank">
                        <img src={article.data.thumbnail} alt="Article image"></img>
                    </Link>
            <form>
                <label>New Note:</label>
                <input type="text"></input>
                <button type="submit">Add note</button>
            </form>
                </div>
            ))}
        </div>
    )
}