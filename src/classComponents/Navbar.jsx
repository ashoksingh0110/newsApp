import React, { Component } from 'react'
import "../assets/css/style.css"
import { Link } from "react-router-dom"
export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            s: ""
        }
    }
    getData(e) {
        this.setState({ s: e.target.value })
    }
    postData(e) {
        e.preventDefault()
        this.props.searchNews(this.state.s)
        document.getElementById("search").value=""
    }

    render() {
        return (
            <>
                <nav className="navbar sticky-top navbar-expand-lg nav">
                    <div className="container-fluid">
                        <Link className="navbar-brand logo-name" to="/">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link style={{ fontSize: "20px" }} className="nav-link active text-light" aria-current="page" to="/" onClick={() => this.props.searchNews("")}>All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ fontSize: "20px" }} className="nav-link text-light" to="/politics" onClick={() => this.props.searchNews("")}>Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ fontSize: "20px" }} className="nav-link text-light" to="/technology" onClick={() => this.props.searchNews("")}>Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ fontSize: "20px" }} className="nav-link text-light" to="/cricket" onClick={() => this.props.searchNews("")}>Cricket</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ fontSize: "20px" }} className="nav-link text-light" to="/science" onClick={() => this.props.searchNews("")}>Science</Link>
                                </li>
                                <li className="nav-item dropdown text-light">
                                    <Link style={{ fontSize: "20px" }} className="nav-link dropdown-toggle text-light" to='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Other
                                    </Link>
                                    <ul className="dropdown-menu ">
                                        <li><Link className="dropdown-item" onClick={() => this.props.searchNews("")} to="/education">Education </Link></li>
                                        <li><Link className="dropdown-item" onClick={() => this.props.searchNews("")} to="/business">Business </Link></li>
                                        <li><Link className="dropdown-item" onClick={() => this.props.searchNews("")} to="covid">Covid-19 </Link></li>
                                        <li><Link className="dropdown-item" onClick={() => this.props.searchNews("")} to="/crime">Crime </Link></li>
                                        <li><Link className="dropdown-item" onClick={() => this.props.searchNews("")} to="/entertainment">Entertainment </Link></li>
                                        <li><Link className="dropdown-item" onClick={() => this.props.searchNews("")} to="/football">Football </Link></li>
                                        <li><Link className="dropdown-item" onClick={() => this.props.searchNews("")} to="/jokes">Jokes </Link></li>
                                        <li><Link className="dropdown-item" onClick={() => this.props.searchNews("")} to="/sports">Sports </Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown text-light">
                                    <Link style={{ fontSize: "20px" }} className="nav-link dropdown-toggle text-light" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Languages
                                    </Link>
                                    <ul className="dropdown-menu ">
                                        <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("hi")}>Hindi</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("en")}>English</button></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown text-light">
                                    <Link style={{ fontSize: "20px" }} className="nav-link dropdown-toggle text-light" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Article Size
                                    </Link>
                                    <ul className="dropdown-menu ">
                                        <li><button className="dropdown-item" onClick={() => this.props.changePageSize(12)}>12</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changePageSize(24)}>24</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changePageSize(48)}>48</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changePageSize(96)}>96</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex w-100" role="search" onSubmit={(e) => this.postData(e)}>
                                <input className="form-control me-2 text-light" type="search" id='search' name='search' placeholder="Enter Something to Search" onChange={(e) => this.getData(e)} aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
