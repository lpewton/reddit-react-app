import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { selectFavoriteArticles } from "../favorites/favoritesSlice";
import { useSelector } from 'react-redux';

export default function Home() {

    const [data, setData] = useState();
    const [favoriteArticles, setFavoriteArticles] = useState([]);


    // Get Articles from API
    const getArticles = async () => {
        const requestUrl = `https://www.reddit.com/r/archaeology/new.json`;

        const response = await fetch(requestUrl, {
            method: 'GET'
        })
        const json = await response.json();
        return json.data.children;
    }

    // Put articles into Data state
    useEffect(() => {
        async function getArticlesData() {
            const articlesData = await getArticles();
            let filteredData = articlesData.filter(article => article.data.thumbnail.includes('http'))
            setData(filteredData);
        }

        getArticlesData();

        // Retrieve data from localStorage
        const storedArticlesString = localStorage.getItem('favorites');
        // Retrieve existing data from local storage
        let parsedData = JSON.parse(storedArticlesString);
        if (storedArticlesString) {
            // Set the parsed data to the state
            for (const article of parsedData) {
                setFavoriteArticles((prevArticles) => [...prevArticles, article]);
            }
        }

    }, []);

    const onAddArticleHandler = (article) => {
        const existingDataString = localStorage.getItem('favorites');
        // Retrieve existing data from local storage
        let existingData = existingDataString ? JSON.parse(existingDataString) : [];

        // Ensure existingData is an array
        existingData = Array.isArray(existingData) ? existingData : [];

        const alreadyThere = existingData.filter((existingArticle) => existingArticle.data.title === article.data.title);

        if (alreadyThere.length > 0) {
            return;
        } else {
            // Add the new article to the existing data
            const updatedData = [...existingData, article];

            // Set the updated data back to local storage
            localStorage.setItem('favorites', JSON.stringify(updatedData));
            setFavoriteArticles(updatedData);

        }
    };

    if (!data) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container">
            <h2 className="mt-3">Recent Posts</h2>
            <div className="row d-flex mx-auto justify-content-around">
            {data.map((article) => (
                <div className="cardDiv col-md-5 col-lg-3 bg-gradient" key={article.data.id}>
                    <div className="cardHeader col-11">
                        <h5 className="col-10">{article.data.title}</h5>
                        <div className="col-2 p-3">
                            <button id="like-button" className="likeButton" onClick={() => onAddArticleHandler(article)}>
                                <i className={`${favoriteArticles.some((favoriteArticle) => favoriteArticle.data.title === article.data.title) ? 'fa-solid' : 'fa-regular'} fa-heart`} article={article.data.id}></i>
                            </button>
                        </div>
                    </div>
                    <Link to={article.data.url} target="_blank">
                        <img  className="my-3" src={article.data.thumbnail} alt="Article image"></img>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
}
