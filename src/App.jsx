import { ChatEngine } from "react-chat-engine";
import "./App.css"


const App = () => {
  return (
    <div>
      <h2>Rect cht engine app</h2>
      <ChatEngine
        height="100vh"
        projectID="68500ffe-dda2-4c62-971c-6bf1fc8b2694"
        userName="techhunter"
        userSecret="123456"
      />
    </div>
  )
}

export default App;