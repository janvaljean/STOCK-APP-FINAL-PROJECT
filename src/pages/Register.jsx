import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField"
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { Form } from "formik"
import { object, string } from "yup"
import LoadingButton from "@mui/lab/LoadingButton"
import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  const navigate = useNavigate();
  const { currentUser, error, loading } = useSelector((state) => state.auth);
  const  {register } = useAuthCall();


  const registerScheme = object({
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

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          <Formik
            initialValues={{ email: "", password: "",  username:"",           firstname:"", lastname:"" }}
            validationSchema={registerScheme}
            onSubmit={(values, actions) => {
              register({...values, password2: values.password })
              actions.resetForm()
              actions.setSubmitting(false)
            }}>
            {({values, handleChange, handleBlur, errors, touched}) =>(
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
        <LoadingButton
          loading={loading}
          loadingPosition="center"
          variant="contained"
          type="submit"
        >
          Submit
        </LoadingButton>
      </Box>
    </Form>
            )}        
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
