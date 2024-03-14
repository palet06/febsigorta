import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URI) throw new Error("MONGODB_URI bozuk ya da eksik");
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "febsigorta",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};