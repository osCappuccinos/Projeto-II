import React, { useEffect, useState } from 'react';
import CardProduct from '../components/cardProduct/cardProduct';
import CardStore from '../components/cardStore/cardStore';
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
        <div className="bodyContainer">
            <div className="destaque"></div>
            <div className="all-container">
                <h1 className="title">Novas tendências na Ruma</h1>
                <div className="card-grid">
                    <CardStore 
                        image1="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yOTM2NjE4OC81NWY5YTNmMjA5YzA1MzNmOWY2OWNhNTkwMTE3ZTkwMS5qcGc"
                        image2="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81ODQ4NjI2LzdkYjZhZTRjNzRkYTdiMDBhYzg3MGYzODhmNzc3YWY5LmpwZw"
                        image3="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn"
                        storeName="Bags&Co"
                    />
                    <CardStore 
                        image1="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yOTM2NjE4OC81NWY5YTNmMjA5YzA1MzNmOWY2OWNhNTkwMTE3ZTkwMS5qcGc"
                        image2="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81ODQ4NjI2LzdkYjZhZTRjNzRkYTdiMDBhYzg3MGYzODhmNzc3YWY5LmpwZw"
                        image3="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn"
                        storeName="Bags&Co"
                    />
                    <CardStore 
                        image1="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yOTM2NjE4OC81NWY5YTNmMjA5YzA1MzNmOWY2OWNhNTkwMTE3ZTkwMS5qcGc"
                        image2="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81ODQ4NjI2LzdkYjZhZTRjNzRkYTdiMDBhYzg3MGYzODhmNzc3YWY5LmpwZw"
                        image3="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn"
                        storeName="Bags&Co"
                    />
                    <CardStore 
                        image1="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8yOTM2NjE4OC81NWY5YTNmMjA5YzA1MzNmOWY2OWNhNTkwMTE3ZTkwMS5qcGc"
                        image2="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy81ODQ4NjI2LzdkYjZhZTRjNzRkYTdiMDBhYzg3MGYzODhmNzc3YWY5LmpwZw"
                        image3="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn"
                        storeName="Bags&Co"
                    />
                </div>
            </div>
            <div className="all-container">
                <h1 className="title">Produtos</h1>
                <div className="card-grid">
                    {content?.items?.map((post) => 
                        <CardProduct
                            price={post.fields.preco} 
                            title={post.fields.nome} 
                        />
                    )}
                </div>
            </div>
            

        </div>
    );
}

export default Products;