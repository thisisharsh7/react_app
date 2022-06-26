import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props ;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl ? "https://thegadgetflow.com/wp-content/uploads/2020/09/Jabra-Elite-85t-True-Wireless-Earbuds-01.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}..</h5>
                <p className="card-text">{description}..</p>
                <a href={newsUrl} target="_blank"  className="btn btn-sm btn-primary">More Detail</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem