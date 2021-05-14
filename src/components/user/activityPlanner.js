import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { blue } from "@material-ui/core/colors";

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    }));

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

const activityTypes = {
    flight: 'flight',
    food: 'food',
    activity: 'activity',
    accomodation: 'accomodation∂'
}

const dayActivityMockData = [
    [
        {
            id: '1',
            activityType: activityTypes.flight,
            name: 'Flight from boston to mars',
            time: Date.now(),
            confirmationNumber: '123'
        },
        {
            id: '2',
            activityType: activityTypes.food,
            name: 'dinner at the airport',
            time: Date.now(),
            confirmationNumber: '123'
        },
    ],
    [
        {
            id: '3',
            activityType: activityTypes.activity,
            name: 'Skydiving',
            time: Date.now(),
            confirmationNumber: '123'
        },
        {
            id: '4',
            activityType: activityTypes.accomodation,
            name: '1 night at the Ritz',
            time: Date.now(),
            confirmationNumber: '123'
        },
    ],
]

const emptyActivity = {
    activityType: '',
    name: '',
    time: Date.now(),
    confirmationNumber: ''
}

export const ActivityList = () => {
    const [dayActivities, setDayActivities] = useState(dayActivityMockData);
    const [formMode, setFormMode] = useState(false);
    const [newActivity, setNewActivity] = useState(emptyActivity);

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
                onClick={() => {
                    setFormMode(true)
                }}
            >
                Add new item
      </button>
            <div style={{ display: "flex" }}>
                <>
                    {
                        formMode &&
                        <div>
                            <input type="text" label="name" value={newActivity.name} id="name" onChange={setFormValue} />
                            <input type="text" label="time" value={newActivity.time} id="time" onChange={setFormValue} />
                            <input type="text" label="confirmation number" value={newActivity.confirmationNumber} id="confirmationNumber" onChange={setFormValue} />
                            <button type="submit" className="button" onClick={
                                () => {
                                    const newActivityArr = [...dayActivities]
                                    newActivityArr[0].push({ ...newActivity, id: Date.now().toString() })
                                    setDayActivities(newActivityArr)
                                    setNewActivity(emptyActivity)
                                    setFormMode(false)
                                }
                            }>Save</button>
                        </div>
                    }
                </>
                <DragDropContext onDragEnd={onDragEnd}>
                    {dayActivities.map((el, ind) => (
                        <Droppable key={ind} droppableId={`${ind}`}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    {...provided.droppableProps}
                                >
                                    <h2>{`Day ${ind + 1}`}</h2>
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
                                                            justifyContent: "space-around",


                                                        }}>
                                                        <p>{item.activityType}</p>
                                                        <p> {item.name}</p>
                                                        <p>{item.time}</p>
                                                        <p>{item.confirmationNumber}</p>
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
