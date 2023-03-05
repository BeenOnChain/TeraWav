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
     
    
        var addychain = {'Polygon' : '0x7A396A11d5716bb7462171dd49B3BE2D941FE593'};
      
        var capchain = {'Polygon': 'MATIC/USD'};
        var choosechain = numchain[chainIDs];
        
         
        const TERAWAV_NFT_PRICE = await ethereum.request({
          method: 'eth_call',
          params: [{  
                     from: accounts[0],
                     to: addychain[choosechain],  
                     chainid: chainIDs,
                     data: '0x1b222ecb'}, 'latest']
        })
        .catch((err) => { if(err.code === 4001 ) 
          {console.log(err.code)}
                         }
                ).then(result => { if(result === undefined) {console.log(result)} else{
                              var data = result;                       
                              const pricex = (parseInt(data) / 1000000000000000000);
                              return pricex;                            
        
                                                                                            }
                          }
                );
  
          
        const TWAV = await TERAWAV_NFT_PRICE;
              
  
              ;
        async function PURCHASE_VERIFICATION() {
         
        const w3 = new Web3(new Web3.providers.HttpProvider("https://cloudflare-eth.com"))
        var oracle = new w3.eth.Contract(CHAINLINK_ORACLE_ABI, '0x7A396A11d5716bb7462171dd49B3BE2D941FE593');
        var tip = web3.utils.toWei("1", 'gwei');
        var gasup = web3.utils.numberToHex(700000);
        var gasxup = web3.utils.numberToHex(215051);
        var tipup = web3.utils.numberToHex(1500000000);
       
        console.log(TWAV + "Price of TWAV");

        var Rate = web3.utils.numberToHex(TWAV * 1000000000000000000);
        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [{  
                     from: accounts[0],
                     to: "0x7A396A11d5716bb7462171dd49B3BE2D941FE593", 
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
                  
                 

                    document.getElementById('subhash').href = "https://polygonscan.io/tx/" + addhash ;
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






             
           