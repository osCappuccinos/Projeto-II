import React from 'react';
import Card from '../components/card/card';
import "./Products.css"
import { createUser } from '../service/firebaseController';

function Products() {
    createUser("0", "lucas", "l@a.com", "123", "oi");
    return (
        <div className='produtos-container'>
            <h1 className='produtos-title'>Produtos</h1>
            <div className="card-grid">
                <Card
                    price={100}
                    title="Tote Bag" 
                    image="https://img.elo7.com.br/product/zoom/2B11BD7/bolsa-artesanal-bolsa-artesanal.jpg" 
                />
                <Card
                    price={200} 
                    title="Bolsa crochê" 
                    image="https://images.tcdn.com.br/img/img_prod/653412/bolsa_de_rafia_artesanal_163_5_20191112154106.jpeg" 
                />
                <Card
                    price={320} 
                    title="Bolsa artesanal em jeans" 
                    image="https://images.tcdn.com.br/img/img_prod/878243/bolsa_artesanal_em_jeans_com_aplique_e_bolso_duplo_externo_em_jeans_e_estrelinhas_255_1_6c953cde31a82e7c251df0127faa62b0.jpg" 
                />
                <Card
                    price={220} 
                    title="Bolsa Boho" 
                    image="https://images.tcdn.com.br/img/img_prod/727682/bolsa_folk_couro_artesanal_poket_pedra_estrela_e_franjas_1471_1_599585a106649b2d554081b0ef142f32.jpg" 
                />
                <Card
                    price={210} 
                    title="Bolsa artesanal em Couro" 
                    image="https://img.irroba.com.br/fit-in/700x700/filters:fill(fff):quality(80)/lojajgea/catalog/nc0010-91/nc0010-91.jpg" 
                />
                <Card
                    price={120} 
                    title="Bolsa artesanal Praia" 
                    image="https://cdn.awsli.com.br/600x450/1070/1070817/produto/186773739/4a9770f251.jpg" 
                />
            </div>
        </div>
    );
}

export default Products;