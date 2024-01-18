import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Notes from "../notes/notes";



export default function Favorites() {
    const [favoriteArticles, setFavoriteArticles] = useState([]);

    const dispatch = useDispatch();
    
    const onRemoveArticleHandler = (article) => {
    };

    useEffect(() => {
        // Step 1: Retrieve data from localStorage
        const storedArticlesString = localStorage.getItem('1');
    
        if (storedArticlesString) {
          // Step 2: Parse the data
          const parsedData = JSON.parse(storedArticlesString);
          
          // Step 3: Set the parsed data to the state
          for (const article of parsedData) {
            setFavoriteArticles((prevArticles) => [...prevArticles, article]);
        }
        }
      }, []);

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