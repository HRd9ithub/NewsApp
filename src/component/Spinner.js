import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className='conatiner text-center my-5'>
          <div className="lds-hourglass"></div>
        </div>
      </>
    )
  }
}

export default Spinner;