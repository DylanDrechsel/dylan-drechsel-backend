import db from "./generatePrisma.js";

const tokenGenerator = async (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * (characters.length - 1)));
   }

   const foundOwner = await db.owner.findUnique({
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