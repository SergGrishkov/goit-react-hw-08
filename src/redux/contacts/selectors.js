import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    {
      return contacts.length > 0
        ? contacts.filter(
            (contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase()) ||
              contact.number.includes(filter)
          )
        : [];
    }
  }
);
