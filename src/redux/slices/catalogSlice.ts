import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPropsAll, IPropsItems } from './interfaces/IPropsItems';

const initialState: IPropsAll = {
  items: [],
  isLoading: false,
  error: null,
};

export const getDataAxios = createAsyncThunk<IPropsItems[]>(
  'catalogs/getDataAxios',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      const data = response.data as IPropsItems[];

      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Failed request data items');
    }
  },
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IPropsItems[]>) {
      state.items = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAxios.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataAxios.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!(action.payload instanceof Error)) {
          state.items = action.payload;
          state.error = null;
        }
      })
      .addCase(getDataAxios.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload as Error;
      });
  },
});

export const { setItems, setLoading } = catalogSlice.actions;
export default catalogSlice.reducer;
