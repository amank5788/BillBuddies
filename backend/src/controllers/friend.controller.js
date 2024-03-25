import { Friend } from "../models/friend.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import mongoose from "mongoose";

const toggleFriend = asyncHandler(async (req, res) => {
    const { user_id1, user_id2 } = req.body;
    console.log(user_id1,user_id2)
    if (!user_id1 || !user_id2 || !mongoose.isValidObjectId(user_id1) || !mongoose.isValidObjectId(user_id2)) {
        throw new apiError(400, "Send user IDs correctly.");
    }

    // Check if friendship already exists
    const existingFriendship = await Friend.findOne({ user1: user_id1, user2: user_id2 });

    if (existingFriendship) {
        // Friendship already exists, delete it
        await Friend.findByIdAndDelete(existingFriendship._id);
        res.status(200).json(new apiResponse(200, null, 'Friendship deleted.'));
    } else {
        // Friendship does not exist, create it
        const newFriendship = await Friend.create({ user1: user_id1, user2: user_id2 });
        console.log(newFriendship)
        if (!newFriendship) {
            throw new apiError(500, 'Error in creating friendship.');
        }

        res.status(201).json(new apiResponse(201, newFriendship, 'Friendship added.'));
    }
});

export { toggleFriend };
