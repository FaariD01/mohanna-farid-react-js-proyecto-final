import { toast } from "react-toastify";
import { object, string, number } from "yup";

let userSchema = object({
        fullname: string().required("El campo nombre es requerido") ,
        phone: number().positive("El numero debe ser positivo").required(),
        email: string().email("Debe ingresar una direccion de e-mail").required(),
        confirm: string().email("Los emails son diferentes").required()
        
    })
    
const validateForm = async(dataForm) => {


    if(dataForm.email === dataForm.confirm){ // Primero verifico que los e-mails coincidan

        try{
            await userSchema.validate(dataForm)
            return {status:"success", message: "Validaciones pasadas correctamente!!"}
        }   catch(error){
            return{status: "Error", message: error.message}
        }
    }else{
        toast("Los e-mails ingresados no coinciden")
    }
    
}    
  
export default validateForm