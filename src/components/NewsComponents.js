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
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    try {
      this.setState({ loading: true });

      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=YOUR_API_KEY&page=${this.state.page}&pageSize=${this.props.pageSize}`,
        {
          headers: {
            "User-Agent": "Mozilla/5.0",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      let parsedData = await response.json();
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });
    } catch (error) {
      console.error("Fetching news failed:", error);
      this.setState({ loading: false });
    }
  };

  fetchMoreData = async () => {
    if (this.state.articles.length >= this.state.totalResults) return;

    try {
      let nextPage = this.state.page + 1;
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=YOUR_API_KEY&page=${nextPage}&pageSize=${this.props.pageSize}`,
        {
          headers: {
            "User-Agent": "Mozilla/5.0",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      let parsedData = await response.json();
      this.setState({
        articles: [...this.state.articles, ...(parsedData.articles || [])],
        totalResults: parsedData.totalResults || this.state.totalResults,
        page: nextPage,
      });
    } catch (error) {
      console.error("Fetching more news failed:", error);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Headlines</h2>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles &&
                this.state.articles.map((elem) => (
                  <div className="col mb-4" key={elem.url}>
                    <NewsItems
                      title={elem.title ? elem.title.slice(0, 45) : ""}
                      description={
                        elem.description ? elem.description.slice(0, 88) : ""
                      }
                      imgUrl={elem.urlToImage}
                      newsUrl={elem.url}
                    />
                  </div>
                ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
