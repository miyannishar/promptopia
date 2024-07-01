import mongoose, {Schema, model, models} from "mongoose";

const promptSchema = new mongoose.Schema({ 
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt:{
        type: String,
        required: [true, "Prompt is required!!"]
    },
    tag:{
        type: String,
        required: [true, "Tag is required!!"]
    }
    
});

const Prompt = models.Prompt || mongoose.model("Prompt", promptSchema);

export default Prompt