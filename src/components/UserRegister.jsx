import React, {useState} from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBDropdown,
    MDBDropdownItem, 
    MDBDropdownMenu,
    MDBDropdownToggle
}
from 'mdb-react-ui-kit';

export default function UserRegister() {
    const[mdbdropdown, setMDBDropdown]=useState(false);

    const abrirCerrarDropdown=()=>{
        setMDBDropdown(!mdbdropdown);
    }
    return (
    <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center'>

        <MDBCol md='9'>

            <MDBCard className='my-5 rounded-3' style={{maxWidth: '500px'}}>

            <MDBCardBody className='px-5'>

                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">FORMULARIO DE REGISTRO</h3>

                <MDBRow>

                <MDBCol md ='10'>
                    <MDBInput wrapperClass='mb-4'  id='form1' type='text' placeholder='Escriba su correo'/>
                </MDBCol>

                <MDBCol md='10'>
                    <MDBInput wrapperClass='mb-4' placeholder='Escriba su ID(últimos 3 dígitos de CC)' id='form2' type='text'/>
                </MDBCol>


                <MDBCol md='10'>
                    <MDBInput wrapperClass='passwordpicker mb-4' placeholder='Escriba su contraseña' id='form3' type='text'/>
                </MDBCol>

                <MDBCol md='10' className='mb-4'>
                    <MDBDropdown isOpen={mdbdropdown} toggle={abrirCerrarDropdown}>
                    <MDBDropdownToggle>Seleccione la pregunta de seguridad</MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem link>¿Cuál fue su primer apodo de pequeño?</MDBDropdownItem>
                        <MDBDropdownItem link>¿Quién fue primer amor?</MDBDropdownItem>
                        <MDBDropdownItem link>¿Cuál es el nombre de su abuela?</MDBDropdownItem>
                    </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBCol>

                </MDBRow>

                <MDBRow>
                <MDBCol md='10'>
                    <MDBInput wrapperClass='mb-4' placeholder='Escriba su respuesta' id='form4' type='text'/>
                </MDBCol>
                </MDBRow>

                <MDBBtn color='success' className='mb-4' size='lg'>Registrarse</MDBBtn>

            </MDBCardBody>
            </MDBCard>

        </MDBCol>
        </MDBRow>

    </MDBContainer>
    );
}
