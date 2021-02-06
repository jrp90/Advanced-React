import React from 'react';
import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Product from './Product';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns 1fr 1fr;
  grid-gap: 60px;
`;

function Products(props) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  console.log(data, error, loading);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div>
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product product={product} />
        ))}
      </ProductsListStyles>
    </div>
  );
}

Products.propTypes = {};

export default Products;
