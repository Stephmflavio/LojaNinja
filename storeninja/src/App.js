import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import CreateJobDetails from './pages/CreateJobPage/CreateJobPage'
import JobsListPage from './pages/JobsListPage/JobsListPage'
import JobDetailsPage from './pages/JobDetailsPage/JobDetailsPage'
import CartPage from './pages/CartPage/CartPage'
import Header from './components/Header/Header'
import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  } 
`

class App extends React.Component {

  state = {
    currentPage: "home"
  }

  changePage = (pageName) => {
    this.setState({currentPage: pageName})
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
      <GlobalStyled/>
      <Header changePage={this.changePage}/>
      {this.choosePage()}
    </div>
    );
  }
}

export default App
