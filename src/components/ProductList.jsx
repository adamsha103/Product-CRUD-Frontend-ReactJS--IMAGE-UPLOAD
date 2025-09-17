import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products, onEdit, onDelete, showActions = false }) {
  if (products.length === 0) return <p>No products found.</p>

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard 
          key={p.id} 
          product={p} 
          onEdit={onEdit} 
          onDelete={onDelete} 
          showActions={showActions} 
        />
      ))}
    </div>
  )
}
