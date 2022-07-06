import style from './style.css'
import pic1 from './pic/profile-img.jpg'
import pic2 from './pic/kk.jpg'
import onInpuFocus from './scr';

export default function AsideSection(){
    return <aside className="messages-list">
         <div className="msg-section">
         <header className='onTop'>
            <div className='profile'>
                <div className='pic'>
                    <img src={pic1} className="pic" alt="" />
                </div> 
            </div>
            <div className='button'>
                <div className='btn'>
                    <span>
                        <div className='icon' >
                            <div className='ic' >
                                <span>
                                    <svg version="1.1" id="ee51d023-7db6-4950-baf7-c34874b80976" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                                </span>
                            </div>
                        </div>
                        <div className='icon' >
                            <div className='ic' >
                                <span>
                                <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                                </span>
                            </div>
                        </div>
                        <div className='icon' >
                            <div className='ic' >
                                <span>
                                <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                                </span>
                            </div>
                        </div>
                
                    </span>
                </div>
            </div>
           
        </header>
        <span className='notification'>
             <div className='notify'>
                <div className="nott">
                <div className='noti'>
                    <div className='not-icon'>
                        <span>
                        <svg viewBox="0 0 48 48" width="48" height="48" class=""><path fill="currentColor" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 1-1.764 1.765zm7.236-.883-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z"></path></svg>
                        </span>
                    </div>
                </div>
                <div className='text'>
                    <div className='note'>Get notified of new messages</div>
                    <div className='note-s'>
                        <span className='not'>
                        <span class="note0"> Turn on desktop notifications</span>
                        <span className='no'>
                            <svg viewBox="0 0 8 12" width="8" height="12" class=""><path fill="currentColor" d="m2.173 1 4.584 4.725-4.615 4.615-1.103-1.103 3.512-3.512L1 2.173 2.173 1z"></path></svg>
                        </span>
                        </span>
                    </div>
                </div>
                </div>
                
             </div>
        </span>
        <div className='search'>
            <div className='ser'>
                <div className='seri'>
                    <div className='button'>
                        <button className='ser-button'>
                        <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                        </button>
                    </div>
                    <span></span>
                    <div className='in'>
                    <div class="vis" ></div>
                        <div className='in-put'>
                            <input type="text" onFocus={ onInpuFocus} className='text'placeholder='Search or start new chat' />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='chat-list'>
            <div>
                <div>
                    <div className='list0' >
                        
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>SISTER</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>hello</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>suleiman</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>hello</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Naox</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>rek rek</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                       
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>MAMY</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>  turi muri room</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Alliane</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>hi</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Anne</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>hey</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                       
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>solange</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>hoy</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Kevin</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>Wapi turi muri vaccancy</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Lecturer</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>Wapi turi muri vacca</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                       
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Anitha</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>Wapi turi muri vacca</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={pic1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Kan</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                    <span className='li10'>Wapi turi muri vacca</span>
                                                </span>
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                         
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
         
        
    </aside>;
}