import React from 'react'
import Link from 'next/link';
import {commerce} from '../lib/commerce';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

export default function Home({merchant, categories, products}) {
 
  return (
 
    <React.Fragment>
      <h1>{merchant.data[0].name}</h1>

      <h3>
        <Link href="/categories">
          <a>Categories</a>
        </Link>
      </h3>

      <CategoryList categories={categories} />

      <h3>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </h3>
      <ProductList products={products} />
    </React.Fragment>
   
  )
}

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const {data:categories} = await commerce.categories.list();
  // products are stored in data section of object
  const {data: products} = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}