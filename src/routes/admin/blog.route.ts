import { AdminBlogController } from "../../controllers/admin/blog.controller";
import { Router } from "express";
import { adminOnlyMiddleware, authorizedMiddleware } from "../../middlewares/autharized.middleware";

const adminBlogController = new AdminBlogController();
const router = Router();
// use the middleware in all the routes of this router
router.use(authorizedMiddleware);
router.use(adminOnlyMiddleware);

router.get('/', adminBlogController.getAllBlogs);
router.delete('/:id', adminBlogController.deleteBlog);

export default router;