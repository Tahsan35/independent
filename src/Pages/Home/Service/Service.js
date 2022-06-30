
const Service = ({service}) => {
    const { img, name, details, price, id} = service;
    return (
        <div className='service'>
        <img className='w-100' src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p><small>{details}</small></p>
        <button className='btn btn-primary'>Book: {name}</button>
    </div>
    );
};

export default Service;