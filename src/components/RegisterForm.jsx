import Box  from "@mui/material/Box";
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button";
import { Form } from "formik";
import { object, string } from "yup";

 export   const registerScheme = object({
    email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Email zorunludur"),
    firstname: string()
    .required("firstname zorunludur")
    .max(20, "firstname en fazla 20 karakter olmalıdır"),
    lastname: string()
    .required("lastname zorunludur")
    .max(20, "lastname en fazla 20 karakter olmalıdır"),
    username: string()
    .required("username zorunludur")
    .max(20, "username en fazla 20 karakter olmalıdır"),
    password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  })


const RegisterForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
 
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
         <TextField
          label="User Name"
          name="username"
          id="username"
          type="username"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.username && errors.username}
          error={touched.username && Boolean(errors.username)}
        />
        <TextField
          label="First Name"
          name="firstname"
          id="firstname"
          type="firstname"
          variant="outlined"
          value={values?.firstname || ""}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.firstname && errors.firstname}
          error={touched.firstname && Boolean(errors.firstname)}
        />
         <TextField
          label="Last Name"
          name="lastname"
          id="lastname"
          type="lastname"
          variant="outlined"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.lastname && errors.lastname}
          error={touched.lastname && Boolean(errors.lastname)}
        />
         <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          label="Password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
        <Button
          size="large"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Form>
            )}        
              


export default RegisterForm
