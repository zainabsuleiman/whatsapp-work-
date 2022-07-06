import React , { useState, useEffect } from 'react';
import './App.css';
import AsideSection from "./messages-list";
import pic0 from './messages-list/pic/profile-img.jpg'
import style from './messages-list/style.css'
import pic2 from './messages-list/pic/tsap.PNG'
function App() {
  const [seed, setSeed] = useState("");
  useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000));

  }, []
  );
  return (
   <>
   <AsideSection />
   <section className="messages-view">
    <div className="chat_header">
    <img className='image1' src={pic0} alt="img" />
    <div className="chat_header_info">
      <h3>Sister</h3>
      <p>Last seen at ...</p>
    </div>
    <div className='chat_headerRight'>
   <div className='hey'>
    <span> <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg></span>
  </div>
  <div className='hey'>
    <span><svg version="1.1" id="ee51d023-7db6-4950-baf7-c34874b80976" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg></span>
  </div>
  
                        <div className='hey'>
                         <span><svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg></span>
                        </div>
                        
                       
                       
    </div>
    </div>
    <div className="chat_body">
    {/* <img src={ pic2} alt="img" /> */}
    <p className="chat_message">Hey Guys</p>
    <span className="chat_name">Sister</span>
    </div>
    <div className="chat_footer"></div>
   </section>
   </>
  );
}

export default App;
