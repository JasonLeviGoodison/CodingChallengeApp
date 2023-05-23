export const addCat = (cat) => {
    return {
        type: 'ADD_CAT',
        payload: cat
    };
};

export const removeCat = (catId) => {
    return {
        type: 'REMOVE_CAT',
        payload: catId
    };
};

export const editCat = (cat) => {
    return {
        type: 'EDIT_CAT',
        payload: cat
    };
};
