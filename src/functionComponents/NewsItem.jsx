import React from 'react'

export default function NavItem(props){
        return (
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card mb-2">
                    <img src={props.pic} height="200px" className="card-img-top" alt="..."/>
                        <div className="card-body" style={{height:"315px"}}>
                            <h6 className="card-title text-primary" style={{height:"75px"}}>{props.title.slice(0,80)+"..."}</h6>
                            <h6 style={{fontSize:"12px"}}>Source :{props.source}</h6>
                            <h6 style={{fontSize:"10px"}}>Date :{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()}/${new Date(props.date).getFullYear()}  ${new Date(props.date).getHours()}:${new Date(props.date).getMinutes()}`}</h6>
                            <hr/>
                            <p className="card-text" style={{fontSize:"15px"}}>{props.description.slice(0,150)+"..."}</p>
                        </div>
                        <div style={{paddingBottom:"5px"}}>
                            <a href={props.url} className="mybtn btn text-primary" >Read More...</a>
                        </div>
                </div>
            </div>
        )
    }
