/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useState } from 'react';

import * as yup from 'yup';
const Contact = () =>
{
    var [ Fname, setFname ] = useState( "" ),
        [ Lname, setLname ] = useState( "" ),
        [ email, setEmail ] = useState( "" ),
        [ message, setMessage ] = useState( "" ),
        validFname = document.getElementById( 'Msg-Fname-Error' ),
        validLname = document.getElementById( 'Msg-Lname-Error' ),
        validEmail = document.getElementById( 'Msg-email-Error' ),
        validMsg = document.getElementById( 'Msg-Error' ),
        api_URL = 'https://localhost:44358/api/ECommerce/';
    
    const userSchema = yup.object().shape( {
        Fname: yup.string().required(),
        Lname: yup.string().required(),
        message:yup.string().required(),
        email: yup.string().email().required(),
    } )
    async function validateForm ()
    {
        let dataObject = {        
            Fname: Fname,
            Lname: Lname,
            email: email,
            message:message
        };

        const isValid = await userSchema.isValid( dataObject );
        if ( isValid )
        {
            axios.post(api_URL+"PostContactData",{Fname,Lname,email,message})
                .then( response => response.data )
            setFname( "" );
            setLname( "" );
            setEmail( "" );
            setMessage( "" );
            validFname.innerHTML="";
            validLname.innerHTML="";
            validEmail.innerHTML="";
            validMsg.innerHTML="";
        } 
        else
        {
            if ( Fname.length == 0)
            {
                validFname.innerHTML = "Frist Name is Required <i class='fa-solid fa-circle-exclamation'></i>";
                if ( validFname.classList.contains( "valid" ) )
                {
                    validFname.classList.remove( "valid" );
                }
                validFname.classList.add( "Error" );               
            }
            else
            {
                validFname.innerHTML = " Frist Name is valid  <i class='fa-solid fa-circle-check'></i>";
                if ( validFname.classList.contains( "Error" ) )
                {
                    validFname.classList.remove( "Error" );
                }
                validFname.classList.add( "valid" );
            }
            if ( Lname.length == 0 )
            {
                validLname.innerHTML = "Last Name is Required <i class='fa-solid fa-circle-exclamation'></i>";
                if ( validLname.classList.contains( "valid" ) )
                {
                    validLname.classList.remove( "valid" );
                }
                validLname.classList.add( "Error" );
            }
            else
            {
                validLname.innerHTML = " Last Name is valid  <i class='fa-solid fa-circle-check'></i>";
                if ( validLname.classList.contains( "Error" ) )
                {
                    validLname.classList.remove( "Error" );
                }
                validLname.classList.add( "valid" );
            }
            if ( email.length == 0 )
            {
                validEmail.innerHTML = "Email is Required <i class='fa-solid fa-circle-exclamation'></i>";
                if ( validEmail.classList.contains( "valid" ) )
                {
                    validEmail.classList.remove( "valid" );
                }
                validEmail.classList.add( "Error" );
            }
            else
            {
                validEmail.innerHTML = " Email is valid  <i class='fa-solid fa-circle-check'></i>";
                if ( validEmail.classList.contains( "Error" ) )
                {
                    validEmail.classList.remove( "Error" );
                }
                validEmail.classList.add( "valid" );
            }
            if ( message.length == 0 )
            {
                validMsg.innerHTML = "Message is Required <i class='fa-solid fa-circle-exclamation'></i>";
                if ( validMsg.classList.contains( "valid" ) )
                {
                    validMsg.classList.remove( "valid" );
                }
                validMsg.classList.add( "Error" );
            }
            else
            {
                validMsg.innerHTML = " Message is valid  <i class='fa-solid fa-circle-check'></i>";
                if ( validMsg.classList.contains( "Error" ) )
                {
                    validMsg.classList.remove( "Error" );
                }
                validMsg.classList.add( "valid" );
            }
        }
    }
    return (
        <div>
            <section className="section section-on-footer bg-Contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="section-title-Cont">Contact Info</h2>
                        </div>
                        <div className="col-lg-8 mx-auto">
                            <div className="bg-white rounded text-center p-5 shadow-down Form-Edit">
                                <img className="logo-Form" src="images/favicon.png" />
                                
                                <form className="row " onSubmit={(e)=>e.preventDefault()}>
                                    <div className="col-md-6">
                                        <input value={ Fname } onChange={ ( e ) => setFname( e.target.value ) } type="text" placeholder="First Name" className="form-control px-0 mb-4" />
                                        <div id="Msg-Fname-Error" className=""></div>
                                    </div>
                                    <div className="col-md-6">
                                        <input value={ Lname } onChange={ ( e ) => setLname( e.target.value ) } type="text" placeholder="Last Name" className="form-control px-0 mb-4" />
                                        <div id="Msg-Lname-Error"  className=""></div>
                                    </div>
                                    <div className="col-md-12">
                                        <input value={ email } onChange={ ( e ) => setEmail( e.target.value ) } type="email" placeholder="Email Address" className="form-control px-0 mb-4" />
                                            <div id="Msg-email-Error"  className=""></div>
                                    </div>
                                    <div className="col-12">
                                        <textarea value={message} onChange={(e)=> setMessage(e.target.value)} className="form-control px-0 mb-4"
                                            placeholder="Type Message Here" ></textarea>
                                            <div id="Msg-Error"  className=""></div>
                                    </div>
                                    <div className="col-lg-6 col-10 mx-auto">
                                        <button className="btn btn-send btn-modal w-100" type='submit' onClick={ validateForm } >send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;
