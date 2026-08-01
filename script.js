*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:linear-gradient(135deg,#ff9ecf,#ffd6e7);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
}

.container{
    width:90%;
    max-width:420px;
    background:white;
    padding:30px;
    border-radius:20px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,.2);
    animation:fade .7s;
}

.hidden{
    display:none;
}

h1{
    color:#ff2d75;
    font-size:38px;
    margin-bottom:15px;
}

h2{
    color:#ff2d75;
    margin-bottom:15px;
}

p{
    color:#444;
    font-size:18px;
    line-height:28px;
    margin-bottom:20px;
}

button{
    border:none;
    background:#ff2d75;
    color:white;
    padding:14px 28px;
    font-size:18px;
    border-radius:50px;
    cursor:pointer;
    transition:.3s;
    margin:10px;
}

button:hover{
    transform:scale(1.08);
}

.buttons{
    position:relative;
    height:150px;
}

#noBtn{
    position:absolute;
}

@keyframes fade{
    from{
        opacity:0;
        transform:scale(.8);
    }
    to{
        opacity:1;
        transform:scale(1);
    }
}
