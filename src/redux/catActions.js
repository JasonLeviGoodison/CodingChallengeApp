export const addCat = (cat) => { // this is the action creator for adding a cat
    return {
        type: 'ADD_CAT',
        payload: cat
    };
};

export const removeCat = (catId) => { // this is the action creator for removing a cat
    return {
        type: 'REMOVE_CAT',
        payload: catId
    };
};

export const editCat = (cat) => { // this is the action creator for editing a cat
    return {
        type: 'EDIT_CAT',
        payload: cat
    };
};
