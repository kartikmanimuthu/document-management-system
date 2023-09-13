import express, { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

router.get('/user', (req: Request, res: Response, next: NextFunction) => {
    res.send('User Routes');
});

export { router };