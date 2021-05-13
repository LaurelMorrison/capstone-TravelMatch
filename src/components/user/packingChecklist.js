import Grid from '@material-ui/core/Grid'
import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";



export function PackingCheckboxList() {
    const [packingList, setPackingList] = useState([]);

    return (
        <div className="packingListForm">
            <Grid container>
                <Grid>
                    <label>Build out your packing checklist: </label>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={['backpack', 'book', 'bras', 'bug spray', 'cash/currency', 'computer', 'deodorant', 'dresses', 'emergency contact info', 'flip flops', 'glasses/contacts', 'gloves', 'hair brush', 'hair ties/headband', 'hat', 'headphones', 'hiking shoes', 'journal', 'makeup', 'medication', 'neck pillow', 'outlet converter', 'pants', 'pjs', 'purse', 'razor', 'shampoo/conditioner', 'shorts', 'skiing poles', 'skis', 'snow pants', 'snowboard', 'socks', 'sunglasses', 'surfboard', 'swimsuit', 't-shirts', 'tank tops', 'tickets', 'toothbrush', 'towel', 'tweezer', 'umbrella', 'underwear', 'wallet', 'winter jacket']}
                        value={packingList}
                        onChange={(e, newval, reason) => {
                            setPackingList(newval);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                color="primary"
                                style={{ colorPrimary: '#f0d7cc' }}
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13 && e.target.value) {
                                        setPackingList(packingList.concat(e.target.value));
                                    }
                                }}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </div>
    );
}