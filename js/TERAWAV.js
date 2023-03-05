const email = document.getElementById('inputEmail');

const TERAWAV_PURCHASE = document.getElementById('TERAWAV_PURCHASE');




const database = firebase.database();
const rootRef = database.ref('customer');
const rootRef2 = database.ref('pricing');






TERAWAV_PURCHASE.addEventListener('click',  (e) => {
    firebase.auth().signInAnonymously();
    async function TERAWAV_ORACLE_DATA() {
  
      const accounts = await ethereum.request({method: 'eth_accounts' });
      const chainIDs = await ethereum.request({method: 'eth_chainId'});
        
     
      
      
                          };
    
    async function TERAWAV_KIT_PURCHASE() {

        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const web3 = new Web3(new Web3.providers.HttpProvider("https://polygon-mainnet.infura.io/v3/3ac1c65d7658459ebafe15361c77dbac"))
        const chainIDs = await ethereum.request({method: 'eth_chainId'});

        var numchain = {'0x89' : 'Polygon'}
     
    
        var addychain = {'Polygon' : '0xf9680d99d6c9589e2a93a78a04a279e509205945'};
      
        var capchain = {'Polygon': 'ETH/USD'};
        var choosechain = numchain[chainIDs];
        
         
        const TERAWAV_NFT_PRICE = await ethereum.request({
          method: 'eth_call',
          params: [{  
                     from: accounts[0],
                     to: addychain[choosechain],  
                     chainid: chainIDs,
                     data: '0x890d25bcd'}, 'latest']
        })
        .catch((err) => { if(err.code === 4001 ) 
          {console.log(err.code)}
                         }
                ).then(result => { if(result === undefined) {console.log(result)} else{
                              var data = result;                       
                              const pricex = (50) / (parseInt(data) / 100000000);
                              return pricex;                            
        
                                                                                            }
                          }
                );
  
          
        const TWAV = await TERAWAV_NFT_PRICE;
              
  
              ;
        async function PURCHASE_VERIFICATION() {
         
        const w3 = new Web3(new Web3.providers.HttpProvider("https://cloudflare-eth.com"))
        var oracle = new w3.eth.Contract(CHAINLINK_ORACLE_ABI, chainlink);
        var tip = web3.utils.toWei("1", 'gwei');
        var gasup = web3.utils.numberToHex(700000);
        var gasxup = web3.utils.numberToHex(215051);
        var tipup = web3.utils.numberToHex(1500000000);
        oracle.methods.latestAnswer().call({from: accounts[0]}, function(error, res) {
          if (error != null) {
                                console.log(error)
                                return;
        } else {
            var data = res;
            console.log("Latest price was:" ,res)}
            console.log(parseInt(data));
                });
        console.log(TWAV);

        var Rate = web3.utils.numberToHex(TWAV * 1000000000000000000);
        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [{  
                     from: accounts[0],
                     to: "0xC84D062Bd50d31de2888e4B3414864bEa20A62b8", 
                     tag: 'latest',
                     value: Rate, 
                     chainid: '0x89',
                     maxPriorityFeePerGas: tipup,
                     gas: gasup,
                     data: "0xb3f5e72a" }]
        }).catch((err) => { if(err.code === 4001) 
          {
            console.log("Error 4001");
            $('#TERAWAV_PURCHASE').attr('data-target','#exampleModal');    
            $("#exampleModal").modal('hide');

            $("#errorwebModal").modal('show');
          }
          if(err.code === -32603) 
          {
            $('#TERAWAV_PURCHASE').attr('data-target','#exampleModal');    
            $("#exampleModal").modal('hide');
            console.log("Error -32603");
            $("#errorwebModal").modal('show');
           }
        
          
           if(err.code === -32000) 
          {
            $('#TERAWAV_PURCHASE').attr('data-target','#exampleModal');    
            $("#exampleModal").modal('hide');
            console.log("Error -32000");
            $("#errorwebModal").modal('show');
           }
          }
          
        ).then(result => {
           if (result !== undefined) {
            
            firebase.auth().onAuthStateChanged( async firebaseUser => {
                if (firebaseUser) {
                    uid = firebaseUser.uid
                    const accounts = await ethereum.request({ method: 'eth_accounts' });
                   
                    e.preventDefault();
                    rootRef.child( accounts[0] + uid).set({
                    Email: email.value,
                    TransactionHash: result,
                    OnchainAddress: accounts[0],
                    PaidAmount: Rate + "ETH"

            
                    })
                    var addhash = result;
                  
                 

                    document.getElementById('subhash').href = "https://Polygon.etherscan.io/tx/" + addhash ;
                    document.getElementById('subhash').target = "_blank"
                    console.log(addhash);
                    $("#subwebModal").modal('show');
                      
                    async function sucwin() {
                    var readme = await ethereum.request({
                    method: 'eth_getTransactionReceipt',
                    params: [result]
                                                    })
                    if (readme === null) {
                    sucwin()             
                  }
                    else {
                      if(readme['status'] === '0x1') {
                      
                        $('#TERAWAV_PURCHASE').attr('data-target','#exampleModal');    
                        $("#exampleModal").modal('hide');
                        $("#subwebModal").modal('hide');

                        document.getElementById('suchash').href = "https://polygonscan.io/tx/" + addhash ;
                        document.getElementById('suchash').target = "_blank"
                        document.getElementById('OPENSEA').href = "https://opensea.io/collection/terawav";
                        document.getElementById('OPENSEA').target = "_blank"

                        
                        console.log(addhash)

                      $("#successwebModal").modal('show');
                        console.log(readme['logs'])
                      } 
                    
                     }
                    
                                         }
                    
                    
                    sucwin();

                } else {
                  
                  $('#TERAWAV_PURCHASE').attr('data-target','#exampleModal');    
                  $("#exampleModal").modal('hide');
                  $("#errorwebModal").modal('show');
                  
                    console.log("ERROR UNKNOWN");
                    console.log(result);
                    console.log(addhash);
                }
          

    })
            
            
            } }); }

            PURCHASE_VERIFICATION();

        
                            
                  }
                  TERAWAV_KIT_PURCHASE();
     
    
})






             
           