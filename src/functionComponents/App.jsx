import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'

export default function App() {
  var [language, setLanguage] = useState("hi")
  var [pageSize, setPageSize] = useState(12)
  var [search, setSearch] = useState("")

  const changeLanguage = (data) => {
    setLanguage(data)
  }
  const changePageSize = (size) => {
    setPageSize(size)
  }
  const searchNews = (data) => {
    setSearch(data)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changePageSize={changePageSize} searchNews={searchNews} />
        <Routes>
          <Route path="/" element={<News search={search} pageSize={pageSize} language={language} q="All" />} />
          <Route path="/politics" element={<News search={search} pageSize={pageSize} language={language} q="Politics" />} />
          <Route path="/technology" element={<News search={search} pageSize={pageSize} language={language} q="Technology" />} />
          <Route path="/cricket" element={<News search={search} pageSize={pageSize} language={language} q="Cricket" />} />
          <Route path="/science" element={<News search={search} pageSize={pageSize} language={language} q="Science" />} />
          <Route path="/education" element={<News search={search} pageSize={pageSize} language={language} q="Education" />} />
          <Route path="/business" element={<News search={search} pageSize={pageSize} language={language} q="Business" />} />
          <Route path="/covid" element={<News search={search} pageSize={pageSize} language={language} q="Covid" />} />
          <Route path="/crime" element={<News search={search} pageSize={pageSize} language={language} q="Crime" />} />
          <Route path="/entertainment" element={<News search={search} pageSize={pageSize} language={language} q="Entertainment" />} />
          <Route path="/football" element={<News search={search} pageSize={pageSize} language={language} q="Football" />} />
          <Route path="/jokes" element={<News search={search} pageSize={pageSize} language={language} q="Jokes" />} />
          <Route path="/sports" element={<News search={search} pageSize={pageSize} language={language} q="Sports" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}