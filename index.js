const App = () => {

  const [quotes,setQuotes] = React.useState([]); 
  const [randomQuote, setRandomQuote] = React.useState([]);
  const [color, setColor] = React.useState("#27ae60");

  const timer = document.getElementById('stopwatch');

  var hr = 0;
  var min = 0;
  var sec = 0;
  var stoptime = true;

  const startTimer = ()=> {
    if (stoptime == true) {
          stoptime = false;
          timerCycle();
      }
  }
  const stopTimer = () => {
    if (stoptime == false) {
      stoptime = true;
    }
  }
  
  const resetTimer = () => {
      timer.innerHTML = '00:00:00';
  }

  const timerCycle = () => {
      if (stoptime == false) {
      sec = parseInt(sec);
      min = parseInt(min);
      hr = parseInt(hr);
  
      sec = sec + 1;
  
      if (sec == 60) {
        min = min + 1;
        sec = 0;
      }
      if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
      }
  
      if (sec < 10 || sec == 0) {
        sec = '0' + sec;
      }
      if (min < 10 || min == 0) {
        min = '0' + min;
      }
      if (hr < 10 || hr == 0) {
        hr = '0' + hr;
      }
  
      timer.innerHTML = hr + ':' + min + ':' + sec;
  
      setTimeout(timerCycle, 1000);
    }
  }

  

  React.useEffect(() => {
      async function fetchData(){
          const response = await fetch('https://type.fit/api/quotes');
          const data = await response.json();

          setQuotes(data);
          let randIndex = Math.floor(Math.random()*data.length);
          setRandomQuote(data[randIndex]);
      }
      fetchData();
  }, [])

  const getNewQuote = () =>{

      const colors = [
          "#16a085",
          "#27ae60",
          "#2c3e50",
          "#f39c12",
          "#e74c3c",
          "#9b59b6",
          "#FB6964",
          "#342224",
          "#472E32",
          "#BDBB99",
          "#77B1A9",
          "#73A857"
      ]

      let randIndex = Math.floor(Math.random()*quotes.length);
      let randColorIndex = Math.floor(Math.random()*colors.length);
      setRandomQuote(quotes[randIndex]);
      setColor(colors[randColorIndex])
  }

  const fetchAll = () => {

  }

  const verifyRavi = () =>{
    var x = document.getElementById('passRavi').value;
    if(x==="x"){
      alert("Password Accepted!");
      document.getElementById('imgRavi').src = "Xthisone.jpeg";
    }
    else{
      alert("Password Rejected!");
    }
  }

  const verifyAnurag = () =>{
    var x = document.getElementById('passAnu').value;
    if(x==="iamtoosexyformylove"){
      alert("Password Accepted!");

    }
    else{
      alert("Password Rejected!");
    }
  }

  const verifyTaqi = () =>{
    var x = document.getElementById('passTaqi').value;
    if(x==="assovertits"){
      alert("Password Accepted!");
    }
    else{
      alert("Password Rejected!");
    }
  }

  const verifyMinh = () =>{
    var x = document.getElementById('passMinh').value;
    if(x==="iloveeileen"){
      alert("Password Accepted!");
    }
    else{
      alert("Password Rejected!");
    }
  }

  const verifyJB = () =>{
    var x = document.getElementById('passJB').value;
    if(x==="best"){
      alert("Password Accepted!");
    }
    else{
      alert("Password Rejected!");
    }
  }

  const verifyPhil = () =>{
    var x = document.getElementById('passPhil').value;
    if(x==="minhissecretlygay"){
      alert("Password Accepted!");
    }
    else{
      alert("Password Rejected!");
    }
  }

  return (
    <div style={{backgroundColor: color, minHeight: "150vh"}}>
      <div className="container pt-5" style={{backgroundColor: color}}>
        <div className="text-center">
            {/* 00:00:00 */}
        <h1 style={{backgroundColor: color}}>Fat Beta Fall - No Nut November Challenge!</h1>
            <div className="row justify-content-center align-items-center">
            <h1 className="col-3">Just...</h1>
            <iframe className="col-6" src="https://free.timeanddate.com/countdown/i81satlx/n1206/cf12/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cac000/cpc000/pct/tcfff/fn3/fs100/szw1800/szh759/iso2021-12-01T00:00:00/bat0/pa2" allowtransparency="true" frameborder="0" width="491" height="159"></iframe>
            <h1 className="col-3">remaining</h1>
            </div>
        </div>

        {/* <ul id="buttons">
            <li><button onClick={startTimer}>Start</button></li>
            <li><button onClick={stopTimer}>Stop</button></li>

            <li><button onClick={resetTimer}>Reset</button></li>
        </ul> */}

      </div>
      <div className=" h-100 d-flex justify-content-center align-items-center" style={{backgroundColor: color}}>

          <div className="container m-3 p-3" >
            <div className="card row" style={{backgroundColor: "#232627"}}>
            <img className="card-img-top" id="imgRavi" src="thisone.jpeg" alt="Card image cap" style={{minHeight: "320px"}}></img>
              <div className="card-body text-center">
                <h5 className="card-title text-light">Sir Ravi</h5>
                <form action="connect.php" method="post">
                <div class="form-group row">
                  <div>
                    <input type="password"style={{backgroundColor: "#232627"}} class="form-control" id="passRavi" name="passRavi" placeholder="Password"></input>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary" onClick={verifyRavi}>GIVE UP!</button>
                </form>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="btn btn-primary">GIVE UP!</a> */}
              </div>
            </div>
          </div>

          <div className="container m-3 p-3" >
            <div className="card row" style={{backgroundColor: "#232627"}}>
            <img className="card-img-top" id="imgAnu" src="Xthistwo.jpeg" alt="Card image cap" style={{minHeight: "320px"}}></img>
              <div className="card-body text-center">
                <h5 className="card-title text-light">Anurag</h5>
                <form>
                <div class="form-group row">
                  <div>
                    <input type="password" style={{backgroundColor: "#232627"}} class="form-control" id="passAnu" name="passAnu" placeholder="Password"></input>
                  </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={verifyAnurag}>GIVE UP!</button>
                </form>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="btn btn-primary">GIVE UP!</a> */}
              </div>
            </div>
          </div>

          <div className="container m-3 p-3" >
            <div className="card row" style={{backgroundColor: "#232627"}}>
            <img className="card-img-top" id="imgTaqi" src="thisfour.jpeg" alt="Card image cap" style={{minHeight: "320px"}}></img>
              <div className="card-body text-center">
                <h5 className="card-title text-light">Taki Taki </h5>
                <form>
                <div class="form-group row">
                  <div>
                    <input type="password"style={{backgroundColor: "#232627"}} class="form-control" id="passTaqi" name="passTaqi" placeholder="Password"></input>
                  </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={verifyTaqi}>GIVE UP!</button>
                </form>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="btn btn-primary">GIVE UP!</a> */}
              </div>
            </div>
          </div>

          <div className="container m-3 p-3">
            <div className="card row" style={{backgroundColor: "#232627"}}>
            <img className="card-img-top" id="imgMinh" src="66.jpg" alt="Card image cap" style={{minHeight: "320px"}}></img>
              <div className="card-body  text-center">
                <h5 className="card-title text-light">MegaChad Minh</h5>
                <form>
                <div class="form-group row">
                  <div>
                    <input type="password" style={{backgroundColor: "#232627"}} class="form-control" id="passMinh" name="passMinh" placeholder="Password"></input>
                  </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={verifyMinh}>GIVE UP!</button>
                </form>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="btn btn-primary">GIVE UP!</a> */}
              </div>
            </div>
          </div>

          <div className="container m-3 p-3" >
            <div className="card row" style={{backgroundColor: "#232627"}}>
            <img className="card-img-top" id="imgJenil" src="jj.jpeg" alt="Card image cap" style={{minHeight: "320px"}}></img>
              <div className="card-body text-center">
                <h5 className="card-title text-light">Just Jenil</h5>
                <form>
                <div class="form-group row">
                  <div>
                    <input type="password" style={{backgroundColor: "#232627"}}class="form-control" id="passJB" name="passJB"placeholder="Password"></input>
                  </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={verifyJB}>GIVE UP!</button>
                </form>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="btn btn-primary">GIVE UP!</a> */}
              </div>
            </div>
          </div>

          <div className="container m-3 p-3" >
            <div className="card row" style={{backgroundColor: "#232627"}}>
            <img className="card-img-top" id="imgPhil" src="kj.jpeg" alt="Card image cap" style={{minHeight: "320px"}}></img>
              <div className="card-body text-center">
                <h5 className="card-title text-light">Pham</h5>
                <form>
                <div class="form-group row">
                  <div>
                    <input type="password" style={{backgroundColor: "#232627"}} class="form-control" id="passPhil" name="passPhil" placeholder="Password"></input>
                  </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={verifyPhil}>GIVE UP!</button>
                </form>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" class="btn btn-primary">GIVE UP!</a> */}
              </div>
            </div>
          </div>
      </div>
      <div className="container">
              <h1 className="text-center mb-3"> Need motivation? -> Click "Quote"</h1>
              <div className="jumbotron " style={{backgroundColor: "#232627"}}id="quote-box">
                  <div className="container" >
                      {randomQuote ? (
                          <>
                          <h6 className="display-4 text-light"><i class="fas fa-quote-left" id="text" style={{color: color}}></i>&#8194;{randomQuote.text}</h6>
                          <p className="lead text-center text-light" id="author">-{randomQuote.author || "Unknown"}</p>
                          </>
                      ):(
                          <h2>Loading...</h2>
                      )}
                      <div className="row">
                          <div className="col-6">
                              <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+randomQuote.text + '" ' + randomQuote.author )} target="_blank" id="tweet-quote"><i class="fab fa-3x fa-twitter-square" style={{color: color}}></i></a>
                              <a href="#"><i class="ml-3 fab fa-3x fa-tumblr-square" style={{color: color}}></i></a>
                          </div>
                          <div className="col-6 ">
                              <button onClick={getNewQuote} className=" float-right btn btn-primary" id="new-quote" style={{backgroundColor: color, paddingBottom: 10}}>Quote</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        
      </div>
      );
}


ReactDOM.render(<App/>,document.getElementById('app'));