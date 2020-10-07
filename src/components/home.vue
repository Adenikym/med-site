<template>
    <div class="wrapper">
        <div class="words">
           <div class="updates">
               <button class="new">NEW</button>
               Get latest updates on COVID-19
           </div>
            <h1>Providing Aid for people in need.</h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam rem
                 voluptatibus exercitationem ducimus excepturi necessitatibus amet illum, 
                laboriosam labore quo modi eius saepe.</p>
        </div>

        <div class="curve">
            <img src="../assets/pic.jpg" alt="">
        </div>

        <div class="f-color"></div>
    </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<style scoped>

*{
    margin: 0;
}
.wrapper{
   
  display:flex;
  width: 100%;
  
}

.curve{
     background-color: #080b62;
    width:30%;
    border-radius:0px 0px 100px 0px;
    
}

.curve img{
    width:100%;
    margin-top: 70px;
    border-radius: 200px 0px 150px 200px ;
    
}

.f-color{
    width:20%;
    background-color: #f3f4f8;
    height: 320px;
}

.words{
    background-color:#080b62;
    color:white;
  width:83%;
  
}

.words h1{
    margin-left: 20%;
   
    margin-top: 20px;
    font-size: 3.5rem;
}

.words p{
    margin-left: 20%;
   
    margin-top: 20px;
    font-weight:300;
    line-height: 2rem;
    margin-bottom: 20px;
}

.updates{
    margin-top: 100px;
margin-left: 30%;
margin-right: 20%;
background-color: #71788d;
border-radius:10px;
}

.updates button{
    border-radius:10px;
    padding: 2px 4px ;
    color:white;
    background-color: #baddfa;
    border: 1px solid #baddfa;
}

</style>