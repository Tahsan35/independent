
const Service = ({service}) => {
    const  { img, name, details, Price, id} = service;
    return (
        <div className="card gx-4 col-sm-12 col-lg-4" style={{width: "23rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{details}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Service;