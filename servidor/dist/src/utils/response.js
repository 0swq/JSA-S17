"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPaginated = exports.sendSuccess = void 0;
const sendSuccess = (res, data, message = 'OK', statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
exports.sendSuccess = sendSuccess;
const sendPaginated = (res, items, total, page, limit) => {
    return res.status(200).json({
        success: true,
        message: 'OK',
        data: items,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    });
};
exports.sendPaginated = sendPaginated;
//# sourceMappingURL=response.js.map