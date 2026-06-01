/* eslint-disable react-refresh/only-export-components, react-hooks/set-state-in-effect */

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  fetchTransactions,
  createTransaction,
  removeTransaction,
} from "../api/transactionApi";

const TransactionContext =
  createContext();

export function TransactionProvider({
  children,
}) {

  const [transactions, setTransactions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  async function loadTransactions() {

      try {

        const res =
          await fetchTransactions();

        setTransactions(
          res.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
  }

  /* LOAD TRANSACTIONS */
  useEffect(() => {

    loadTransactions();

  }, []);

  /* ADD */
  const addTransaction =
    async (transaction) => {

      try {

        const res =
          await createTransaction(
            transaction
          );

        setTransactions((prev) => [
          res.data,
          ...prev,
        ]);

      } catch (error) {

        console.log(error);

      }
    };

  /* DELETE */
  const deleteTransaction =
    async (id) => {

      try {

        await removeTransaction(id);

        setTransactions((prev) =>
          prev.filter(
            (item) =>
              item._id !== id
          )
        );

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        loading,
        addTransaction,
        deleteTransaction,
      }}
    >

      {children}

    </TransactionContext.Provider>
  );
}

export function useTransactions() {

  return useContext(
    TransactionContext
  );
}