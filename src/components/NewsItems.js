import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let{title,description,imgUrl,newsUrl,date}=this.props;
    return (
        <div className='container my-3 d-flex'>
        <div className="card" style={{width:"18rem",color:"white",background:"#111111"}}>
            <img src={imgUrl?imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiQsR-n2a-lUqo4STt1t_r11uBQK7tmf5Ug&usqp=CAU"} className="card-img-top my-3" alt="..." style={{width:"280px",height:"280px"}}/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-sm btn-primary bg-dark" style={{border:"none"}}>Read More..</a>
            </div>
        </div>
    </div>
    )
  }
}
