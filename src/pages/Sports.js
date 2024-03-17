import React, { Component } from 'react'
import NewsComponents from '../components/NewsComponents'

export default class Home extends Component {
  render() {
    return (
      <div className='container text-center my-2' style={{color:"white"}}>
        <h2 style={{color:"black"}}>Sports News</h2>
        <NewsComponents category={"sports"} pageSize={"15"}/>
      </div>
    )
  }
}
