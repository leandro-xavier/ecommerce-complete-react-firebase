import React, { useEffect, useState } from 'react';
import {collection,getDocs, query, where} from 'firebase/firestore';
import { db } from '../../config/firebase';
import {Card, Button, Dropdown, Container, Col, Row} from 'react-bootstrap';
import './accessories.css'

export const Cleaning = () => {

  const [item, SetItem] = useState([]);

  useEffect(() => {
    productFunc()
   }, [])

  const productFunc = async () => {
    const productRef = collection(db, "products")

    const q = query(productRef, where("categories", "array-contains", "cleaning"));
  
    const productAccessories = await getDocs(q)
    let is = []
    await productAccessories.forEach((doc) => {
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
  }
 
  return (
    <>
    <div className='container accessories'>
      <div className='header-categories'>
        <Container>
          <Row>
            <Col><h2 className='h2'>Categoria De Limpieza</h2></Col>
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
                
                <Card key={result.id} style={{ width: '18rem', display:'inline-block' }}>
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
