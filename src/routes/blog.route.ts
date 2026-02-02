import { Router, Request, Response } from 'express';
import { BlogController } from '../controllers/blog.controller';
import { authorizedMiddleware } from '../middlewares/autharized.middleware';

const blogController = new BlogController();

const router: Router = Router();

router.get('/', blogController.getAllBlogs);

router.post('/',authorizedMiddleware, blogController.createBlog);

export default router;