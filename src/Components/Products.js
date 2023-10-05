/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
const Products = () =>
{
    var [ depts, setDepts ] = useState( [] ),
        [ Products, setProducts ] = useState( [] ),
        [ id, setId ] = useState( "" ),
        [ name, setName ] = useState( "" ),
        [ price, setPrice ] = useState( "" ),
        [ priceAfterDiscount, setPriceDis ] = useState( "" ),
        [ description, setDesc ] = useState( "" ), 
        [ search, setSearch ] = useState( "" ),
        [ allProducts, setAllProducts ] = useState([]),
        api_URL = 'https://localhost:44358/api/ECommerce/';
    
    function validateForm ()
    {
            axios.post( api_URL + "SaveProduct", { id, name, price, priceAfterDiscount, description } )
            .then( response => response.data )
            var newProducts = [ ...Products ],
            
            item = newProducts.find( x => x.id == id );
            item.name = name;
            item.price = price;
            item.priceAfterDiscount = priceAfterDiscount;
            item.description = description;
            
            setId( "" )
            setName( "" );
            setPrice( "" );
            setPriceDis( "" );
            setDesc( "" );
        
        Swal.fire( {
            title: 'Product Edit successfully',
            text: "You clicked the button!",
            icon: 'success',
            confirmButtonColor: '#2d7f83',
        } )
    }
    var addActiveClass = event =>
    {
        const list = document.querySelectorAll( 'ul' );
        for ( let i = 0; i < list.length; i++ )
        {
            list[ i ].classList.remove( 'active' );
        }
        event.currentTarget.classList.add( 'active' );
    }
    useEffect( () =>
    {
        fetch( api_URL + 'GetAllDepts' )
            .then( res => res.json() )
            .then( data =>
            {
                setDepts( data )
            } )
        fetch( api_URL + 'GetAllProducts' )
            .then( res => res.json() )
            .then( function(data)
            {
                setProducts( data )
                setAllProducts( data )
            } )
    }, [] );
    var getProductsDept = ( id ) =>
    {
        fetch( api_URL + 'GetProductsDept/' + id )
            .then( res => res.json() )
            .then( data =>
                setProducts( data )
            )
    }

    var getAllProduct = () =>
    {
        fetch( api_URL + 'GetAllProducts' )
            .then( res => res.json() )
            .then( function ( data )
            {
                setProducts( data )
                setAllProducts( data )
            }, )
    }
    var removePro = function ( item )
    {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete this Product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success')
                    axios.get( api_URL + 'RemoveProduct/' + item.id )
                                .then( function ( response )
                                {
                                    if ( response.data == 1 )
                                    {
                                        var newProducts = [ ...Products ];
                                        newProducts.find( x => x.id == item.id ).isDeleted = "false";
                                        setProducts( newProducts );
                                    }
                                } )
                
                }
            })
        
    }
    

    var filterList = Products.map( ( item ) => (
        <>
            {
                item.isDeleted == "true" ?
                    <div key={ item.id } className=" Pro-div" >
                        < img alt={ item.name } src={ item.photo } style={ { border: 'none' } } className='img-Product img-fluid rounded w-100 d-block' />
                        <h2 className="product-Details" > { item.name } </h2>
                        <h2 className="product-Details" > Price: { item.price }$</h2>
                        <div className='Control-Pro col-12'>
                            
                            <a onClick={ ( x ) => removePro( item ) } className="Product-Details col-4 mr-1 ml-1">
                                <div className="Discuss">
                                    <div>
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                    <div>
                                        <span >Remove</span>
                                    </div>
                                </div>
                            </a>
                            <a data-toggle="modal" data-target=".bd-example-modal-lg" onClick={ ( y ) => updateItem( item ) } className="Product-Details col-4 mr-1 ml-1">
                                <div className="Discuss">
                                    <div>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </div>
                                    <div>
                                        <span >Edit</span>
                                    </div>
                                </div>
                            </a>
                            <Link className="Product-Details col-4 mr-1 ml-1" to={'/proDet/' + item.id}>
                                <div className="Discuss">
                                    <div>
                                        <i className="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div>
                                        <span >Info</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    : null
            }
        </>
    ) )

    var FilterDepts = depts.map( ( item ) => (
        <ul key={ item.id } className={ `btn btn-sm btn-primary Text-Label` } onClick={ addActiveClass } >
            <li onClick={ ( id ) => getProductsDept( item.id ) } > { item.name } </li>
        </ul>
        
    ) )

    

    const getProSearch = function ()
    {
        if ( search == "" )
        {
            setProducts(allProducts)
        }
        else
        {
            var newProducts =[...allProducts],
                item = newProducts.filter( x => x.name.toLowerCase().includes( search.toLowerCase() ) );
                console.log( item );
            if ( item.length == 0 )
            {
                Swal.fire({
                    title: 'Search Result',
                    text: "Sorry Not Products Found!",
                    icon: 'warning',
            })
            } else
            {
                setProducts( item );   
            }
        }
    }
    var updateItem = function ( item ) 
    { 
        setId( item.id );
        setName( item.name );
        setPrice( item.price );
        setPriceDis( item.priceAfterDiscount );
        setDesc( item.description );
    }
    return (
        <div>
            <div  className="modal fade bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content col-12 Form-Edit">
                        <div className="modal-header col-12" style={ { alignItems: "center" } }>
                            <h2 className="section-title mb-0 Form-title-modal">Product Info</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"> &times;</span>
                            </button>
                        </div>
                        <img className="logo-Form m-3" src="images/favicon.png" />
                        <form className="row" onSubmit={ ( e ) => e.preventDefault() }>
                            <div className="col-md-12">
                                <label className='label-Style'>Name</label>
                                <input value={ name } onChange={ ( e ) => setName( e.target.value ) } type="text" placeholder="Name" className="form-control px-0 mb-4" />
                            </div>
                            <div className="col-md-6">
                                <label className='label-Style'>price</label>
                                <input value={ price } onChange={ ( e ) => setPrice( e.target.value ) } type="text" placeholder="Price" className="form-control px-0 mb-4" />
                            </div>
                            <div className="col-md-6">
                                <label className='label-Style'>price After Discount</label>
                                <input value={ priceAfterDiscount } onChange={ ( e ) => setPriceDis( e.target.value ) } type="text" placeholder="Price After Discount" className="form-control px-0 mb-4" />
                            </div>
                            <div className="col-md-12">
                                <label className='label-Style'>Description</label>
                                <textarea value={ description } onChange={ ( e ) => setDesc( e.target.value ) } placeholder="description" className="form-control px-0 mb-4" ></textarea>
                            </div>
                        </form>
                        <div className="modal-footer col-12">
                            <button type="button" onClick={ validateForm } data-dismiss="modal" className="btn btn-send btn-modal col-lg-5 col-md-5 col-sm-11">Save changes</button>
                            <button type="button"  className="btn btn-send btn-close col-lg-5 col-md-5 col-sm-11" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        <section className = "section section-Product" >
            <div className = "container" >
                <div className = "row mb-5" >
                        <div>
                        <div className = "btn-group btn-group-toggle justify-content-center d-flex " style = {{ flexWrap: 'wrap' }} >
                            <div className = "col-12 text-center  " >
                                <h2 className="section-title-cont mb-4" > Products </h2>
                            </div>
                            <ul className={ `btn btn-sm btn-primary Text-Label active` } onClick={addActiveClass} >
                                <li onClick={ getAllProduct } > All</li>
                            </ul >
                                { FilterDepts }
                        </div>
                    </div>
                    </div>
                    <div >
                        <div className='search col-12'>
                            <input className="col-2 btn btn-send btn-search btn-search-Text" onClick={ getProSearch } value="Search" type='submit' />
                            <i className="fa-solid fa-magnifying-glass place"></i>
                            <input className="col-2 btn btn-send btn-search btn-search-icon" onClick={ getProSearch } value="" type='submit' />
                            <input className="col-10 form-control i-search " value={search} onChange={ (e) => setSearch(e.target.value) } placeholder='Search . . .' type='text' />
                        </div>
                    </div>
                <AnimatePresence >
                    < motion.div
                        layout
                        animate={{ y:0, opacity: 1 } }
                        initial={ {y:0, opacity: 0 } }
                        exit={ {y:300, opacity: 0 } }
                        transition={ { duration: 1 } }
                        className="col-12 Product-style ">
                            { filterList }
                    </motion.div>
                </AnimatePresence>
                <div id="Team"></div>
                </div >
            </section>
        </div>
    );
}

export default Products;
