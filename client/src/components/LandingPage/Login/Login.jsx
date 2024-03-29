import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Img from "../../../assets/house1.jpg";
import img2 from "../../../assets/login.jpg";
import { useState } from 'react';
import { loginReq } from '../../../services/requests';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginHandler = async (event) => {
    try {
      // alert(JSON.stringify(formData));
      event.preventDefault();
      const resp = await loginReq(formData);
      // alert(JSON.stringify(resp.data));
      if (resp.data.success === false) 
      {
        alert(resp.data.message);
      }
      else {
        localStorage.setItem("token", resp.data.userFound.token);
        localStorage.setItem("email", resp.data.userFound.email);
        localStorage.setItem("Userid", resp.data.userFound.id);
        localStorage.setItem("accountType", resp.data.userFound.accountType);
        if (resp.data.userFound.accountType === "Customer") {
          navigate("/userdash");
        }
        else {
          navigate("/ownerDashboard");
        }
      }
    }
    catch (error) {
      console.error("Registration error:", error);
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" md={12} style={{ marginLeft: '13rem',marginRight:'0rem' }} sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={4.5}
            sx={{
              backgroundImage: `url(${Img})`,

              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
              backgroundPosition: 'contain',
            }}
          />
          <Grid item xs={12} sm={8} md={4.5} component={Paper} elevation={6 } square style={{display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', justifyContent:'center'}}  >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{ width: '100px', height: '100px' }}>
                <img src={img2} alt="" style={{ maxWidth: '100%' }} />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log In
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={changeHandler}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={changeHandler}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={loginHandler}
                >
                  Log In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" style={{ textDecoration: 'none' }}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/Signup" variant="body2" style={{ textDecoration: 'none' }}>
                      {'Register?'}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}