import mongoose from "mongoose";
const indivialExpenseSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    amount: {
        type: Number
    }
}, { timestamps: true })
export const IndividualExpense = mongoose.model('IndividualExpense', indivialExpenseSchema)