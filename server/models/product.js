const mongoose = require('mongoose')

/** 
 * Notes: Get back to the image model, Needs to change the storage mechanism {From buffer to SDN id possible, Actually It must}
*/
const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    // coverImage: {type: String, required: true},
    coverImage: { type: Buffer, required: true },
    coverImageType: { type: String, required: true },
    dateAdded: {type: Date, default: Date.now()},
    // userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref : 'User'},
    // categorieId: [{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Categorie', default: 1}],
    // commentId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})

/** This is only to simplify the encoded image buffer */
productSchema.virtual('coverImagePath').get(function() {
    if (this.coverImage != null && this.coverImageType != null) {
      return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
  })

module.exports = mongoose.model('Product', productSchema)