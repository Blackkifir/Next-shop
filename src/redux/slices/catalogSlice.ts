import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICatalogCards, ICard } from './interfaces/ICatalogCards';

const initialState: ICatalogCards = {
  items: [],
  searchValue: '',
  isLoading: false,
  isDisable: false,
  error: null,
};

export const fetchGetCatalogItems = createAsyncThunk<ICard[], string>(
  'catalog/fetchGetCatalogItems',
  async (searchValue: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}&title=${searchValue}`,
      );

      if (response.status !== 200) {
        throw new Error('Response status is not OK');
      }

      const data = response.data as ICard[];
      return data;
    } catch (error) {
      return rejectWithValue('Failed Request AxiosGetCatalog');
    }
  },
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ICard[]>) {
      state.items = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setDisable(state, action: PayloadAction<boolean>) {
      state.isDisable = action.payload;
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCatalogItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetCatalogItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchGetCatalogItems.rejected, (state, action) => {
        state.isLoading = false;
        state.items = [];
        state.error = action.payload as Error;
      });
  },
});

export const {
  setItems,
  setSearchValue,
  setLoading,
  setDisable,
  setError,
} = catalogSlice.actions;
export default catalogSlice.reducer;
