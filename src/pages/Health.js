import React, { Component } from 'react'
import NewsComponents from '../components/NewsComponents'

export default class Home extends Component {
  render() {
    return (
      <div className='container text-center my-2' style={{color:"white"}}>
         <h2 style={{color:"black"}}>Health News</h2>
        <NewsComponents category={"health"} pageSize={"15"}/>
      </div>
    )
  }
}
