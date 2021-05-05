import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const display = props.sushis.map((sushi) => <Sushi key={sushi.id} sushi={sushi} eaten={props.eaten} handleClick={props.handleClick}/>)
  return (
    <Fragment>
      <div className="belt">
        {display}
        <MoreButton handlePage={props.handlePage} eaten={props.eaten}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer