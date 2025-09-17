import React, { useState, useEffect } from 'react'

export default function ProductForm({ onSave, onCancel, editing }) {
  const [product, setProduct] = useState({
    id: null,
    name: '',
    price: '',
    oldPrice: '',
    category: 'Vegetables',
    isActive: false,
    description: '',
    image: ''
  })

  useEffect(() => {
    if (editing) setProduct(editing)
  }, [editing])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setProduct(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => setProduct(prev => ({ ...prev, image: reader.result }))
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(product)
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h2 className="form-title">{product.id ? 'Edit Product' : 'Add Product'}</h2>
        <button type="button" className="home-btn" onClick={onCancel}>🏠 Home</button>
      </div>

      <form className="product-form" onSubmit={handleSubmit} noValidate>
        {/* Full width name */}
        <div className="form-row">
          <label className="form-field">
            <span className="field-label">Product Name</span>
            <input name="name" value={product.name} onChange={handleChange} placeholder="Enter product name" required />
          </label>
        </div>

        {/* Two columns: price + oldPrice */}
        <div className="form-row two-col">
          <label className="form-field">
            <span className="field-label">Price</span>
            <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" required />
          </label>

          <label className="form-field">
            <span className="field-label">Old Price</span>
            <input name="oldPrice" type="number" value={product.oldPrice} onChange={handleChange} placeholder="Old price (optional)" />
          </label>
        </div>

        {/* Category */}
        <div className="form-row">
          <label className="form-field">
            <span className="field-label">Category</span>
            <select name="category" value={product.category} onChange={handleChange}>
              <option>Vegetables</option>
              <option>Fruits & Nuts</option>
              <option>Dairy & creams</option>
              <option>Packages Food</option>
              <option>Staples</option>
            </select>
          </label>
        </div>

        {/* Checkbox aligned */}
        <div className="form-row checkbox-row">
          <label className="checkbox-field">
            <input name="isActive" type="checkbox" checked={product.isActive} onChange={handleChange} />
            <span>Active</span>
          </label>
        </div>

        {/* Description */}
        <div className="form-row">
          <label className="form-field">
            <span className="field-label">Description</span>
            <textarea name="description" value={product.description} onChange={handleChange} placeholder="Short description" />
          </label>
        </div>

        {/* Image upload */}
        <div className="form-row image-row">
          <label className="form-field">
            <span className="field-label">Product Image</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {product.image && <img className="preview" src={product.image} alt="preview" />}
          </label>
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button type="submit" className="btn save">Save</button>
          <button type="button" className="btn cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
