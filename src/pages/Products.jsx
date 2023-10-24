import React, { useEffect, useState } from 'react';
import Card from '../components/card/card';
import { readProduct } from '../service/firebaseController';
import "./Products.css";
import {CreateClient, createClient, createGlobalOptions} from 'contentful'

function Products() {
    const [content, setContent] = useState([])
    const [products, setProducts] = useState([]);

    const client = createClient({space: "kw4ib93qcl5n", accessToken: "PW2eCE2_FsOgzJCcDQjltadtHM4sBq2vbqvCzEQWjrg"})

    useEffect(() => {
        const getAllEntries = async () => {
            try {
                await client.getEntries().then((entries) => {
                    console.log(entries)
                    setContent(entries)
                })
            } catch(error){
                console.log("error")
            }
        }
        getAllEntries()
    }, []
    )

    useEffect(() => {
        readProduct('product456', (error, data) => {
            setProducts(data);
        });
    })

    return (
        <div className='produtos-container'>
            <h1 className='produtos-title'>Produtos</h1>

            
            <div className="card-grid" >
                {content?.items?.map((post) => 
                    <div className="card-holder" key={post.sys.id}>
                        <Card
                            price={post.fields.preco} 
                            title={post.fields.nome} 
                            image={post.fields.imagem.fields.file.url} 
                        />
                    </div>
                )}
            <Card 
                title = {products.productName}
                id = {products.productId} />
            </div>
            

        </div>
    );
}

export default Products;