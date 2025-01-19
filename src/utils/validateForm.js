import { object, string, number } from "yup";

let userSchema = object({
    fullname: string().required("El campo nombre es requerido") ,
    phone: number().positive("El numero debe ser positivo").required(),
    email: string().email("Debe ingresar una direccion de e-mail").required()
})

const validateForm = async(dataForm) => {

try{
    await userSchema.validate(dataForm)
    return {status:"success", message: "Validaciones pasadas correctamente!!"}
}   catch(error){
    return{status: "Error", message: error.message}
}

}

export default validateForm