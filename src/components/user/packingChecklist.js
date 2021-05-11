import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export function PackingCheckboxList() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <Grid container justify="center">
                <Grid item xs={9} >
                    <div>
                        <h1>Packing List</h1>
                    </div>
                </Grid>
                <Grid item xs={9} >
                    <List dense className={classes.root}>
                        {["Toothbrush", "Toothpaste", "Phone charger", "Passport (or other form of ID)"].map((value) => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                                <ListItem key={value} button>
                                    <ListItemText id={labelId} primary={`${value}`} />
                                    <ListItemSecondaryAction>
                                        <Checkbox
                                            edge="end"
                                            onChange={handleToggle(value)}
                                            checked={checked.indexOf(value) !== -1}
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            );
                        })}
                    </List>
                </Grid>
            </Grid>
        </>
    );
}