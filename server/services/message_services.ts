import { IMessage } from './../types/message.js';
import { neon } from '@neondatabase/serverless';

class MessageServices {
  static async getMessages(chatId: string) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`
    SELECT * FROM messages
    WHERE chat_id = ${chatId}
    ORDER BY time_stamp;
    `;
    return response;
  }

  static async saveMessage({ chatId, content, sender, time_stamp }: Omit<IMessage, 'id'>) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`
    INSERT INTO messages (chat_id, content, sender, time_stamp)
    VALUES (${chatId}, ${content}, ${sender}, ${time_stamp})
    RETURNING id;
    `;
    return response[0].id;
  }
}

export default MessageServices;
