import { Scoped } from "kremling";
import React from "react";

const Loading = () => {
  return (
    <Scoped css={css}>
      <div className="loading">
        <div className="loading-item">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Scoped>
  );
};

export default Loading;

const css = `
& .loading{
    position: relative;
    width: 100%;
    padding: 10rem 0;
}
& .loading-item{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
& .loading-item span{
    display: inline-block;
    width: 10px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    position: absolute;
    bottom: 0;
    background-color: rgb(180, 180, 180);
}
& .loading-item span:nth-child(1){
    left: 0;
    animation: radio .5s  .05s ease-in infinite;
}
& .loading-item span:nth-child(2){
    left: 10px;
    animation: radio .5s .15s ease-in infinite;
}
& .loading-item span:nth-child(3){
    left: 20px;
    animation: radio .5s .25s ease-in infinite;
}
& .loading-item span:nth-child(4){
    left: 30px;
    animation: radio .5s .35s ease-in infinite;
}
& .loading-item span:nth-child(5){
    left: 40px;
    animation: radio .5s .45s ease-in infinite;
}
@keyframes radio{
    0%{
        padding-top: 50px;
        opacity: 1;
        background-color: rgb(7, 208, 223);
    }
    18%{
        padding-top:35px;
        opacity: .7;
    }
    34%{
        padding-top: 25px;
        opacity: .5;
    }
    52%{
        padding-top: 10px;
        opacity: 0;
    }
    70%{
        padding-top: 25px;
        opacity: .5;
    }
    88%{
        padding-top: 35px;
        opacity: .7;
    }
    100%{
        padding-top: 50px;
        opacity: 1;
        background-color: rgb(7, 208, 223);
    }
}

`;
