// ChatPage.js
import React, { useState, useRef, useEffect } from 'react';
import './chat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Overlay, Tooltip } from 'react-bootstrap';

const MessageOptions = ({ onEdit, onDelete, show, target }) => (
  <Overlay show={show} target={target} placement="left">
    <Tooltip id="overlay-example">
      <div className="message-options">
        <button className="btn btn-secondary btn-sm ml-2" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-secondary btn-sm ml-2" onClick={onDelete}>
          Delete
        </button>
      </div>
    </Tooltip>
  </Overlay>
);

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedMessage, setEditedMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [optionsTarget, setOptionsTarget] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    setMessages([...messages, { text: newMessage, sender: 'user', time: new Date().toLocaleTimeString() }]);
    setNewMessage('');
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
    setHoveredIndex(null);
    setEditingIndex(null);
    setShowOptions(false);
  };

  const handleStartEdit = (index, event) => {
    setEditingIndex(index);
    setEditedMessage(messages[index].text);
    setOptionsTarget(event.target);
    setShowOptions(true);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedMessage('');
    setShowOptions(false);
  };

  const handleSaveEdit = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index] = { ...updatedMessages[index], text: editedMessage };
    setMessages(updatedMessages);
    setEditingIndex(null);
    setHoveredIndex(null);
    setEditedMessage('');
    setShowOptions(false);
  };

  const handleContextMenu = (index, event) => {
    event.preventDefault();
    setHoveredIndex(index);
    setOptionsTarget(event.target);
    setShowOptions(true);
  };

  useEffect(() => {
    const handleClick = () => {
      setShowOptions(false);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="container">
      <div className="card chat-container">
        <div className="card-header bg-primary text-white">
          {/* Hardcoded User Details */}
          <div className="user-container">
            <div className="user-image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" alt="User Profile" />
            </div>
            <div className="user-name">John Doe</div>
          </div>
        </div>
        <div className="card-body chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 message-container ${message.sender === 'user' ? 'user-message' : 'other-message'}` }
              onContextMenu={(e) => message.sender === 'user' && handleContextMenu(index, e)}
            >
              {message.sender !== 'user' && (
                <div className="sender-info">
                  {/* Hardcoded Sender Details */}
                  <div className="user-container">
                    <div className="user-image">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" alt="User Profile" />
                    </div>
                    <div className="user-name">John Doe</div>
                  </div>
                </div>
              )}
              <div
                className={`alert ${message.sender === 'user' ? 'alert-success' : 'alert-info'} message-content` }
                style={{ borderRadius: '15px', maxWidth: '70%',  padding: '0.3rem', paddingLeft:'0.7rem', paddingRight: '0.7rem', margin: '0px', backgroundColor: 'rgba(177,177,177,0.3)', borderWidth: '0px'}}
              >
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      className="form-control"
                      value={editedMessage}
                      onChange={(e) => setEditedMessage(e.target.value)}
                    />
                    <button className="btn btn-primary btn-sm ml-2" onClick={() => handleSaveEdit(index)}>
                      Save
                    </button>
                    <button className="btn btn-secondary btn-sm ml-2" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <div className="message-text">{message.text}</div>
                    {message.sender === 'user' && (
                      <MessageOptions
                        onEdit={() => handleStartEdit(index)}
                        onDelete={() => handleDeleteMessage(index)}
                        show={showOptions && hoveredIndex === index}
                        target={optionsTarget}
                      />
                    )}
                    
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
