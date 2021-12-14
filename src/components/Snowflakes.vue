<template lang="html">
    <div class="snowflakes" aria-hidden="true">
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
        <div>❅</div>
    </div>
</template>
<style lang="scss" scoped>
    .snowflakes  {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        div {
            color: #fff;
            font-size: 1em;
            font-family: Arial;
            text-shadow: 0 0 1px #000;
        }
    }
    
    @keyframes snowflakes-fall{ 
        0%{top:-10%}
        100%{top:100%}
    }
    @keyframes snowflakes-shake{
        0%{transform:translateX(0px)}
        50%{transform:translateX(80px)}
        100%{transform:translateX(0px)}
    }
    
    .snowflakes div { 
        position:fixed;
        top: -10%;
        z-index: 9999;
        user-select: none; 
        cursor: default;
        animation-name:snowflakes-fall,snowflakes-shake;
        animation-duration:10s,3s;
        animation-timing-function:linear,ease-in-out;
        animation-iteration-count:infinite,infinite;
        animation-play-state:running,running

        &:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}
        &:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}
        &:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}
        &:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}
        &:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}
        &:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}
        &:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}
        &:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}
        &:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}
        &:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}
    }
 
</style>