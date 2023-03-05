
/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

// You should only attempt to request the user's accounts in response to user
// interaction, such as a button click.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.


// While you are awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can click to initiate the request.
// MetaMask will reject any additional requests while the first is still
// pending.
async function TERAWAV_ORACLE_CALL() {
  
  const accounts = await ethereum.request({method: 'eth_accounts' });
  const chainIDs = await ethereum.request({method: 'eth_chainId'});
    
 
  var numchain = {'0x89' : 'Polygon'}
 

  var addychain = {'Polygon' : '0x7A396A11d5716bb7462171dd49B3BE2D941FE593'};

  var capchain = {'Polygon': 'MATIC/USD'};
  var choosechain = numchain[chainIDs];
  
   
  await ethereum.request({
    method: 'eth_call',
    params: [{  
               from: accounts[0],
               to: "0x7A396A11d5716bb7462171dd49B3BE2D941FE593",  
               chainid: chainIDs,
               data: '0x1b222ecb'}, 'latest']
  })
  .catch((err) => { if(err.code === 4001 ) 
    {console.log(err.code)}
                   }
          ).then(result => { if(result === undefined) {console.log(result)} else{
                        var data = result;                       
                        console.log(parseInt(data));
                        const pricex = (parseInt(data) / 1000000000000000000);
                        
                        console.log('Smart Contract Address: ' + addychain[choosechain])
                        console.log("Latest " + capchain[choosechain] + " price was: " + parseInt(data)/ 100000000);
                        document.getElementById("mogsub").value = pricex.toFixed(2) + " MATIC" ;
                        
  
                                                                                      }
                    }
          );
  
                      };


async function change()
  {  
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const balance = await ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] })
    document.getElementById("connecteth").innerHTML = accounts[0].substring(0,12) + "...";

    
  }

async function connect() {
  const accounts = await ethereum.request({ method: 'eth_accounts' });

  ethereum
    .request({ method: 'eth_requestAccounts' })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
        
        // document.getElementById("Wallet").value=  "Rejected Connection";
        document.getElementById("connecteth").innerHTML = "Rejected Connection";
      } else {
        console.error(err);
      }
    }).then(result, () => {
      document.getElementById("connecteth").innerHTML = accounts[0].substring(0,12) + "...";
      
    });

  

    
}



function clickAgain() {  
    
  document.getElementById("Wallet").value= "Show Address";
  document.getElementById("liveornot").style = "font-size:8px;color:yellow";
  
}

  

