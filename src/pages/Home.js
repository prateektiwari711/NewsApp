import React, { Component } from 'react'
import NewsComponents from '../components/NewsComponents'
import Spinner from '../components/Spinner'

export default class Home extends Component {
  render() {
    return (
      <div className='container text-center my-2' style={{color:"white"}}>
        <h2 style={{color:"black"}}>Top Headlines</h2>
        <NewsComponents category={"general"} pageSize={"15"}/>
      </div>
    )
  }
}
