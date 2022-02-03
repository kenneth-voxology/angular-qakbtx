import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Book } from "../book-list/books.model";

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>("collection");

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/