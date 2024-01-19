import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        pagesize: "8", country: "in", category: "general"
    }
    static propTypes = {
        pagesize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            totalResults:0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News App`
    }

    async componentDidMount() {
        this.props.HandleState(20)
        let url = `${process.env.REACT_APP_API}?country=${this.props.country}&category=${this.props.category}&apiKey=9c11a0d26cbe4c0685f495cdfa141dff&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.props.HandleState(50)
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.HandleState(70)
        let result = await data.json();
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults,
            loading: false
        })
        this.props.HandleState(100)
    }
    
    fetchMoreData = async() =>{
        this.setState({page : this.state.page + 1});
        let url = `${process.env.REACT_APP_API}?country=${this.props.country}&category=${this.props.category}&apiKey=9c11a0d26cbe4c0685f495cdfa141dff&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
        let data = await fetch(url)
        let result = await data.json();
        this.setState({
            articles: this.state.articles.concat(result.articles),
        })
    }
    render() {
        return (
            <>
                    <div className='col-md-12 mt-5 text-center pt-5 pb-3'>
                        <h1>NewsMonkey - Top {`${this.capitalizeFirstLetter(this.props.category)} Headlines`}</h1>
                    </div>
                    <InfiniteScroll
                        dataLength={this.state.articles?.length || 0}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner/>}
                    >
                        <div className='container'>
                        <div className='row g-3'>
                            {this.state.loading ? <Spinner /> : <>
                                {this.state.articles.map((val) => {
                                    return <div className='col-md-4' key={val.url}>
                                        <NewItem
                                            img={val.urlToImage}
                                            des={!val.description ? val.description = "" : val.description.slice(0, 70)}
                                            title={!val.title ? val.title = "" : val.title.slice(0, 40)}
                                            url={val.url}
                                            date={val.publishedAt}
                                            author={val.author}
                                            source={val.source.name}
                                        />
                                    </div>
                                }
                                )
                                }
                            </>}
                        </div>
                        </div>
                    </InfiniteScroll>
            </>
        )
    }
}

export default News