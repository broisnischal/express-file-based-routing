import log from "../../middlewares/log.js";
export const get = [
    log(),
    async (req, res) => {
        return res.json({ hello: "user" });
    },
];
//# sourceMappingURL=index.js.map