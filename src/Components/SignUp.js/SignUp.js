import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, FormControlLabel, Grid, Link, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: pink[500],
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const SignUp = () => {
    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">Sign Up</Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField label="First Name" margin="normal" autoFocus autoComplete="First Name" variant="outlined" required fullWidth id="firstName" type="text" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Second Name" margin="normal" autoFocus autoComplete="First Name" variant="outlined" required fullWidth id="lastName" type="text" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Email Address" margin="normal" autoFocus autoComplete="email" variant="outlined" fullWidth required id="email" type="email" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Password" margin="normal" autoFocus autoComplete="current-password" variant="outlined" fullWidth required id="Password" type="password" />
                        </Grid>
                        <Grid item xs={12}><FormControlLabel
                            control={<Checkbox value="remember" color="secondary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email." />
                        </Grid>
                    </Grid>



                    <Button className={classes.submit} fullWidth variant="contained" color="secondary">SIGN UP</Button>
                </form>
            </div>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="#" variant="body2">Already have an account?SignIn</Link>
                </Grid>
            </Grid>
            <Box mt={7}>
                <Typography color="textSecondary" align="center">Copyright ©Murad Afrad{new Date().getFullYear()}</Typography>
            </Box>
        </Container>
    );
};

export default SignUp;