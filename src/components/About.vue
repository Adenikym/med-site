<template>
    <div class="about-all">
        <div class="med-name">
            <h1 class="about-head">Med</h1>

            <h1 class="push">Aid.</h1>

            <div class="med-doc">
                <img src="../assets/about.jpg" alt="">
            </div>
        </div>

        <div class="about-med">

            <h2>We are On a Mission</h2>
            <p class="main-goal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui molestias veniam dignissimos iste rem, eveniet inventore sapiente voluptates labore fuga dolorem obcaecati iure saepe, quibusdam hic reprehenderit quo? Cumque, enim!</p>

            <p class="extra">We are here to serve and we have managed to impact 5 countries so far.</p>

            <p class="slogan">Your Health, Our Passion</p>

        </div>
    </div>
</template>

<script>
export default {
    name:'about'
}
</script>

<style scoped>

.med-name{
    margin-left: 10%;
    width: 55%;
}

.about-head{
    margin-top: 40px;
    font-size: 4rem;
    margin-left: 5%;
}

.push{
    font-size: 4.5rem;
    margin-left: 15%;
    margin-bottom: 30px;
}

.about-all{
    display:flex;
    justify-content: space-around;
}

.med-doc img{
    width: 40%;
    border-radius:10% ;
}

.about-med{
    width:100%;
    margin-right: 10%;
    margin-top: 40px;
}

.about-med .main-goal{
    margin-bottom: 20px;
    line-height: 1.5rem;
    margin-top: 25px;
}

.about-med .slogan{
    margin-top: 20px;
}

</style>