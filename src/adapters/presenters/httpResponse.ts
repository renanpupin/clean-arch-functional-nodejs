export const HttpResponse = {
    success: ({res, message, data}: any) => {
        return res.json({
            message,
            data
        })
    },
    error: ({res, message, error, data}: any) => {
        return res.status(500).send({
            message: error?.message
        })
    }
}
