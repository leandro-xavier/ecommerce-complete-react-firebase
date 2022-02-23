import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import {collection, getDocs} from 'firebase/firestore';
import { Card, Button, Form, FormControl,Row, Col, Container,Dropdown } from 'react-bootstrap';
import './alproducts.css';

export const AllProductsPage = () => {

    const [item, SetItem] = useState([]); //contiene los datos mapeados de firebase  dinamica
    const [tabla, setTabla] = useState([]);    //contiene los datos que se muestran de forma estatica
    const [busqueda, setBusqueda] = useState(""); //aqui esta el estado de la busqueda

    useEffect(() => {
     dataAll()
    }, [])
    
    const dataAll = async() => {
        const allProductList = await getDocs(collection(db, 'products'));
        let is = []
        await allProductList.forEach((doc) => {
        is[doc.id] = doc.data()
       });

       let valores = await Object.values(is)

       const dest = await valores.map(res => {
           return {
               id: res.id,
               nombre: res.nombre,
               precio: res.precio,
               descripcion: res.descripcion,
               image: res.image
           }
       })

       SetItem(dest)
       setTabla(dest)
       console.log(dest);
    }

    const handleChange= (e) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        let ResultadoBusqueda = tabla.filter((elemento) => {
            if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        SetItem(ResultadoBusqueda);
     }

  return (
    <>
        <div className="Container Allproduct-container">
            <div className='allproduct-filter-container'>
            <Container>
                <Row>
                    <Col>
                        <Form className="d-flex FormCont">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={{borderRadius: '50px', width:'380px'}}
                        value={busqueda}
                        onChange={handleChange}
                        />
                        <Button style={{borderRadius: '50px', width:'80px'}} variant="danger" >Search</Button>
                        </Form>
                    </Col>
                    <Col>
                    <Dropdown className='drop'>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="danger">
                            Ordenar por
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="light">
                            <Dropdown.Item href="#/action-1"> Menor precio</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Mayor precio</Dropdown.Item> 
                        </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
            </div>
            {
                item.map(result => (
                    
                    <Card key={result.id} style={{ width: '18rem', display:'inline-block', margin:'12px'}}>
                    <Card.Img variant="top" style={{ width: '12rem' }} src={result.image} />
                    <Card.Body>
                        <Card.Title>{result.nombre}</Card.Title>
                       {/* <Card.Text>{result.descripcion}</Card.Text> */}
                        <Button variant="danger">Añadir al carrito</Button>
                    </Card.Body>
                </Card>
                ))
            }
        </div>
    </>
  )
}
