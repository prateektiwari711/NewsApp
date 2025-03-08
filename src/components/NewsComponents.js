import React, { Component } from "react";
import NewsItems from "../components/NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults:0,
    };
  }

  async componentDidMount() {
    this.setState({ page:this.state.page+1})
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=467063ee50f34587951aaa351218e393&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.setState({loading:true,})
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading:false,
      totalResults:parsedData.totalResults,
    });
  }
  fetchMoreData = async() => {
    this.setState({ page:this.state.page+1})
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=467063ee50f34587951aaa351218e393&page=${this.state.page}&pageSize=${this.props.pageSize}`
    );
    this.setState({loading:true,})
    let parsedData = await data.json();
    setTimeout(() => {
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        loading:false,
        totalResults:parsedData.totalResults,
      });
    }, 1500);
  };

  render() {
    return (
      <div className="container my-3">
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles && this.state.articles.map((elem)=>{
            return <div className="col mb-4" key={elem.url}>
              <NewsItems  title={elem.title?elem.title.slice(0,45):""} description={elem.description?elem.description.slice(0,88):""} imgUrl={elem.urlToImage} newsUrl={elem.url}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
      
    );
  }
}
