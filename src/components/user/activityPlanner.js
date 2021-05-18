import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from "@material-ui/core/styles";


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? '#f0d7cc' : 'white',

    // styles we need to apply on draggables
    ...draggableStyle
});
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#638177' : '#f0d7cc',
    padding: grid,
    width: 250
});


const emptyActivity = {
    name: '',
    detail: '',
    confirmationNumber: ''
}

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}
const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute",
        width: 300,
        backgroundColor: theme.palette.background.paper,
        padding: 20
    }
}));

export const ActivityList = ({ dayActivities, setDayActivities }) => {
    const [newActivity, setNewActivity] = useState(emptyActivity);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(dayActivities[sInd], source.index, destination.index);
            const newState = [...dayActivities];
            newState[sInd] = items;
            setDayActivities(newState);
        } else {
            const result = move(dayActivities[sInd], dayActivities[dInd], source, destination);
            const newState = [...dayActivities];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setDayActivities(newState.filter(group => group.length));
        }
    }

    const setFormValue = (e) => {
        const updatedActivity = {
            ...newActivity, [e.target.id]: e.target.value
        }
        setNewActivity(updatedActivity)
    }

    return (
        <div>
            <button
                type="button"
                className="button"
                onClick={() => {
                    setDayActivities([...dayActivities, []]);
                }}
            >
                Add day
      </button>
            <button
                type="button"
                className="button"
                onClick={handleOpen}
            >
                Add new item
      </button>
            <div style={{ display: "flex" }}>
                <Modal open={open}>
                    <div style={modalStyle} className={classes.paper}>
                        {/* <div className="activityTypeDropdown">
                            <label id="activityType">Type: </label>
                            <select className="typeDropdown" name="tripType" value={newActivity.activityType} onChange={setFormValue}>
                                <option value="" defaultValue hidden>Choose a type</option>
                                <option className="dropdown" value="flight">Transportation</option>
                                <option className="dropdown" value="activity"> Activity</option>
                                <option className="dropdown" value="food"> Food</option>
                                <option className="dropdown" value="accomodation" > Accomodation</option>
                            </select>
                        </div> */}
                        <div>
                            <label>Name: </label>
                            <input type="text" value={newActivity.name} id="name" onChange={setFormValue} />
                        </div>
                        <div>
                            <label>Details:</label>
                            <input type="text" value={newActivity.detail} id="detail" onChange={setFormValue} />
                        </div>
                        <div>
                            <label>Confirmation number:</label>
                            <input type="text" value={newActivity.confirmationNumber} id="confirmationNumber" onChange={setFormValue} />
                        </div>
                        <button type="submit" className="button" onClick={
                            () => {
                                const newActivityArr = [...dayActivities]
                                newActivityArr[0].push({ ...newActivity, id: Date.now().toString() })
                                setDayActivities(newActivityArr)
                                setNewActivity(emptyActivity)
                                setOpen(false)
                            }
                        }>Save</button>
                    </div>
                </Modal>
                <DragDropContext onDragEnd={onDragEnd}>
                    {dayActivities.map((el, ind) => (
                        <Droppable key={ind} droppableId={`${ind}`}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    {...provided.droppableProps}
                                >
                                    <h3>{`Day ${ind + 1}`}</h3>
                                    {el.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-around"
                                                        }}>
                                                        <div className="activityCard">
                                                            <p>Name: {item.name}</p>
                                                            <p>Detail: {item.detail}</p>
                                                            <p>Confirmation #: {item.confirmationNumber}</p>
                                                            <button
                                                                type="button"
                                                                className="button"
                                                                onClick={() => {
                                                                    const newState = [...dayActivities];
                                                                    newState[ind].splice(index, 1);
                                                                    setDayActivities(
                                                                        newState.filter(group => group.length)
                                                                    );
                                                                }}>
                                                                delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )
                            }
                        </Droppable >
                    ))}
                </DragDropContext >
            </div >
        </div >
    );
}
