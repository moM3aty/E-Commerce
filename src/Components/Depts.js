import React, { useEffect, useState } from 'react';
const Depts = () =>
{
    var [ depts, setDepts ] = useState( [] );
    var api_URL ='http://m3atyecommerce-001-site1.gtempurl.com/api/ECommerce/'
    useEffect(() => {
    
        fetch( api_URL + 'GetAllDepts' )
        .then(res => res.json())
        .then( data =>
        {
            setDepts( data )
        })
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[] );

    let list = depts.map( ( item ) => (
        <div key={item.id} className="Card-MQ col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card shadow text-center img_Style">
                    <div className="position-relative rounded-top progress-wrapper " >
                        <div className="wave" data-progress="95%" style={ { bottom: '95%' } }>
                            <img className='img_Area' src={item.img} alt={item.name} />
                    </div>
                </div>
                <div className="card-footer bg-white">
                        <h4 className="card-title">{item.name}</h4>
                </div>
            </div>
        </div>
        
    ) )
    return (
        <>
            <div className="mt-10">
                <section className="section section-Dept ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="section-title-Cont">Departments</h2>
                            </div>
                            { list }
                            <div id="Products" ></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Depts;
