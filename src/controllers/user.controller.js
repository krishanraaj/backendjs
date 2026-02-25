import { asyncHandler } from "../utils/asyncHandler.js";

const registUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

export {registUser}