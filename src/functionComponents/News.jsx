import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    var [articles, setArticles] = useState([])
    var [totalResults, setTotalResults] = useState(0)
    var [page, setPage] = useState(1)
    async function getAPIData() {
        setPage(1)
        var rawdata
        if (props.search === '')
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=fd89906e9a8a41a89dd662a9e12cf5c9`)
        else
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=fd89906e9a8a41a89dd662a9e12cf5c9`)
        var result = await rawdata.json()
        setArticles(result.articles)
        setTotalResults(result.totalResults)
    }
    const fetchMoreData = async ()=>{
        setPage(page+1)
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page + 1}&apiKey=fd89906e9a8a41a89dd662a9e12cf5c9`)
        var result = await rawdata.json()
        setArticles(articles.concat(result.articles))
    }
    useEffect(() => {
        getAPIData()
    }, 
    [props.language, props.pageSize, props.search, props.q])
    return (
        <>
            <div className='container-fluid' >
                {props.search ?
                    <h5 className='background text-center text-light p-2 mt-1 bg'>News Related to '{props.search}'</h5> :
                    <h5 className='background text-center text-light p-2 mt-1 bg'>{props.q} News Section</h5>
                }
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={
                        <div className='container-fluid w-100 mt-3 mb-2' style={{ height: "50px" }}>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    }
                >
                    <div className='row'>
                        {
                            articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    title={item.title}
                                    source={item.source.name}
                                    description={item.description}
                                    url={item.url}
                                    pic={item.urlToImage}
                                    date={item.publishedAt}
                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}