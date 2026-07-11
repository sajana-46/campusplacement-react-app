import React from 'react'
import NavigationBar from './NavigationBar'

const DeleteRegistration = () => {
  return (
    <div>
        <NavigationBar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 className="text-center">Delete Registration</h2>
                    <label htmlFor="" className="form-label">Registration number:</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteRegistration