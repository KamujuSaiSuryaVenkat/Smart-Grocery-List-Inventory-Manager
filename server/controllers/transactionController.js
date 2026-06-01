import Transaction from "../models/Transaction.js";

/* GET ALL TRANSACTIONS */
export const getTransactions =
  async (req, res) => {

    try {

      const transactions =
        await Transaction.find().sort({
          createdAt: -1,
        });

      res.status(200).json(
        transactions
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

/* CREATE TRANSACTION */
export const createTransaction =
  async (req, res) => {

    try {

      const transaction =
        await Transaction.create(
          req.body
        );

      res.status(201).json(
        transaction
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

/* DELETE TRANSACTION */
export const deleteTransaction =
  async (req, res) => {

    try {

      await Transaction.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Transaction deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };