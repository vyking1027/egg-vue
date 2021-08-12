export const Top = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const PostSchema = new Schema({
        _id: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            default: new Date(),
        },
        updated_time: {
            type: Date,
            default: new Date(),
        },
    });
    return mongoose.model('Tag', PostSchema);
};