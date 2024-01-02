import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Article from './article'

export default function Home() {

    const [data, setData] = useState(null)

    // Get Articles from false API
    const getArticles = async () => {
        const requestUrl = '../../mocks/data/articles.json'
        const response = await fetch(requestUrl, {
            method: 'GET'
        })
        const json = await response.json();
        return json;
    }
    
    // Put articles into Data state
    useEffect(() => {
        async function getArticlesData() {
            const articlesData = await getArticles();
            setData(articlesData);
        }
        
        getArticlesData();
        console.log('Hi')
    }, );
/*
    if (!data) {
        return <h2>Loading...</h2>;
      }*/

    return (
        <div>
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    )
}
