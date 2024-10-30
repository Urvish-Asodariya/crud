const express=require("express");
const router=express.Router();
const productcontrol=require("../controller/crud.controll");

router.post("/insert",productcontrol.insert);
router.patch("/update",productcontrol.update);
router.delete("/delete",productcontrol.delete);
router.get("/all",productcontrol.all);
router.get("/single",productcontrol.single);

module.exports=router;