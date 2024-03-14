import { Schema, model, models } from "mongoose";
export interface IInsurance extends Document {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdDate: Date;
  organizer: { _id: string; firstName: string; lastName: string }; // Assuming you import Schema from mongoose
}

const InsuranceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Insurance = models.Insurance || model("Insurance", InsuranceSchema);

export default Insurance;
