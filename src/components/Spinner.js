import React, { Component } from 'react'
import loading from "./loading.webp"

export default class Spinner extends Component {
  render() {
    return (
      <>
      <img src={loading} alt='loading'/>
      </>
    )
  }
}
