const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create 10 players
  const createPlayers = async()=>{
    const players = [
        {name:"Player1", breed:"Australia", status:"FIELD"},
        {name:"Player2", breed:"Soviet", status:"FIELD"},
        {name:"Player3", breed:"German", status:"FIELD"},
        {name:"Player4", breed:"Poodle", status:"FIELD"},
        {name:"Player5", breed:"Husky", status:"FIELD"},
        {name:"Player6", breed:"Gold Retriever", status:"BENCH"},
        {name:"Player7", breed:"Chihiahia", status:"BENCH"},
        {name:"Player8", breed:"Alaska", status:"BENCH"},
        {name:"Player9", breed:"Bulldog", status:"BENCH"},
        {name:"Player10", breed:"Dachshund", status:"BENCH"},
    ]
    await prisma.player.createMany({data:players});
  }
  await createPlayers();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });