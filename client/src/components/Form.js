import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        color: "#FCC201",
        textShadow: '2px 2px 2px black'
    },
}));

export default function DialogSelect({ user, setUser }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');
    const [name, setName] = React.useState(user.username)
    const [password, setPassword] = React.useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        alert("Are you sure?")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            "username" : name
          })
        })
        .then(res => res.json())
        .then(setUser)
    }

    return (
        <div>
            <Button onClick={handleClickOpen} size="large">

                <Typography variant="h3" className={classes.title}>
                    {user.username}
                </Typography>
                <CreateIcon fontSize="medium" />

            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit your account</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit} className={classes.container} >
                        <FormControl className={classes.formControl} >
                            <TextField
                                value={name}
                                onChange={handleChange}
                                name="username"
                                id="outlined-basic"
                                variant="outlined"
                                label="Username"
                            />
                        </FormControl>
                        {/* <FormControl className={classes.formControl}>
                            <TextField
                                value={"Password"}
                                onChange={handleChange}
                                // input={}
                                id="outlined-basic"
                                variant="outlined"
                                label="Password"
                            />
                        </FormControl> */}
                        <Button type="submit" onClick={handleClose} color="primary">
                            Save
                        </Button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete} color="secondary">
                        Delete Account
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}