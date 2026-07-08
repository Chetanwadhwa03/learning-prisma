import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env["DATABASE_URL"] })
});
const createUser = async (username, password, firstname, lastname) => {
    const res = await prisma.users.create({
        data: {
            username,
            password,
            firstname,
            lastname
        }
    });
    console.log(res);
};
createUser("chetan03", "123", "Chetan", "wadhwa");
//# sourceMappingURL=index.js.map