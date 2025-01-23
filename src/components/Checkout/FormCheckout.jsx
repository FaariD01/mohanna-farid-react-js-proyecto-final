/* eslint-disable react/prop-types */
import validateForm from "../../utils/validateForm"
const FormCheckout = ( { dataForm, handleChangeInput,handleSubmitForm }) => {
  return (

    
    <form onSubmit={handleSubmitForm} className="form-checkout">
    <h3>Checkout</h3>
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

      <div className="content-input">
        <label className="label">Confirmar E-mail</label>
        <input type="email" value={dataForm.confirm} name="confirm" onChange={handleChangeInput}></input>
      </div>

      

        <button type="submit" className="button-send-order">Enviar orden</button>
    
  </form>
  )
}

export default FormCheckout
