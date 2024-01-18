import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Notes from "../notes/notes";

export default function Favorites() {
    const [favoriteArticles, setFavoriteArticles] = useState([]);

    // Retrieve data from localStorage
    const storedArticlesString = localStorage.getItem('1');
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
        localStorage.setItem('1', JSON.stringify(updatedData)); 
        setFavoriteArticles(updatedData);
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
                    <Notes id={article.data.id} />
                </div>
            ))}
        </div>
    )
}