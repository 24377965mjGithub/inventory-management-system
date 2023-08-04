function Menu() {
    return (
        <div className="menu-wrapper-desktop">
            <ul>
                <li>Dashboard</li>
                <li>
                    Products
                    <ul className="product_dropdown">
                        <li>Product Ins</li>
                        <li>Product Outs</li>
                        <li>Product Category</li>
                        <li>Product Misfortune</li>
                    </ul>
                </li>
                <li>Suppliers</li>
                <li>
                    Customers
                    <ul className="customers_dropdown">
                        <li>Customer Types</li>
                    </ul>
                </li>
                <li>Staffs</li>
                <li className="logout-nav">Logout <i className="fa fa-door-open"></i></li>
            </ul>
        </div>
    )
}

export default Menu;