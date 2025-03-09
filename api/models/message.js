const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  chatRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatRoom',
    required: true
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    validate: {
      validator: function(v) {
        return !isNaN(new Date(v).getTime());
      },
      message: props => `${props.value} is not a valid date!`
    }
  },
  messageType: {
    type: String,
    enum: ['text', 'image', 'video', 'file', 'poll', 'call', 'location'],
    default: 'text'
  },
  mediaUrl: String,
  fileName: String,
  fileSize: Number,
  metadata: {
    type: mongoose.Schema.Types.Mixed
  },
  replyTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  },
  reactions: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    reaction: String
  }],
  deletedFor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  updatedAt: Date
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
