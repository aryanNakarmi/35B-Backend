import { Router } from "express";
import { AdminUserController } from "../../controllers/admin/user.controller";
import { adminOnlyMiddleware, authorizedMiddleware } from "../../middlewares/autharized.middleware";

let adminUserController = new AdminUserController();

const router = Router();

router.get("/:id",authorizedMiddleware, adminOnlyMiddleware , adminUserController.getOneUser);
//defone admin user routes

export default router;