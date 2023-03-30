let messages = [];
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}
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

        


     let dothis=document.querySelector(".post-activity");

     console.log(dothis)

     

     

        // let btn = document.createElement("i");
        // btn.classList.add("fa-solid", "fa-thumbs-up");
        // btn.setAttribute("onclick", "myFunction(this)")
        // btn.setAttribute("id", "icon-color");
        // btn.textContent = "Like";





        let mann=document.getElementById("indel");

        // let remove = document.createElement('i');
        // remove.classList.add('Mass');
        // remove.textContent = "Remove";
        // remove.setAttribute("id","del")
        mann.addEventListener('click', function (event) {
          messages.splice(i, 1);
          displayMessages();
        })



        // let sharebtn = document.createElement('i');
        // sharebtn.setAttribute("id", "icon-color");
        // sharebtn.textContent = "Share";
        // sharebtn.classList.add("fa-solid", "fa-share")




        // let combtn = document.createElement('i');
        // combtn.setAttribute("id", "icon-color");
        // combtn.classList.add("fa-solid", "fa-comment-dots")
        // combtn.textContent = " comment"

        let last=document.createElement('div');


        let comim=document.createElement('img')
        comim.setAttribute("id","opo");
        comim.src = message.imageURL;

        let combox=document.createElement("input");
        combox.setAttribute("id", "haha")
        combox.setAttribute("placeholder","write a comment")

        
        last.classList.add("last");
        last.appendChild(comim); 
        last.appendChild(combox);


        let send = document.createElement('i')
        send.setAttribute("id", "icon-color")
        send.classList.add("fa-solid", "fa-share-nodes")
        send.textContent = "Send";

        let lscs = document.createElement('h3');
        lscs.setAttribute("id", "bnb");

        lscs.textContent = "Divya pandey................."

        let sps = document.createElement("p")
        sps.setAttribute("id", "any");
        sps.textContent = "Founder and CEO at Gellelio Group | Angel Investor";

        let spss = document.createElement("p")
        spss.setAttribute("id", "any");
        spss.textContent = "1 min ago"

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

        
        // Set the text content of the message element
        let spann = document.createElement('div');
        spann.setAttribute("id", "spann")
        // messageElement.appendChild(spann)
        let textElement = document.createElement('div');
        textElement.setAttribute("id", "come")
        // let spann=document.createElement('div');
        // spann.setAttribute("id","spann")

        textElement.appendChild(dots);



        let don = document.createElement('img')
        don.setAttribute("id", "suc")

        don.src = message.imageURL;
        textElement.appendChild(don)

        textElement.appendChild(lscs);
        textElement.appendChild(sps)
        textElement.appendChild(spss)

        spann.textContent = message.text;
        messageElement.appendChild(spann)
        // textElement.appendChild(remove)
        messageElement.appendChild(textElement);

        // messageElement.appendChild(lscs);


        if (textElement) {
            spann.textContent = message.text;
            // messageElement.appendChild(btn);
            // messageElement.appendChild(combtn);
            // messageElement.appendChild(sharebtn);
            // messageElement.appendChild(send);
            // messageElement.appendChild(combox);
            messageElement.appendChild(dothis);
            messageElement.appendChild(last)

        }
        // Add the image to the message element, if present
        if (message.imageURL) {
            let imageElement = document.createElement('img');
            imageElement.src = message.imageURL;
            imageElement.classList.add('message-image');
            imageElement.setAttribute("width", "100%")
            messageElement.appendChild(spann)
            messageElement.appendChild(imageElement);
            // messageElement.appendChild(btn);
            // messageElement.appendChild(combtn);
            // messageElement.appendChild(sharebtn);
            // messageElement.appendChild(send)
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