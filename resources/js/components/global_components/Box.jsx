function Box({icon, name, count}) {
    return <div className="box">
        <i className={icon}></i>
        <h3 className="poppins">{name}</h3>
        <h4>{count}</h4>
    </div>
}

export default Box;