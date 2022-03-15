import { Button, TextField } from '@mui/material'
import React from 'react'
import useStyles from "../../src/Components/Auth/AuthStyles"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const OrganizationForm = () => {
    const classes = useStyles();

    const values = {
        name: "",
        logo: "",
        shortDescription: "",
        longDescription: "",
        redesSociales: [],
    }

    



    return (
        <form className={classes.containerForm}>
            <TextField
                className={classes.fieldForm}
                type="text"
                fullWidth />
            <TextField
                className={classes.fieldForm}
                type="file"
                fullWidth />
            <CKEditor
                editor={ClassicEditor}
            />
            <TextField
                className={classes.fieldForm}
                type="text"
                fullWidth />
            <TextField
                className={classes.fieldForm}
                type="url"
                fullWidth />
            <Button color="secondary" variant="contained" fullWidth type="submit">Enviar</Button>
        </form>
    )
}

export default OrganizationForm