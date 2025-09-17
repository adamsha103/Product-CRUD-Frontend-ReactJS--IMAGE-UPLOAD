import React from 'react'

export default function ProductCard({ product, onEdit, onDelete, showActions }) {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.image ? <img src={product.image} alt={product.name} /> : <span>No Image</span>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="price-row">
          <span className="product-price">{product.price}</span>
          {product.oldPrice && <span className="old-price">₹{product.oldPrice}</span>}
        </div>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
      </div>

      {showActions && (
        <div className="card-buttons">
          <button className="btn-edit" onClick={() => onEdit(product)}>Edit</button>
          <button className="btn-delete" onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}
