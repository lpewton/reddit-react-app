import React from "react";
import { selectFavoriteArticles } from "./favoritesSlice";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from "./favoritesSlice";
import Notes from "../notes/notes";


export default function Favorites() {
    const favoriteArticles = useSelector(selectFavoriteArticles);

    const dispatch = useDispatch();
    
    const onRemoveArticleHandler = (article) => {
        dispatch(removeFavorite(article));
    };

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
                    <Notes id={article.data.id}/>
                </div>
            ))}
        </div>
    )
}