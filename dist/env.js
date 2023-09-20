import { z } from "zod";
export const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]),
    DATABASE_URL: z.string(),
    PORT: z.string(),
});
envSchema.parse(process.env);
//# sourceMappingURL=env.js.map