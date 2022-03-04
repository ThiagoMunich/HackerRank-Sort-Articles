import React, { useState } from "react"
import "./App.css"
import "h8k-components"

import Articles from "./components/Articles"

const title = "Sorting Articles"

function App({ articles }) {
  const [temp, setTemp] = useState(articles)

  const sortArticles = (option) => {
    let articlesCopy = [...articles]

    articlesCopy.sort((a, b) => {
      if (a[option] > b[option]) {
        return -1
      }
      if (a[option] < b[option]) {
        return 1
      }
      return null
    })

    setTemp(articlesCopy)
  }

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          className="small"
          data-testid="most-upvoted-link"
          onClick={() => sortArticles("upvotes")}
        >
          Most Upvoted
        </button>
        <button
          className="small"
          data-testid="most-recent-link"
          onClick={() => sortArticles("date")}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={temp} />
    </div>
  )
}

export default App
