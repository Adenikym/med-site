<template>
    <div>
        
        <nav>
            <div class="style">
            <div class="topnav">
                <div class="logo">
                    <h2>medAid</h2>
                </div>

                <ul class="top">
                   <li><router-link to="/">Home</router-link></li>
                     <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li>News</li>
                </ul>

                
            </div>
<button class="donate">DONATE</button>
</div>
            <div class="ham-b">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line1"></div>
            </div>

            <div class="mobnav">
                <div class="mob-logo">
                    <h2>medAid</h2>
                </div>

                <ul class="mobile">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>News</li>
                </ul>

                <button class="donate-mob">DONATE</button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'heading'
}
</script>

<style  >

.style{
    display: flex;
}
.topnav{
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color: #080b62;
    color:white;
    height: 60px;
    font-weight: 100;
    width: 85%;


}

.top{
    width:70%;
    display: flex;
    list-style: none;
}

.top li{
    margin-left: 10%;
}

.donate{
    margin-left: 3%;
    height: 30px;
    padding: 5px 10px;
    margin-top: 10px;
    background-color: #baddfa;
    border: 1px solid #baddfa;
    color: white;
    font-weight:bold;
}

.mobnav{
    display: none;
}

a{
    color: white;
}

</style>