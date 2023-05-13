import React, { Component } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from './component/Header'
import News from './component/News'
import { Route, Routes  } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  constructor(){
    super()
    this.state ={
      progress:0
    }
  }

  pagesize = 10

  HandleState = (val) => {
    this.setState({progress : val})
  }

  render() {
    return (
      <>
        <Header/>
       <LoadingBar
        color='#e50914'
        progress={this.state.progress}
        onLoaderFinished={() =>this.HandleState(0)}
        height={3}
      />
        <Routes>
        <Route exact path='/' element={<News HandleState={this.HandleState} key="general" pagesize={this.pagesize} country="in" category="general"/>} />
        <Route exact path='/business' element={<News HandleState={this.HandleState} key="business" pagesize={this.pagesize} country="in" category="business"/>} />
        <Route exact path='/entertainment' element={<News HandleState={this.HandleState} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment"/>} />
        <Route exact path='/health' element={<News HandleState={this.HandleState} key="health" pagesize={this.pagesize} country="in" category="health"/>} />
        <Route exact path='/science' element={<News HandleState={this.HandleState} key="science" pagesize={this.pagesize} country="in" category="science"/>} />
        <Route exact path='/sports' element={<News HandleState={this.HandleState} key="sports" pagesize={this.pagesize} country="in" category="sports"/>} />
        <Route exact path='/technology' element={<News HandleState={this.HandleState} key="technology" pagesize={this.pagesize} country="in" category="technology"/>} />
        </Routes>
      </>
    )
  }
}

export default App