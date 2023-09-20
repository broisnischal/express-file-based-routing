import client from "../db.js";
export const get = async (req, res) => {
    if (req.method !== "GET")
        return res.status(405);
    const users = await client.user.findMany();
    return res.json({ hello: users });
};
//# sourceMappingURL=index.js.map