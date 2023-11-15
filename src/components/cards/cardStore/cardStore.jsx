import React, { useEffect, useState } from 'react';

import contentfulController from '../../../service/contentful/contentfulController';
import { FETCH_STATUS } from '../../../service/fetchStatus';
import { H2, H3 } from '../../title/titles';

import "./cardStore.css"

function CardStore({ store }) {
  const { getStoreProductsContent } = contentfulController();

  const [content, setContent] = useState([]);
  const [status, setStatus] = useState(FETCH_STATUS.IDLE);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setStatus(FETCH_STATUS.LOADING);

      const response = await getStoreProductsContent(store.id);

      if (response) {
        setContent(response);
        setStatus(FETCH_STATUS.SUCCESS);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setStatus(FETCH_STATUS.ERROR);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const uri = '/lojas/' + store.id
  if (status === FETCH_STATUS.LOADING) {
    return <div></div>
  } else if (status === FETCH_STATUS.ERROR) {
    return <span>{error}</span>
  } else if (status === FETCH_STATUS.SUCCESS) {
    return (
      <a href={uri}>
        <div className="cardStore">
          <div className="imagesGrid">
            {
              content
                .slice(0, 3)
                .map((contents) => (
                  <img className="img" src={contents.images[0].file.url} key={contents.id} alt={`Product ${contents.id}`} />
                ))
            }
          </div>
          <H2 id="blackText" text={store.name}/>
          <H3 id="blackText" text={content[0].category}/>
        </div>
      </a>
    );
  }
}

export default CardStore;