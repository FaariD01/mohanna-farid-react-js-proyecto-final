import React from 'react'

const FormCheckout = ( { dataForm, handleChangeInput,handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm} className="form-checkout">

      <div className="content-input">
        <label className="label">Nombre Completo</label>
        <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeInput}></input>
      </div>

      <div className="content-input">
        <label className="label">Telefono</label>
        <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeInput}></input>
      </div>

      <div className="content-input">
        <label className="label">E-mail</label>
        <input type="email" value={dataForm.email} name="email" onChange={handleChangeInput}></input>
      </div>

        <button type="submit" className="button-send-order">Enviar orden</button>
    
  </form>
  )
}

export default FormCheckout
