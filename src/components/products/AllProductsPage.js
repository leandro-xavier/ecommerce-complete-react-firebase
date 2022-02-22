import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import {collection, getDocs} from 'firebase/firestore';
import { Card, Button } from 'react-bootstrap';
import './alproducts.css';

export const AllProductsPage = () => {

    const [item, SetItem] = useState([])

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
    }


  return (
    <>
        <div className="container Allproduct-container">
            <div className='allproduct-filter-container'>
                <h1>Productos que existen con " La palabra a buscar"</h1>
                <h4>mostrando "todos los resultados"</h4>
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
