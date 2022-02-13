import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTemplates = createAsyncThunk(
  "templates/getTemplates",
  async (dispatch, getState) => {
    return await fetch("https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates").then(
      (res) => res.json()
    );
  }
);

const templatesSlice = createSlice({
  name: "template",
  initialState: {
    templates: [],
    status: null,
  },
  extraReducers: {
    [getTemplates.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTemplates.fulfilled]: (state, action) => {
      state.status = "success";
      state.templates = action.payload;
    },
    [getTemplates.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default templatesSlice.reducer;