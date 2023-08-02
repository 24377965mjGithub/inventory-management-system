import Box from "../global_components/Box";

function Dashboard() {
    return (
        <section className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <Box
                            icon="fa-solid fa-boxes-packing"
                            name="Products"
                            count={233}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Box
                            icon="fa fa-truck"
                            name="Suppliers"
                            count={23}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Box
                            icon="fa fa-users"
                            name="Customers"
                            count={233}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Box
                            icon="fa fa-users"
                            name="Staffs"
                            count={233}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Box
                            icon="fas fa-shipping-fast"
                            name="Deliveries"
                            count={233}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Box
                            icon="fa fa-shopping-cart"
                            name="Sold Outs"
                            count={233}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;