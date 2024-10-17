import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div className="my-3">
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
          {source}
        </span>
        <img
          src={imageUrl ? imageUrl : "https://fdn.gsmarena.com/imgroot/news/24/02/apple-vision-pro-1000-apps/-952x498w6/gsmarena_000.jpg"}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default NewsItem;
