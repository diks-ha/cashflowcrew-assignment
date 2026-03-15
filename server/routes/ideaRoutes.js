import express from 'express';
import {
    getIdeas,
    createIdea,
    upvoteIdea,
    deleteIdea
} from '../controllers/ideaController.js';

const router = express.Router();

router
    .route('/')
    .get(getIdeas)
    .post(createIdea);

router
    .route('/:id/upvote')
    .put(upvoteIdea);

router
    .route('/:id')
    .delete(deleteIdea);

export default router;

