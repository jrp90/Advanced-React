import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Products from '../components/Products';

export default function ProductsPage() {
  return (
    <div>
      <Products />
    </div>
  );
}
