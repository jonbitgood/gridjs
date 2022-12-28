export const CheckRow = (rowId: string) => (state) => {
  // rowId already exists
  if (state.rowSelection.rowIds.indexOf(rowId) > -1) return state;

  return {
    ...state,
    rowSelection: {
      rowIds: [rowId, ...state.rowSelection.rowIds],
    },
  };
};

export const UncheckRow = (rowId: string) => (state) => {
  const index = state.rowSelection.rowIds.indexOf(rowId);

  // rowId doesn't exist
  if (index === -1) state;

  const cloned = [...state.rowSelection.rowIds];
  cloned.splice(index, 1);

  return {
    ...state,
    rowSelection: {
      rowIds: cloned,
    },
  };
};
