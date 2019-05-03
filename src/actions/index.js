/* eslint-disable arrow-body-style */
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};
