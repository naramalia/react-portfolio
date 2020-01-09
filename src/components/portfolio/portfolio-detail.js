import React, {Component} from "react";
import axios from 'axios';

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolio_item: {}
    }
  }

componentWillMount() {
  this.getPortfolioItem();
}

getPortfolioItem() {
  axios.get(
      `https://naramalia.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials:true }
  ).then(response => {
      this.setState ({
        portfolio_item: response.data.portfolio_item
      });
      console.log("res", response.data.portfolio_item);
  }).catch(error => {
      console.log("getPortfolioItem error", error);
  });
}


render () {
  const {
    name,
    description,
    url,
    thumb_image_url, 
    banner_image_url, 
    logo_url
  } = this.state.portfolio_item;

  const bannerStyles = {
    backgroundImage: "url(" + banner_image_url + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }

  const logoStyles = {
    width: "200px",
    marginLeft: "42px",
  };

  return (
    <div className = "portfolio-detail-wrapper">
      <div className = "banner" style={bannerStyles}>
        <img src={logo_url} style={logoStyles} />
      </div>
      
      <div className="portfolio-detail-description-wrapper">
        <div className = "name">{name}</div>
        <div className="description">{description}</div>
      </div>
      
      <div className="bottom-content-wrapper">
        <a href={url} className="site-link" target="_blank">
        Visit {name}
        </a>
      </div>
    </div>
    );
  }
}
