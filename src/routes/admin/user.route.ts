import { Router } from "express";
import { AdminUserController } from "../../controllers/admin/user.controller";

let adminUserController = new AdminUserController();

const router = Router();

router.get("/:id", adminUserController.getOneUser);
//defone admin user routes

export default router;