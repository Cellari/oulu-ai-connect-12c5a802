
const ChatPage = () => {
  return (
    <div className="p-4 h-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-oulu-dark">Oulu AI Assistant</h1>
        <p className="text-oulu-gray">Ask me anything about Oulu</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 h-[calc(100vh-160px)] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="flex flex-col gap-3">
            {/* AI Message */}
            <div className="flex gap-2 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-oulu-primary flex items-center justify-center text-white">
                AI
              </div>
              <div className="bg-oulu-light rounded-lg p-3">
                <p>Welcome to Oulu! How can I help you today?</p>
              </div>
            </div>
            
            {/* User Message */}
            <div className="flex gap-2 max-w-[80%] self-end">
              <div className="bg-oulu-primary rounded-lg p-3">
                <p className="text-white">Tell me about events happening this weekend.</p>
              </div>
            </div>
            
            {/* AI Response */}
            <div className="flex gap-2 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-oulu-primary flex items-center justify-center text-white">
                AI
              </div>
              <div className="bg-oulu-light rounded-lg p-3">
                <p>Here are some events in Oulu this weekend:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Oulu Market Square Festival</li>
                  <li>Art Exhibition at Cultural Center</li>
                  <li>Local Music Concert at 45 Special</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Input area */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask about places, events or services..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-oulu-secondary"
          />
          <button className="bg-oulu-primary hover:bg-oulu-secondary text-white rounded-full p-2 px-4">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
