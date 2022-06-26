import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';

export class News extends Component {
  // static defaultProps = {
  //   country: 'in',
  //   pageSize: 8
  // }
  // static PropTypes = {
  //   country : PropTypes.string,
  //   pageSize : PropTypes.number
  // }
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page: 1
    }
  } 
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0517bf83a74e431ea27aeb6cb744cb69&page=1&pageSize=6";
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, 
    totalResults: parsedData.totalResults,
    loading: false
    })
  }
  handleNextClick = async ()=>{
    console.log("next");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0517bf83a74e431ea27aeb6cb744cb69&page=${this.state.page + 1}&pageSize=6`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page: this.state.page + 1,
      loading: false
    })
    
  }
  handlePreviousClick = async ()=>{
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0517bf83a74e431ea27aeb6cb744cb69&page=${this.state.page - 1}&pageSize=6`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles : parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })
    
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="my-4">NewsNest - Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 my-2" key={element.url}>
             <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage } newsUrl={element.url}/>
            </div>
          })}  
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/6)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
    </div>
    )
  }
}

export default News