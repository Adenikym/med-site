<template>
    <div class='page'>
        <div class="channels">
<h1>Get In Touch</h1>
<p>Fill this contact form to get a response within 24hrs.</p>
 <div class="contact-details">
     <i class="fas fa-phone-alt"></i>
 <p >+234 6789 9999 78</p>
</div>

<div class="send-mail">
    <i class="fas fa-envelope-square"></i>
        <p class="mail">info.medaid@gmail.com</p>
        </div>

        <div class="aid-location">
            <i class="fas fa-map-marker-alt"></i>
        <p class="location">1022 street 3744 bodija</p>
        </div>
<div class="socials">
<i class="fab fa-twitter"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-facebook-f"></i>
</div>
        </div>

       

        <div class="contact-form">
            <form class="contact">
                <label for="">Your Name</label>
                <br>
                <input type="text" name="" id="">
<br>
                <label for="">Mail</label>
                <br>
                <input type="email" name="" id="">
<br>
                <label for="Message">Message</label>
                <br>
                <input placeholder="Message" class="message" type="text" name="" id="">
<br>
                <input  class="sub" type="submit" value="Send Message">
            </form>
        </div>

        
    </div>
</template>

<script>
export default {
    name:'contactus'
}
</script>

<style scoped>
.page{
    background-color: #1b2259;
    display: flex;
    justify-content:space-around ;
    height:100vh;
}
.channels{
    color:white;
    font-weight: 300;
}

.channels h1{
    margin-bottom: 30px;
    margin-top:40px;
}



.contact-form{
    background-color: white;
    width:35%;
    margin-top: 30px;
    margin-bottom: 40px;
    height: 500px;
    border-radius: 25px;
}

.contact-details{
    margin-top: 80px;
    padding: 5px 10px;
    width: 60%;
    cursor: pointer;
    display: flex;
}

.contact-details p{
    padding: 10px 10px;
    margin-left: 2%;
}

.contact-details :hover{
    border: 2px solid#234ac2;
}

 .send-mail, .aid-location{
    display:flex;
    margin-top: 30px;
     padding: 5px 10px;
    width: 60%;
    cursor: pointer;
}

.send-mail p{
     margin-left: 2%;
}

.aid-location{
     margin-left: 2%;
}

.send-mail:hover{
     border: 2px solid#234ac2;
}

.aid-location:hover{ border: 2px solid#234ac2;}

.contact{
    margin-top: 35px;
     margin-left: 10%;
}

.contact .sub{
    width:40%;
    padding: 10px 20px;
    color:white;
    background-color:#234ac2 ;
    border:1px solid #234ac2;
}

.contact .message{
    height: 150px;
    background-color: #f3f4f8;
    border: none;
}

input{
    border:2px solid lightgrey;
    height:40px;
    width:80%;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 20px;
   outline-color: #234ac2;
}

label{
    margin-top: 10px;
    margin-bottom: 5px;
}

.socials{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}
</style>