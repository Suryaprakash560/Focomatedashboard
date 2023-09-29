import React, { useEffect, useState, useRef } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './assests/images/Logo.png';
import question from './assests/images/question.png';
import active from './assests/images/active.png';
import crown from './assests/images/crown.png';
import search from './assests/images/search.png';
import folder from './assests/images/folder.png';
import plus from './assests/images/plus.png';
import home from './assests/images/home.png';
import foldernew from './assests/images/foldernew.png';
import foldertow from './assests/images/foldertow.png';
import Brand from './assests/images/Brand.png';
import Delete from './assests/images/delete.png';
import One from './assests/images/One.png';
import Two from './assests/images/Two.png';
import Four from './assests/images/Four.png';
import Five from './assests/images/Five.png';
import Six from './assests/images/Six.png';
import Seven from './assests/images/Seven.png';






export function Dashboard(){
    const [Backgrounclr,setBackgrounclr]=useState(0)
    const tabchange=(tab)=>{
        console.log(tab)
        setBackgrounclr(tab)
    }
    return(
        <div className='whole-div'>
            <div className='row ' >
                <div className='col-md-2 col-6'><img src={Logo} className='brainlewidt'/></div>
                <div className='col-md-10 col-6 d-flex align-item-center justify-content-end'>
                    <div className='row align-items-center justify-content-end'>
                        <div className='col-md-5'></div>
                        <div className='col-md-7 d-flex align-items-center justify-content-end'>
                           <div className='questionmark '>
                           <img src={question} className='brainlewidt'/>
                           </div>
                           <div className='questionmark'>
                           <img src={active} className='brainlewidt'/>
                           </div>
                           <div className=' col-md-3 d-flex upgradebtn'>
                           <button className='updbtn'>UPGRADE</button>
                           <img src={crown} className='crownwidt'/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 col-sm-12 pad-right'>
                    <div className='contentdiv'>
                        <div className='row mt-3 name-center'>
                            <div className='col-3'>
                                <div className='Spellfirstletter'>J</div>
                            </div>
                            <div className='col-8'>
                                <div className='Main_name'>Jack </div>
                                <div className='Premiumtxt'>Preminum</div>
                            </div>
                        </div>
                        <div className='row  mt-3 newprojectbtn'>
                            <div className='col-10'>New Project</div>
                            <div className='col-2 pl-0'>
                                <img src={plus} className='plus-img'/>
                            </div>
                        </div>
                        <div className={Backgrounclr===1?'row  mt-2 normalmenu Activebc':'row  mt-2 normalmenu '} onClick={()=>tabchange(1)}>
                            <div className='col-2 pl-0 menuiconstyle'>
                                <img src={home} className='folder-img'/>
                            </div>
                            <div className='col-10 p-0 d-flex justify-content-flex-start align-item-center'>Home</div>
                            
                        </div>
                        <div className={Backgrounclr===2?'row  mt-2 normalmenu Activebc':'row  mt-2 normalmenu '} onClick={()=>tabchange(2)}>
                            <div className='col-2 pl-0 menuiconstyle'>
                                <img src={foldertow} className='folder-img'/>
                            </div>
                            <div className='col-10 p-0 d-flex justify-content-flex-start align-item-center'>Projects</div>
                            
                        </div>
                        <div className={Backgrounclr===3?'row  mt-2 normalmenu Activebc':'row  mt-2 normalmenu '} onClick={()=>tabchange(3)}>
                            <div className='col-2 pl-0 menuiconstyle'>
                                <img src={foldernew} className='folder-img'/>
                            </div>
                            <div className='col-10 p-0 d-flex justify-content-flex-start align-item-center'>Folders</div>
                            
                        </div>
                        <div className={Backgrounclr===4?'row  mt-2 normalmenu Activebc':'row  mt-2 normalmenu '} onClick={()=>tabchange(4)}>
                            <div className='col-2 pl-0 menuiconstyle'>
                                <img src={Brand} className='folder-img'/>
                            </div>
                            <div className='col-10 p-0 d-flex justify-content-flex-start align-item-center'>Brand Kit</div>
                            
                        </div>
                        <div className={Backgrounclr===5?'row  mt-2 normalmenu Activebc':'row  mt-2 normalmenu '} onClick={()=>tabchange(5)}>
                            <div className='col-2 pl-0 menuiconstyle'>
                                <img src={Delete} className='folder-img'/>
                            </div>
                            <div className='col-10 p-0 d-flex justify-content-flex-start align-item-center'>Trash</div>
                            
                        </div>
                        <div className='row   upgradeplane'>
                            <div className='Freeplane col-12'>FREE PLAN</div>
                            <div className='col-12 mt-3 mb-3'>
                                <div className='Straightline'>
                                    <div className='round'></div>
                                </div>
                            </div>
                            <div className='col-12 Expire'>03:00 of 10:00 Mins Expired</div>
                            <div className=' col-12 d-flex preminumup'>
                           <button className='updbtn'>UPGRADE TO PREMIUM</button>
                           <img src={crown} className='crownwidt'/>
                           </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-9 col-sm-12'>
                    <div className='contentdiv'>
                        <div className='row ml-0 mr-0 mt-3 '>
                        <div className='col-12 col-md-5 inputboxclr d-flex inputjustify'>
                            <input className='input-searc-box' placeholder='Search your Projects...'/>
                            <img src={search} className='searchim'/>
                        </div>
                        </div>
                        <div className='row ml-0 mr-0 mt-3 inputjustify'>
                        <div className='Recent-video'>Recenet Video</div>
                        <div className='Recent-video'>ViewAll</div>
                        </div>
                        <div className='row ml-0 mr-0 mt-2 '>
                            <div className='col-md-2 col-sm-6'>
                                <div className='video-img-div'>
                                    <img src={One} className='folder-img'/>
                                </div>
                                <div className='video-name'>Modern AI World</div>
                                <div className='Recent-video text-align-center'>1 Day ago</div>
                            </div>
                            <div className='col-md-2 col-sm-6'>
                                <div className='video-img-div'>
                                    <img src={Two} className='folder-img'/>
                                </div>
                                <div className='video-name'>Modern AI World</div>
                                <div className='Recent-video text-align-center'>1 Day ago</div>
                            </div>
                            <div className='col-md-2 col-sm-6'>
                                <div className='video-img-div'>
                                    <img src={Four} className='folder-img'/>
                                </div>
                                <div className='video-name'>Modern AI World</div>
                                <div className='Recent-video text-align-center'>1 Day ago</div>
                            </div>
                            <div className='col-md-2 col-sm-6'>
                                <div className='video-img-div'>
                                    <img src={Five} className='folder-img'/>
                                </div>
                                <div className='video-name'>Modern AI World</div>
                                <div className='Recent-video text-align-center'>1 Day ago</div>
                            </div>
                            <div className='col-md-2 col-sm-6'>
                                <div className='video-img-div'>
                                    <img src={Six} className='folder-img'/>
                                </div>
                                <div className='video-name'>Modern AI World</div>
                                <div className='Recent-video text-align-center'>1 Day ago</div>
                            </div>
                            <div className='col-md-2 col-sm-6'>
                                <div className='video-img-div'>
                                    <img src={Seven} className='folder-img'/>
                                </div>
                                <div className='video-name'>Modern AI World</div>
                                <div className='Recent-video text-align-center'>1 Day ago</div>
                            </div>
                        </div>
                        <div className='row ml-0 mr-0 mt-3 inputjustify'>
                        <div className='Recent-video'>Recenet Folders</div>
                        <div className='Recent-video'>ViewAll</div>
                        </div>
                        <div className='row ml-0 mr-0 mt-2 '>
                            <div className='col-md-2 col-6'>
                                <div className='video-img-div'>
                                    <img src={folder} className='folder-img'/>
                                </div>
                                <div className='video-name'>Physics</div>
                            </div>
                            <div className='col-md-2 col-6'>
                                <div className='video-img-div'>
                                    <img src={folder} className='folder-img'/>
                                </div>
                                <div className='video-name'>Chemistry</div>
                            </div>
                            <div className='col-md-2 col-6'>
                                <div className='video-img-div'>
                                    <img src={folder} className='folder-img'/>
                                </div>
                                <div className='video-name'>C-Programming</div>
                            </div>
                            <div className='col-md-2 col-6'>
                                <div className='video-img-div'>
                                    <img src={folder} className='folder-img'/>
                                </div>
                                <div className='video-name'>Chemistry</div>
                            </div>
                            <div className='col-md-2 col-6'>
                                <div className='video-img-div'>
                                    <img src={folder} className='folder-img'/>
                                </div>
                                <div className='video-name'>C-Programming</div>
                            </div>
                            <div className='col-md-2 col-6'>
                                <div className='video-img-div'>
                                    <img src={folder} className='folder-img'/>
                                </div>
                                <div className='video-name'>Chemistry</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}