
import { useNavigate } from 'react-router-dom';
const Service = ({service}) => {
    const { img, name, details, price, id} = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p><small>{details}</small></p>
                </div>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary position-relative'>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;