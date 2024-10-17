import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner'; // Assuming you have a Spinner component for loading state
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    const { country, category, pageSize, apiKey } = this.props;
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${this.state.page}&pageSize=${pageSize}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.updateNews);
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, this.updateNews);
  };

  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center">Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  title={article.title ? article.title.slice(0, 45) : "No title available"}
                  description={article.description ? article.description.slice(0, 88) : "No description available"}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source.name}
                />
              </div>
            );
          })}
        </div>
        {/* Pagination Controls */}
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
