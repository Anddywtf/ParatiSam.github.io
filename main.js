.animated-title {
  font-size: 6rem;
  font-weight: bold;
  color: #ff1493;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  letter-spacing: 5px;
  text-shadow: 3px 3px 10px rgba(0,0,0,0.3);
  margin-top: 20vh;
  animation: fadeInScale 2.5s ease-in-out, floating 3s ease-in-out infinite;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .animated-title {
    font-size: 3rem;
  }
}
onload = () =>{
    document.body.classList.remove("container");
};
