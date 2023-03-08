import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@mui/styles';
import {
    Input,
    Grid,
} from "@mui/material";


const useStyles= makeStyles({
    panelContainer:{
        padding:"8px",
    },
    panelTitle:{
        fontSize:"20px",
        fontFamily:"'Oswald', sans-serif"
    },
    inputStyles:{
        "&.MuiInput-root":{
            width:"100%",
            border:"1px solid black",
            borderRadius:"6px",
            height:"40px",
            border:"2px solid #9a9a9a",
            padding:"6px"
        }
    }
})


const FirstPanel = ({
    blogsData,
    setBlogsData,
    featuredImageHandlerUploader
})=>{
    const classes = useStyles();
    return (
        <div className = {classes.panelContainer}>
            <h3 className = {classes.panelTitle}>Post Settings</h3>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Input 
                        className = {classes.inputStyles} 
                        type="text" 
                        name="title" 
                        value={blogsData.title}
                        placeholder="Title"
                        disableUnderline={true}
                        onChange={(event)=>setBlogsData((val)=>{return {...val,title:event.target.value}})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input 
                        className = {classes.inputStyles} 
                        type="text" 
                        value={blogsData.meta_description}
                        name="metadescription" 
                        placeholder="Meta Description"
                        disableUnderline={true}
                        onChange={(event)=>setBlogsData((val)=>{return {...val,meta_description:event.target.value}})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input 
                        className = {classes.inputStyles} 
                        type="file" 
                        placeholder="Add Featured Image"
                        disableUnderline={true}
                        onChange={featuredImageHandlerUploader}
                    />
                </Grid>
                <Grid item xs={12}>
                    <img src={blogsData["featured image"]} width="100%"/>
                </Grid>
            </Grid>
        </div>
    )
}


export default FirstPanel;