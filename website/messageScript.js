// Get HTML elements
const newMessageForm = document.getElementById('new-message-form');
const newMessageTextarea = document.getElementById('new-message-textarea');
const messageList = document.getElementById('message-list');

// Array to store threads and messages
let threads = [
  {
    id: 1,
    name: 'John Doe',
    messages: [
      {
        body: 'Hey, how are you?',
        timestamp: '2023-03-30T18:45:00Z',
        sent: false
      },
      {
        body: 'I\'m doing well, thanks! How about you?',
        timestamp: '2023-03-30T19:00:00Z',
        sent: true
      }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    messages: [
      {
        body: 'Hi there!',
        timestamp: '2023-03-30T20:00:00Z',
        sent: false
      }
    ]
  }
];

// Render message list for a given thread
function renderMessageList(threadId) {
  // Find thread with given ID
  let thread = threads.find(thread => thread.id === threadId);

  // Render message list
  messageList.innerHTML = '';
  thread.messages.forEach(message => {
    let li = document.createElement('li');
    li.className = message.sent ? 'sent' : 'received';
    li.textContent = message.body;
    messageList.appendChild(li);
  });
}

// Handle new message form submit event
newMessageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!newMessageTextarea.value) return;

  let currentThreadId = parseInt(localStorage.getItem('currentThreadId'));
  let thread = threads.find(thread => thread.id === currentThreadId);
  thread.messages.push({
    body: newMessageTextarea.value,
    timestamp: new Date().toISOString(),
    sent: true
  });
  renderMessageList(currentThreadId);
  newMessageTextarea.value = '';
});

// Initialize messaging page
function initMessagingPage() {
  // Set current thread ID
  let currentThreadId = 1;
  localStorage.setItem('currentThreadId', currentThreadId);

  // Render initial message list
  renderMessageList(currentThreadId);
}

// Call initMessagingPage when page is loaded
window.addEventListener('load', initMessagingPage);


// -------------------------------------------------------------

function postMessage() {
  // Get the input elements
  let messageInput = document.getElementById('message');
  let imageInput = document.getElementById('image');
  let videoInput = document.getElementById('video');
  // Get the message text
  let messageText = messageInput.value.trim();
  // Get the image URL
  let imageURL = null;
  if (imageInput.files.length > 0) {
      imageURL = URL.createObjectURL(imageInput.files[0]);
  }
  // Get the video URL
  let videoURL = null;
  if (videoInput.files.length > 0) {
      videoURL = URL.createObjectURL(videoInput.files[0]);
  }
  // Return if message, image, and video are all empty
  if (!messageText && !imageURL && !videoURL) return;
  // Create a new message object with the text, image URL, video URL, and current time
  let message = {
      text: messageText,
      imageURL: imageURL,
      videoURL: videoURL,
      timestamp: new Date()
  };
  // Add the message to the beginning of the messages array
  messages.unshift(message);
  messageInput.value = '';
  imageInput.value = '';
  videoInput.value = '';
  // Update the message display
  displayMessages();
}
function displayMessages() {
  // Get the messages container element
  let messagesContainer = document.getElementById('messages');
  // Clear the container
  messagesContainer.innerHTML = '';
  // Loop through the messages array and add each message to the container
  for (let i = 0; i < messages.length; i++) {
      let message = messages[i];


      // Create a new message element
      let messageElement = document.createElement('div');
      messageElement.classList.add('message');

      
// ===================================================================

   let dothis=document.createElement("div");
   dothis.classList.add("post-activity");

 
   let bbb=document.createElement('div');
   bbb.classList.add("post-activity-link")
   dothis.appendChild(bbb)

   let brrr=document.createElement('i')
   brrr.classList.add("fa","fa-thumbs-up")
   brrr.setAttribute("onclick","myFunction(this)")
   bbb.appendChild(brrr);

   let spaaa=document.createElement('span')
   spaaa.textContent="like";
   bbb.appendChild(spaaa)


   let ccc=document.createElement('div');
   ccc.classList.add("post-activity-link")
   dothis.appendChild(ccc)

   let crrr=document.createElement('i')
   crrr.classList.add("fa-solid", "fa-comment-dots")
   ccc.appendChild(crrr);

   let sbaaa=document.createElement('span')
   sbaaa.textContent="Comment";
   sbaaa.classList.add("deet");
  

  //  sbaaa.setAttribute("onclick","work()");
   ccc.appendChild(sbaaa)    

   let ddd=document.createElement('div');
   ddd.classList.add("post-activity-link")
   dothis.appendChild(ddd)

   
   let drrr=document.createElement('i')
   drrr.classList.add("fa-solid","fa-share")
   ddd.appendChild(drrr);

   let scaaa=document.createElement('span')
   scaaa.textContent="Share";
   ddd.appendChild(scaaa)


   
   let eee=document.createElement('div');
   eee.classList.add("post-activity-link")
   dothis.appendChild(eee)

   let errr=document.createElement('i')
   errr.classList.add("fa-solid","fa-share")
   eee.appendChild(errr);

   let sdaaa=document.createElement('span')
   sdaaa.textContent="Send";
   eee.appendChild(sdaaa)

   


  //  ==========================================================


      let mann=document.getElementById("indel");


      mann.addEventListener('click', function (event) {
        messages.splice(i, 1);
        displayMessages();
      })

      let last=document.createElement('div');
      last.classList.add("manee");

      sbaaa.addEventListener('click', function (event) {
          last.classList.toggle("manee")
          // displayMessages();
        })
      
        let textElement = document.createElement('div');
        textElement.setAttribute("id", "come")

      let comim=document.createElement('img')
      comim.setAttribute("id","opo");
      comim.src = message.imageURL;
      if(textElement){
          comim.setAttribute("src",currentUser.name)
      }

      let combox=document.createElement("input");
      combox.setAttribute("id", "haha");
      combox.setAttribute("placeholder","write a comment");

      last.classList.add("last");
      last.appendChild(comim); 
      last.appendChild(combox);


      let send = document.createElement('i')
      send.setAttribute("id", "icon-color")
      send.classList.add("fa-solid", "fa-share-nodes")
      send.textContent = "Send";

      let lscs = document.createElement('h3');
      lscs.setAttribute("id", "bnb");

      lscs.textContent = currentUser.username;

      let sps = document.createElement("p")
      sps.setAttribute("id", "any");
      sps.textContent = "Founder and CEO at Gellelio Group | Angel Investor";

      let spss = document.createElement("p")
      spss.setAttribute("id", "any");
      spss.textContent = "Just now"

      // <button id="speed" onclick="document.getElementById('id01').style.display='block'">Open Modal</button>

      let dots = document.createElement('i');
      dots.classList.add('fas', 'fa-ellipsis-v');
      // remove.textContent = "Remove";
      dots.setAttribute("id", "dell");
      dots.setAttribute("onclick","document.getElementById('id01').style.display='block'");
      // dots.textContent="open Modal"
      
      var modal = document.getElementById('id01');

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }


      textElement.appendChild(dots);

      // Set the text content of the message element
      let spann = document.createElement('div');
      spann.setAttribute("id", "spann")



      let don = document.createElement('img')
      don.setAttribute("id", "suc")

      // don.src = message.imageURL;
      don.setAttribute("src",currentUser.name)
      textElement.appendChild(don)

      textElement.appendChild(lscs);
      textElement.appendChild(sps)
      textElement.appendChild(spss)

      messageElement.appendChild(textElement);
      messageElement.appendChild(spann)
      spann.textContent = message.text;
      // textElement.appendChild(remove)
     

      // messageElement.appendChild(lscs);


      if (textElement) {
          
          messageElement.appendChild(dothis);
          messageElement.appendChild(last)
          spann.textContent = message.text; 

      }
      // Add the image to the message element, if present
      if (message.imageURL) {
          let imageElement = document.createElement('img');
          imageElement.src = message.imageURL;
          imageElement.classList.add('message-image');
          imageElement.setAttribute("width", "100%")
          messageElement.appendChild(spann)
          messageElement.appendChild(imageElement);
       
          messageElement.appendChild(dothis);
          messageElement.appendChild(last)
          
          

      }
      console.log(message)

      // Add the video to the message element, if present
      if (message.videoURL) {
          let videoElement = document.createElement('video');
          videoElement.src = message.videoURL;
          videoElement.width = 500;
          videoElement.height = 500;
          videoElement.setAttribute("controls", "controls");
          videoElement.classList.add('message-video');
          messageElement.appendChild(videoElement);
          // messageElement.appendChild(btn);
          // messageElement.appendChild(combtn);
          // messageElement.appendChild(sharebtn);
          // messageElement.appendChild(send);
          messageElement.appendChild(dothis);
          messageElement.appendChild(last)
      }
      messagesContainer.appendChild(messageElement);
  }

}
