import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import {collection, getDocs} from 'firebase/firestore';
import { Card, Button } from 'react-bootstrap';

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
{
    item.map(result => (
        
        <Card key={result.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ width: '8rem' }} src={result.image} />
        <Card.Body>
            <Card.Title>{result.nombre}</Card.Title>
            <Card.Text>{result.descripcion}</Card.Text>
            <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
    </Card>
    ))
}
    
</>
  )
}
