import React, { Component } from 'react'

export default class NavItem extends Component {
    render() {
        return (
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card mb-2">
                    <img src={this.props.pic} height="200px" className="card-img-top" alt="..."/>
                        <div className="card-body" style={{height:"350px"}}>
                            <h6 className="card-title text-primary" style={{height:"100px"}}>{this.props.title.slice(0,80)+"..."}</h6>
                            <h6 style={{fontSize:"12px"}}>Source :{this.props.source}</h6>
                            <h6 style={{fontSize:"10px"}}>Date :{`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()}/${new Date(this.props.date).getFullYear()}  ${new Date(this.props.date).getHours()}:${new Date(this.props.date).getMinutes()}`}</h6>
                            <hr/>
                            <p className="card-text" style={{fontSize:"15px"}}>{this.props.description.slice(0,150)+"..."}</p>
                        </div>
                        <div style={{paddingBottom:"5px"}}>
                            <a href={this.props.url} className="mybtn btn text-primary" >Read More...</a>

                        </div>
                </div>
            </div>
        )
    }
}
