import * as z from 'zod';
import { WithId } from 'mongodb';
import { db } from '../../config/db';

export const Todo = z.object({
  content: z.string().min(4),
  done: z.boolean().default(false),
});

export type Todo = z.infer<typeof Todo>;
export type TodoWithId = WithId<Todo>;
export const Todos = db.collection<Todo>('todos');
