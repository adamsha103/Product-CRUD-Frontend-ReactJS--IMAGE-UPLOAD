import React, { useState } from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

export default function App() {
  const [products, setProducts] = useState([])
  const [editing, setEditing] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleSave = (product) => {
    if (product.id) {
      setProducts(products.map(p => p.id === product.id ? product : p))
    } else {
      product.id = Date.now()
      setProducts([...products, product])
    }
    setShowForm(false)
    setEditing(null)
  }

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  return (
    <div className="container">
      {!showForm && (
        <>
          <h1>Home Page</h1>
          {/* Home → only products, no edit/delete */}
          <ProductList products={products} showActions={false} />
          <button className="btn-add" onClick={() => setShowForm(true)}>+ Add Product</button>
        </>
      )}

      {showForm && (
        <>
          <ProductForm 
            onSave={handleSave} 
            onCancel={() => { setShowForm(false); setEditing(null); }} 
            editing={editing} 
          />
          <h2>Manage Products</h2>
          {/* Form Page → show products with edit/delete */}
          <ProductList 
            products={products} 
            onEdit={(p) => { setEditing(p); setShowForm(true) }} 
            onDelete={handleDelete} 
            showActions={true} 
          />
        </>
      )}
    </div>
  )
}
