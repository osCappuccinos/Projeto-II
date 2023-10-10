import React, {useEffect, useState} from 'react';
import Card from '../components/card/card';
import "./Products.css"
import {CreateClient, createClient, createGlobalOptions} from 'contentful'

function Products() {
    const [produtos, setProdutos] = useState([])
    
    const client = createClient({space: "kw4ib93qcl5n", accessToken: "PW2eCE2_FsOgzJCcDQjltadtHM4sBq2vbqvCzEQWjrg"})

    useEffect(() => {
        const getAllEntries = async () => {
            try {
                await client.getEntries().then((entries) => {
                    console.log(entries)
                    setProdutos(entries)
                })
            } catch(error){
                console.log("error")
            }
        }
        getAllEntries()
    }, []
    )

    return (
        <div className='produtos-container'>
            <h1 className='produtos-title'>Produtos</h1>

            
            <div className="card-grid" >
                {produtos?.items?.map((post) => 
                    <div className="card-holder" key={post.sys.id}>
                        <Card
                            price={post.fields.preco} 
                            title={post.fields.nome} 
                            image={post.fields.imagem.fields.file.url} 
                        />
                    </div>
                )}
            </div>
            

        </div>
    );
}

export default Products;