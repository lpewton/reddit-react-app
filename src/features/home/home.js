import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { addFavorite, selectFavoriteArticles } from "../favorites/favoritesSlice";
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

    const [data, setData] = useState();
    const favoriteArticles = useSelector(selectFavoriteArticles);


    const dispatch = useDispatch();

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
    }, []);

    const onAddArticleHandler = (article) => {
        const alreadyThere = favoriteArticles.filter((existingArticle) => existingArticle.data.title === article.data.title)
        if (alreadyThere.length > 0) {
           return
        } else {
            dispatch(addFavorite(article));
        }
    };

    if (!data) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>Recent Posts</h2>
            {data.map((article) => (
                <div className="cardDiv" key={article.data.id}>
                    <div className="cardHeader">
                        <h4>{article.data.title}</h4>
                        <div>
                            <button id="like-button" className="likeButton" onClick={() => onAddArticleHandler(article)}>
                                <i className={`${favoriteArticles.some((favoriteArticle) => favoriteArticle.data.title === article.data.title) ? 'fa-solid' : 'fa-regular'} fa-heart`} article={article.data.id}></i>                                
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
