import { NextApiRequest, NextApiResponse } from "next"


export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Mauricio'},
        { id: 2, name: 'Amanda'},
        { id: 3, name: 'Arthur'}
    ]

    return response.json(users);
}