import db from "./generatePrisma.js";

const tokenGenerator = async (length: number) => {
    let result: string = '';
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength: number = characters.length;
    
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   const foundOwner = await db.admin.findUnique({
      where: {
         signUpToken: result
      }
   })

   if (foundOwner) {
      await tokenGenerator(10)
   }

   return result;
}

export default tokenGenerator