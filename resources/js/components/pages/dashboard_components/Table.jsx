import { useState } from "react";

function Table({title}) {

    let [search, setSearch] = useState('')

    return (
        <div className="table">
            <h2>{title}</h2>
            <div className="table-data">
                <div className="row">
                    <div className="col-lg-6 table-header">
                        {/* search input */}
                        <div className="input-group">
                            <span className="input-group-prepend">
                                <div className="input-group-text bg-transparent border-right-0"><i className="fa fa-search"></i></div>
                            </span>
                            <input className="form-control py-2 border-left-0 border" type="search" value={search} onChange={e => setSearch(e.target.value)} id="example-search-input" />
                        </div>
                    </div>
                    <div className="col-lg-6 table-header header-buttons">
                        <button className="btn btn-white export">
                            Export 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_79_372)">
                                <path d="M19.3554 2.30768H12.3077V4.60306H14.6392V6.16537H12.3077V7.69229H14.6154V9.23076H12.3077V10.7692H14.6154V12.3077H12.3077V13.8461H14.6154V15.3846H12.3077V17.6923H19.3554C19.71 17.6923 20 17.3915 20 17.0231V2.97691C20 2.60845 19.71 2.30768 19.3554 2.30768ZM18.4615 15.3846H15.3846V13.8461H18.4615V15.3846ZM18.4615 12.3077H15.3846V10.7692H18.4615V12.3077ZM18.4615 9.23076H15.3846V7.69229H18.4615V9.23076ZM18.4615 6.15383H15.3846V4.61537H18.4615V6.15383Z" fill="#030104"/>
                                <path d="M0 2.22231V17.7785L11.5385 20V0L0 2.22231ZM7.29846 13.9077L5.95615 11.37C5.90538 11.2754 5.85308 11.1015 5.79846 10.8485H5.77769C5.75231 10.9677 5.69231 11.1492 5.59769 11.3923L4.25077 13.9077H2.15923L4.64231 10.0123L2.37077 6.11615H4.50615L5.62 8.45231C5.70692 8.63692 5.78462 8.85615 5.85385 9.10923H5.87538C5.91923 8.95692 6.00077 8.73077 6.12 8.43L7.35846 6.11538H9.31385L6.97769 9.97846L9.37923 13.9069L7.29846 13.9077Z" fill="#030104"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_79_372">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className="btn btn-primary">New Product</button>
                    </div>
                </div>

                {/* main table */}

                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">
                            <input type="checkbox" name="" id="" />
                        </th>
                        <th scope="col">Bar Code</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Selling Price</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" name="" id="" /></th>
                            <td>Otto</td>
                            <td>
                                <img src="images/dress.jpg" alt="" />
                            </td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>Active</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">View Logs</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Remove</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;