import PropTypes from 'prop-types';

const ChatFeed = (props) => {
  const { chats, activeChats, userName, messages } = props;
  
  const chat = chats && chats[activeChats];

  const renderMessages = () => {
    const keys = Object.keys(messages);
    console.log(keys);
  }

  // console.log(chat, userName, messages);

  return (
    <div>ChatFeed</div>
  )
}

export default ChatFeed;


// ChatFeed.propTypes = {
//   chats: PropTypes.array.isRequired,
//   activeChats: PropTypes.number.isRequired,
//   userName: PropTypes.string.isRequired,
//   messages: PropTypes.array.isRequired,
// };