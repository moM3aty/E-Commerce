/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
const ProDet = () =>
{
    var [ proDetail, getProDetail ] = useState( [] ),
        { id } = useParams(),
        api_URL ='http://m3atyecommerce-001-site1.gtempurl.com/api/ECommerce/'
    if (id) 
    {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect( () =>
        {
            fetch( api_URL + 'GetProDetail/'+ id )
            .then(res => res.json())
            .then(data =>
                getProDetail( data )
            )
        },[])
        
    };
    var listProDetails = proDetail.map( ( item ) => (
        < >
            <div key={item.id} className="col-md-8">
                <p className='card-Details'>
                    <span>Details : </span>
                    <div>{ item.description }</div>
                </p>
                <p className='card-Details'>
                    <span > Price : </span>
                    <div style={ { textDecoration: "line-through"}}>{ item.price } $</div></p>
                <p className='card-Details'>
                    <span>Price After Discount : </span>
                    <div>{ item.priceAfterDiscount } $</div>
                </p>
            </div>
            <div className="col-md-4 text-center drag-lg-top">
                <div className="shadow-down mb-4">
                    <img src={item.photo} alt={item.name} className="img-fluid w-100 rounded-lg border-thick border-white" />
                </div>
                <h4>{item.name}</h4>
                
            </div>
        </>
    ))
    return (
        <div>
            <section className="section pt-5" style={ { marginTop: '-10%' } }>
                <div className="container">
                <h1 className="text-white section-title">Product Details</h1>
                    <div className="row">
                        {listProDetails}
                    </div>
                </div>
            </section>    
        </div>
    );
}

export default ProDet;
