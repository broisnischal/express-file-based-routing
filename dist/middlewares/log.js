export const log = () => (req, res, next) => {
    console.log("I am middleware");
    next();
};
export default log;
//# sourceMappingURL=log.js.map