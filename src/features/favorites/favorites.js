import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Notes from "../notes/notes";

export default function Favorites() {
    const [favoriteArticles, setFavoriteArticles] = useState([]);

    // Retrieve data from localStorage
    const storedArticlesString = localStorage.getItem('favorites');
    // Retrieve existing data from local storage
    let parsedData = JSON.parse(storedArticlesString);

    // Add the favorite Articles to the Front end
    useEffect(() => {
        if (storedArticlesString) {
            // Set the parsed data to the state
            for (const article of parsedData) {
                setFavoriteArticles((prevArticles) => [...prevArticles, article]);
            }
        }
    },[]);

    // Remove articles from LocalStorage and Front end
    const onRemoveArticleHandler = (article) => {
        
        // Ensure existingData is an array
        parsedData = Array.isArray(parsedData) ? parsedData : [];
        
        // Filter out the article to remove
        const updatedData = parsedData.filter((existingArticle) => existingArticle.data.title !== article.data.title);
        
        // Set the updated data back to local storage
        localStorage.setItem('favorites', JSON.stringify(updatedData));
        setFavoriteArticles(updatedData);
    };


    return (
        <div className="container">
            <h2 className="mt-3">Your top picks</h2>
            <div className="row d-flex mx-auto justify-content-around">
            {favoriteArticles.map((article) => (
                <div className="cardDiv col-md-5 col-lg-3 bg-gradient" key={article.data.id}>
                    <div className="cardHeader col-11">
                    <h5 className="col-10">{article.data.title}</h5>
                        <div className="col-2 p-3">
                            <button className="cardHeaderButton">
                                <i className="fa-sharp fa-solid fa-xmark" article={article.data.id} onClick={() => onRemoveArticleHandler(article)}></i>
                            </button>
                        </div>
                    </div>
                    <hr className="my-1 col-11 mx-auto"/>
                    <Link to={article.data.url} target="_blank">
                        <img className="mt-3 mb-1" src={article.data.thumbnail} alt="Article image"></img>
                    </Link>
                    <Notes id={article.data.id} />
                </div>
            ))}
            </div>
        </div>
    )
}