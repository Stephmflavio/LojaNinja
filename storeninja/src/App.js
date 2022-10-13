import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import CreateJobDetails from './pages/CreateJobPage/CreateJobPage'
import JobsListPage from './pages/JobsListPage/JobsListPage'
import JobDetailsPage from './pages/JobDetailsPage/JobDetailsPage'
import CartPage from './pages/CartPage/CartPage'


class App extends React.Component {
  state = {
    currentPage: "home"
  }

  choosePage = () => {
    switch (this.state.currentPage){
      case "home":
        return <HomePage/>
      case "form":
        return <CreateJobDetails/>
      case "list":
        return <JobsListPage/>
      case "details":
        return <JobDetailsPage/>
      case "cart":
        return <CartPage/>
      default:
        return <HomePage/>
    }

  }

  render(){
    return (
    <div>
      {this.choosePage()}
    </div>
    );
  }
}

export default App
