import React, { Component } from 'react'

export default class About extends Component {
  handleNextClick=async()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/12)){
    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=467063ee50f34587951aaa351218e393&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({page:this.state.page+1,
        articles:parsedData.articles})
    }
  }

  handlePrevClick = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=467063ee50f34587951aaa351218e393&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
}
  render() {
    return (
      <div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-success bg-dark" onClick={this.handlePrevClick()}>&laquo; Previous</button>
      <button type="button" className="btn btn-success bg-dark" onClick={this.handleNextClick()}>Next &raquo;</button>
      </div>
      </div>
    )
  }
}
