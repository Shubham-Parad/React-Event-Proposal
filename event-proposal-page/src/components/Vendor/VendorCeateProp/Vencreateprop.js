import React from 'react'
import Navbar from '../VendorProp/Navbar'
import Userprop from '../../User/UserProposals/Userprop'
import './Vencreateprop.css';
import Form from './Form'

function Vencreateprop() {
  return (
    <>
      <div className='createpropuserprop'>
      <Navbar/>
      <Userprop/>
      </div>
      <Form/>
    </>
  )
}

export default Vencreateprop