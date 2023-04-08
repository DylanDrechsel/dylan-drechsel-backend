import checkOwnerAuth from "../../../../utils/checkAuthorization/checkOwnerAuth.js";
import db from "../../../../utils/generatePrisma.js";

export default {
    Query: {
        getAdmin: async (_: any, {}, context: any) => {
            console.log('hit')
        }
    }
}