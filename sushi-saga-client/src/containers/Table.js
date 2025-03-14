import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return props.plates ? array.map((x, index) => <div key={index} className="empty-plate" style={{ top: -7 * index }}/>) : null
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.plates)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table