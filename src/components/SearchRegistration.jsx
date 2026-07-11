import React from 'react'

const SearchRegistration = () => {
  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <h2 className="text-center">Search Registration</h2>
                    <label htmlFor="" className="form-label">Registration Number:</label>
                    <input type="number" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">Search</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SearchRegistration