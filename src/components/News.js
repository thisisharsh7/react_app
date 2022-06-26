import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [ ],
      loading : false
    }
  } 
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0517bf83a74e431ea27aeb6cb744cb69";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsNest - Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-2" key={element.url}>
             <NewsItem title={element.title.length>0 ? element.title.slice(0,45) : element.title} description={element.description.length>0 ? element.description.slice(0,95) : element.description} imageUrl={element.urlToImage } newsUrl={element.url}/>
            </div>
          })}  
        </div>
    </div>
    )
  }
}

export default News