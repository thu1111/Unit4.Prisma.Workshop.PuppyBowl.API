const router = require("express").Router();
module.exports = router;

const prisma = require("../prisma");

/** Returns an array of all players. */
router.get("/", async(req,res,next)=>{
    try {
        const players = await prisma.player.findMany();
        res.json(players);
    } catch (error) {
        next();
    }
})

/** Returns a single player with the specified id. */
router.get("/:id",async(req,res,next)=>{
    try {
        const id = +req.params.id;
        const player = await prisma.player.findUnique({where:{id}});
        res.json(player);
    } catch (error) {
        next();
    }
})

/** Creates a new player as provided by the request body. */
router.post("/",async(req,res,next)=>{
    try {
        const {name,breed,status} = req.body;
        const player = await prisma.player.create({data:{name,breed,status}});
        res.status(201).json(player);
    } catch (error) {
        next();
    }
})

/** Overwrites the player as provided by the request body. */
router.put("/:id", async(req,res,next)=>{
    try {
        const id = +req.params.id;
        const {name,breed,status} = req.body;

        const player = await prisma.player.update({
            where:{id},
            data:{name,breed,status},
        })
        res.json(player);
    } catch (error) {
        next();
    }
})

/** Deletes the player with the specified id */
router.delete("/:id", async(req,res,next)=>{
    try {
        const id = +req.params.id;
        await prisma.player.delete({where:{id}});
        res.sendStatus(402);
    } catch (error) {
        next();
    }
})