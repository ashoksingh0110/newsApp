import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1
        }
    }
    async getAPIData() {
        this.setState({ page: 1 })
        var rawdata
        if(this.props.search==='')
        rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=e8a34074099946bc96f8c1b6b6ee16d2`)
        else
        rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=e8a34074099946bc96f8c1b6b6ee16d2`)
        var result = await rawdata.json()
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page+1}&apiKey=e8a34074099946bc96f8c1b6b6ee16d2`)
        var result = await rawdata.json()
        this.setState({ articles: this.state.articles.concat(result.articles) })
    }
    componentDidMount() {
        this.getAPIData()
    }
    componentDidUpdate(old) {
        if (this.props.q !== old.q || this.props.language !== old.language || this.props.pageSize !== old.pageSize || this.props.search!==old.search) {
            this.getAPIData()
        }
    }
    render() {
        return (
            <>
                <div className='container-fluid'>
                    {this.props.search?
                        <h5 className='background text-center text-light p-2 mt-1'>News Related to '{this.props.search}'</h5>:
                        <h5 className='background text-center text-light p-2 mt-1'>{this.props.q} News Section</h5>
                    }
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalResults}
                        loader={
                            <div className='container-fluid w-100 mt-3 mb-2' style={{height:"50px"}}>
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
                                this.state.articles.map((item, index) => {
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
}
