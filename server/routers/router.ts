import { sendMessage } from '../controllers/messages_controller.js';
import { startChat, restartChat } from '../controllers/chats_controller.js';
import express from 'express';

const router = express.Router();

// Chats
router.post('/chats', startChat);
router.post('/chats/restart', restartChat);

// Messages
router.post('/messages', sendMessage);

// Test
router.get('/', (req, res) => {
  res.send('Hello World!');
});

export default router;
