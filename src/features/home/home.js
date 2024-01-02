import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Home() {

    const [data, setData] = useState()

    // Get Articles from false API
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

    if (!data) {
        return <h2>Loading...</h2>;
    }
    console.log(data)

    return (
        <div>
            {data.map((article) => (
                <div className="cardDiv">
                <h4>{article.data.title}</h4>
                <img src={article.data.thumbnail} alt="Article image"></img>
            </div>
            ))}
        </div>
    )
}
