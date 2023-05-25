import React, {useEffect, useState, useRef} from 'react'
import HeaderAuth from '../desktop/HeaderAuth'
import PostAddIcon from '@mui/icons-material/PostAdd';
import { doc, getDoc, collection, setDoc, query, Timestamp, orderBy, onSnapshot } from "firebase/firestore";
import {db} from '../../App.js'
import moment from "moment";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import advertiselogo from '../../images/advertiselogo.png'
import { ThreeDots } from 'react-loader-spinner'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import 'bootstrap/dist/css/bootstrap.css';
import Resizer from "react-image-file-resizer";
import {Modal, Form, } from 'reactstrap';
import './styles/HomeAuth.css'


export default function HomeAuth() {
const [loadingUserData, setLoadingUserData] = useState(true)
const [loadingAdverts, setLoadingAdverts] = useState(true)
const [userType, setUserType] = useState('')
const [userId, setUserId] = useState('')
const [openCreatePostModal, setOpenCreatePostModal] = useState(false)
const [publishingPost, setPublishingPost] = useState(false)
const [publishSuccess, setPublishSuccess] = useState(false)
const [itemName, setItemName] = useState('')
const [itemAmount, setItemAmount] = useState('')
const [userName, setUserName] = useState('')
const [advertPhoto, setAdvertPhoto] = useState('')
const [adverts, setAdverts] = useState([])
const [error, setError] = useState('')


const itemNameRef = useRef()
const itemAmountRef = useRef()


const resizeFile = (file) =>
new Promise((resolve) => {
Resizer.imageFileResizer(
file,
300,
300,
"JPEG",
100,
0,
(uri) => {
resolve(uri);
},
"base64"
);
});


const handleImageFile=async(e)=>{
try{
const file = e.target.files[0]
const image = await resizeFile(file);

setAdvertPhoto(image);
}
catch{

}
}


const publishAdvert=async()=>{
if(itemName===''){
setError('Input Item Name')
itemNameRef.current.focus()
setTimeout(()=>{
setError('')
},3500)
return
}

else if(itemAmount===''){
setError('Input Item Amout')
itemAmountRef.current.focus()
setTimeout(()=>{
setError('')
},3500)
return
}

else if(advertPhoto===''){
setError('Add a Photo')
setTimeout(()=>{
setError('')
},3500)
return
}
else{
WritePost()
}
}

const WritePost=async()=>{
let cleanItemName = itemName.trim().toLowerCase()
setPublishingPost(true)
const newPublicationRef = doc(collection(db, "adverts"));
await setDoc(newPublicationRef, {
itemName: cleanItemName,
itemAmount: itemAmount,
itemPhoto: advertPhoto,
userId: userId,
userName: userName,
id: newPublicationRef.id,
dateCreated: Timestamp.now()
}).then(()=>{
setItemName('')
setItemAmount('')
setAdvertPhoto('')
setOpenCreatePostModal(false)
setPublishSuccess(true)
setTimeout(()=>{
setPublishSuccess(false)
},7000)
})
}


useEffect(()=>{
getUserData()

},[])

const itemNameHandler=(e)=>{
setItemName(e.target.value)
}

const itemAmountHandler=(e)=>{
setItemAmount(e.target.value)
}

const getAdverts=async()=>{
const q = query(collection(db, "adverts"), orderBy('dateCreated', 'desc'))
const unsubscribe = onSnapshot(q, (querySnapshot) => {
const advertsData = [];
querySnapshot.forEach((doc) => {
advertsData.push(doc.data());
});
setAdverts(advertsData);
setLoadingAdverts(false)
});

return ()=> unsubscribe()

}

const getUserData=async()=>{
const userId = localStorage.getItem('userId')
const connectionTestRef = doc(collection(db, "network"));
await setDoc(connectionTestRef, {
connected: true,
}).then(async()=>{
const usersRef = doc(db, "users", userId);
const docSnap = await getDoc(usersRef);

if (docSnap.exists()) {
let firstName = ''
let lastName = ''
setUserId(userId)
setUserType( docSnap.data().userType);
setLoadingUserData(false)
try{
firstName = docSnap.data().firstName
lastName = docSnap.data().lastName
}
catch{

}
let user_name = firstName + ' '+lastName
setUserName(user_name)

}
getAdverts()
})

}

const numberWithCommas=(x)=> {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

return (
<>
  <Modal className="modal-dialog-centered modal-lg" isOpen={openCreatePostModal}>
    <div className="modal-header">
      <div className='modal-logo-container'>
        <img src={advertiselogo} alt='logo' />
        <h1>ON<span>sell</span></h1>
      </div>
      <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={()=>
        setOpenCreatePostModal(false)}
        >
        <span aria-hidden={true}>×</span>
      </button>

    </div>
    <div className="modal-body" style={{ textAlign: 'center', marginTop: -10 }}>

      <Form role="form">

        <div className='modal-double-input-container'>
          <div className='input-container'>
            <span>Item Name</span>
            <input ref={itemNameRef} placeholder="Enter Item name" type="text" value={itemName}
              onChange={itemNameHandler} maxLength="50" />
          </div>
          <div className='input-container'>
            <span>Amount</span>
            <input ref={itemAmountRef} placeholder="Enter Amount" type="number" value={itemAmount}
              onChange={itemAmountHandler} maxLength="50" />
          </div>
        </div>
        <div className='input-file-container'>
          <input onChange={handleImageFile} type="file" id="advert-file" accept='image/*' />
          <label className='upload-label-text' htmlFor='advert-file'>
            <img hidden={advertPhoto==='' } style={{height: 70}} src={advertPhoto} className="img-thumbnail" alt='imgae'/>
            <UploadFileIcon className="upload-icon" />
            <span className='upload-button-text'>{advertPhoto===''?'Click to Upload Photo' : 'Click to Change Photo'}
            </span>
            <span className='upload-button-file-desciption'>( .jpeg .jpg .png )</span>

          </label>
        </div>
      </Form>
      <span hidden={error==="" } className='errormesage'>{error}</span>
    </div>
    <div className="modal-footer">
      <button onClick={()=>publishAdvert()} type="button" class="btn btn-success btn-block">{publishingPost?'Please Wait...': 'Publish Advert'}</button>
    </div>
  </Modal>
  <HeaderAuth />
  {loadingUserData || loadingAdverts ?
  <div
    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
    <ThreeDots height="90" width="90" radius="9" color='orange' wrapperStyle wrapperClass />
  </div>
  :
  <>
    {userType==='Seller'?
    <>
      {publishSuccess ?
      <div className='post-published-container'>
        <span>Your Advert has been Published !</span>
      </div>
      : null}

      <div className='post-creator'>
        <div onClick={()=>setOpenCreatePostModal(true)} className='create-ad-btn'>
          <PostAddIcon />
          <span>Click to Create Advert</span>
        </div>
      </div>
      <div className='hr-line' />
      <div className='posts-container'>
        <div className='posts-grid-container'>
          {adverts.map((advert, i)=>{
          return(
          <div className='advert'>
            <img className='advertImage' src={advert.itemPhoto} alt='imgae' />
            <div className='name-amount'>
              <span className='name'>{advert.itemName}</span>
              <span className='amount'>&#8358; {numberWithCommas(advert.itemAmount)}</span>
            </div>
            <div className='name-date'>
              <span className='name'>
                <AccountCircleIcon className='post-icon-user' />{advert.userName}</span>
              <span className='date'>{moment(advert.dateCreated.toDate()).fromNow()}</span>
            </div>
            <div className='like-container'>
              <span>0</span>
              <ThumbUpOffAltIcon className='like-icon' />
            </div>

          </div>
          )
          })
          }
        </div>
      </div>
    </>
    :
    null}
  </>
  }
 <div className="footer-bottom">
      <p>© NOsell -- All right reserved</p>
        <div className="footer-social">
          Facebook Twitter Instagram IinkedIn.
        </div>
     </div>
</>
)
}
