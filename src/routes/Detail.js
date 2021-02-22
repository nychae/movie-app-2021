import React from "react";
import { Redirect } from "react-router-dom";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      console.log(location.state);
      return (
        <div className="detail__container">
          <img src={location.state.poster} alt="" />
          <div className="detail">
            <p className="title">
              {location.state.title}
              <span className="year">{location.state.year}</span>
            </p>
            <p className="genres">
              {location.state.genres.map((genre) => (
                <span className="genre">{genre}</span>
              ))}
            </p>
            <p className="summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
