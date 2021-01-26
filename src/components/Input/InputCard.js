import React, {useState, useContext} from 'react'
import {Paper, InputBase, Button, IconButton} from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear";
import {fade, makeStyles} from "@material-ui/core/styles";
import storeApi from '../../utils/storeApi'
import store from '../../utils/store';

const useStyle = makeStyles((theme)=>({
    card:{
        width:"280px",
       margin: theme.spacing(0,1,1,1),
       paddingBottom: theme.spacing(4),
    },
    input:{
        margin:theme.spacing(1),
    },
    btnConfirm:{
        background:"#5AAC44",
        color: '#fff',
        "&:hover":{
            background:fade("#5AAC44", 0.25),
        }
    },
    confirm: {
        margin: theme.spacing(0,1,1,1),
    }
}))
export default function InputCard({setOpen, listId, type}) {
    const classes = useStyle();
    const {addMoreCard, addMoreList} = useContext(storeApi);
    const [title, setTitle] = useState('');
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    const handleBtnConfirm = () => {
        if (type === 'card') {
            addMoreCard(title, listId);
            setTitle('');
            setOpen(false);
        }
        else {
            addMoreList(title);
            setTitle('');
            setOpen(false);
        }
    };

    return (
        <div>
            <div className={classes.card}>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={handleOnChange}
                        multiline 
                        onBlur ={()=>setOpen(false)}
                        fullWidth 
                        inputProps={{
                            className:classes.input,
                        }}
                        value={title}
                        placeholder={type === 'card'
                                        ?"Введите название задачи..."
                                        :"Введите название списка..."}
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>{type === "card"?"Добавить задачу":"Добавить список"}</Button>
                <IconButton onClick={()=> setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}